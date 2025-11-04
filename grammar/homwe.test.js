// homwe.test.js
import { describe, it, expect, beforeEach } from 'vitest';
import antlr4 from 'antlr4';
import HomweLexer from './build/HomweLexer.js';
import HomweParser from './build/HomweParser.js';
import { HomweExecutor } from './HomweVisitor.js';

describe('Homwe Database Tests', () => {
    let executor;

    beforeEach(() => {
        executor = new HomweExecutor();
    });

    const parseAndExecute = (input) => {
        const chars = new antlr4.InputStream(input);
        const lexer = new HomweLexer(chars);
        const tokens = new antlr4.CommonTokenStream(lexer);
        const parser = new HomweParser(tokens);
        const tree = parser.program();

        return executor.execute(tree);
    };

    describe('CREATE Operations', () => {
        it('should create a new collection', () => {
            const result = parseAndExecute('mu homwe mune users');
            expect(result[0]).toHaveProperty('success', true);
            expect(result[0]).toHaveProperty('collection', 'users');
        });

        it('should not create duplicate collections', () => {
            parseAndExecute('mu homwe mune users');
            const result = parseAndExecute('mu homwe mune users');
            expect(result[0]).toHaveProperty('success', false);
            expect(result[0]).toHaveProperty('message', 'Collection already exists');
        });

        it('should define columns for a collection', () => {
            parseAndExecute('mu homwe mune users');
            const result = parseAndExecute('users ine name, age, email');
            expect(result[0]).toHaveProperty('success', true);
            expect(result[0].columns).toEqual(['name', 'age', 'email']);
        });

        it('should insert values into collection', () => {
            parseAndExecute('mu homwe mune users');
            parseAndExecute('users ine name, age, email');
            const result = parseAndExecute('isa ("John", 25, "john@email.com") mu users');
            expect(result[0]).toHaveProperty('success', true);
            expect(result[0]).toHaveProperty('id');
        });

        it('should insert values with different types', () => {
            parseAndExecute('mu homwe mune products');
            parseAndExecute('products ine name, price, inStock');
            const result = parseAndExecute('isa ("Laptop", 999.99, "yes") mu products');
            expect(result[0]).toHaveProperty('success', true);
        });

        it('should handle underscore as null value', () => {
            parseAndExecute('mu homwe mune users');
            parseAndExecute('users ine name, age, email');
            const result = parseAndExecute('isa ("Alice", _, "alice@email.com") mu users');
            expect(result[0]).toHaveProperty('success', true);
        });

        it('should throw error when inserting into non-existent collection', () => {
            expect(() => {
                parseAndExecute('isa ("Test", 123) mu nonexistent');
            }).toThrow('Collection nonexistent does not exist');
        });
    });

    describe('READ Operations', () => {
        beforeEach(() => {
            parseAndExecute('mu homwe mune users');
            parseAndExecute('users ine name, age, email, city');
            parseAndExecute('isa ("John", 25, "john@email.com", "Harare") mu users');
            parseAndExecute('isa ("Jane", 30, "jane@email.com", "Bulawayo") mu users');
            parseAndExecute('isa ("Bob", 25, "bob@email.com", "Harare") mu users');
            parseAndExecute('isa ("Alice", 35, "alice@email.com", "Mutare") mu users');
        });

        it('should select all records', () => {
            const result = parseAndExecute('zvese kubva mu users');
            expect(result[0]).toHaveLength(4);
        });

        it('should select specific columns with parentheses', () => {
            const result = parseAndExecute('(name, age) kubva mu users');
            expect(result[0][0]).toHaveProperty('name');
            expect(result[0][0]).toHaveProperty('age');
            expect(result[0][0]).not.toHaveProperty('email');
            expect(result[0][0]).not.toHaveProperty('city');
        });

        it('should select columns without parentheses', () => {
            const result = parseAndExecute('name, email kubva mu users');
            expect(result[0][0]).toHaveProperty('name');
            expect(result[0][0]).toHaveProperty('email');
            expect(result[0][0]).not.toHaveProperty('age');
            expect(result[0][0]).not.toHaveProperty('city');
        });

        it('should select single column', () => {
            const result = parseAndExecute('name kubva mu users');
            expect(result[0][0]).toHaveProperty('name');
            expect(Object.keys(result[0][0])).toHaveLength(1);
        });

        it('should filter with WHERE clause using "ane"', () => {
            const result = parseAndExecute('zvese kubva mu users ane age = 25');
            expect(result[0]).toHaveLength(2);
        });

        it('should filter with WHERE clause using "vane"', () => {
            const result = parseAndExecute('zvese kubva mu users vane city = "Harare"');
            expect(result[0]).toHaveLength(2);
        });

        it('should filter with WHERE clause using "ine"', () => {
            const result = parseAndExecute('zvese kubva mu users ine name = "Jane"');
            expect(result[0]).toHaveLength(1);
            expect(result[0][0].name).toBe('Jane');
        });

        it('should combine column selection with WHERE clause', () => {
            const result = parseAndExecute('(name, email) kubva mu users ane age = 25');
            expect(result[0]).toHaveLength(2);
            expect(result[0][0]).toHaveProperty('name');
            expect(result[0][0]).toHaveProperty('email');
            expect(result[0][0]).not.toHaveProperty('age');
        });

        it('should return empty array for non-matching WHERE clause', () => {
            const result = parseAndExecute('zvese kubva mu users ane age = 100');
            expect(result[0]).toHaveLength(0);
        });

        it('should return empty array for non-existent collection', () => {
            const result = parseAndExecute('zvese kubva mu nonexistent');
            expect(result[0]).toEqual([]);
        });

        it('should handle LIMIT clause', () => {
            const result = parseAndExecute('zvese kubva mu users 2');
            console.log(result)
            expect(result[0]).toHaveLength(2);
        });

        it('should handle WHERE with LIMIT', () => {
            const result = parseAndExecute('zvese kubva mu users ane age = 25 1');
            console.log(result)
            expect(result[0]).toHaveLength(1);
        });
    });

    describe('UPDATE Operations', () => {
        beforeEach(() => {
            parseAndExecute('mu homwe mune users');
            parseAndExecute('users ine name, age, email');
            parseAndExecute('isa ("John", 25, "john@email.com") mu users');
            parseAndExecute('isa ("Jane", 30, "jane@email.com") mu users');
            parseAndExecute('isa ("Bob", 25, "bob@email.com") mu users');
        });

        it('should update a single field', () => {
            const result = parseAndExecute('chinja age kuita 26 ane name = "John"');
            expect(result[0]).toHaveProperty('success', true);
            expect(result[0]).toHaveProperty('updated', 1);

            const selectResult = parseAndExecute('zvese kubva mu users ane name = "John"');
            expect(selectResult[0][0].age).toBe(26);
        });

        it('should update multiple records', () => {
            const result = parseAndExecute('chinja age kuita 27 ane age = 25');
            expect(result[0]).toHaveProperty('success', true);
            expect(result[0]).toHaveProperty('updated', 2);

            const selectResult = parseAndExecute('zvese kubva mu users ane age = 27');
            expect(selectResult[0]).toHaveLength(2);
        });

        it('should update with string value', () => {
            const result = parseAndExecute('chinja email kuita "newemail@test.com" ane name = "Bob"');
            expect(result[0]).toHaveProperty('success', true);

            const selectResult = parseAndExecute('zvese kubva mu users ane name = "Bob"');
            expect(selectResult[0][0].email).toBe('newemail@test.com');
        });

        it('should handle update with no matches', () => {
            const result = parseAndExecute('chinja age kuita 40 ane name = "NonExistent"');
            expect(result[0]).toHaveProperty('success', true);
            expect(result[0]).toHaveProperty('updated', 0);
        });
    });

    describe('DELETE Operations', () => {
        beforeEach(() => {
            parseAndExecute('mu homwe mune users');
            parseAndExecute('users ine name, age, email');
            parseAndExecute('isa ("John", 25, "john@email.com") mu users');
            parseAndExecute('isa ("Jane", 30, "jane@email.com") mu users');
            parseAndExecute('isa ("Bob", 25, "bob@email.com") mu users');
        });

        it('should delete a single record', () => {
            const result = parseAndExecute('bvisa users ane name = "John"');
            expect(result[0]).toHaveProperty('success', true);
            expect(result[0]).toHaveProperty('deleted', 1);

            const selectResult = parseAndExecute('zvese kubva mu users');
            expect(selectResult[0]).toHaveLength(2);
        });

        it('should delete multiple records', () => {
            const result = parseAndExecute('bvisa users ane age = 25');
            expect(result[0]).toHaveProperty('success', true);
            expect(result[0]).toHaveProperty('deleted', 2);

            const selectResult = parseAndExecute('zvese kubva mu users');
            expect(selectResult[0]).toHaveLength(1);
        });

        it('should handle delete with no matches', () => {
            const result = parseAndExecute('bvisa users ane name = "NonExistent"');
            expect(result[0]).toHaveProperty('success', true);
            expect(result[0]).toHaveProperty('deleted', 0);

            const selectResult = parseAndExecute('zvese kubva mu users');
            expect(selectResult[0]).toHaveLength(3);
        });

        it('should delete all records with matching criteria', () => {
            parseAndExecute('isa ("Alice", 25, "alice@email.com") mu users');
            const result = parseAndExecute('bvisa users ane age = 25');
            expect(result[0]).toHaveProperty('deleted', 3);

            const selectResult = parseAndExecute('zvese kubva mu users');
            expect(selectResult[0]).toHaveLength(1);
            expect(selectResult[0][0].name).toBe('Jane');
        });
    });

    describe('Multiple Statements', () => {
        it('should execute multiple statements in one program', () => {
            const result = parseAndExecute(`
                mu homwe mune products
                products ine name, price
                isa ("Book", 15.99) mu products
                isa ("Pen", 2.50) mu products
                zvese kubva mu products
            `);

            expect(result).toHaveLength(5);
            expect(result[0]).toHaveProperty('success', true);
            expect(result[0]).toHaveProperty('collection', 'products');
            expect(result[1]).toHaveProperty('success', true);
            expect(result[2]).toHaveProperty('success', true);
            expect(result[3]).toHaveProperty('success', true);
            expect(result[4]).toHaveLength(2);
        });
    });

    describe('Edge Cases', () => {
        it('should handle empty collection', () => {
            parseAndExecute('mu homwe mune empty');
            const result = parseAndExecute('zvese kubva mu empty');
            expect(result[0]).toHaveLength(0);
        });

        it('should handle special characters in strings', () => {
            parseAndExecute('mu homwe mune test');
            parseAndExecute('test ine data');
            // Use template literal with String.raw
            const result = parseAndExecute(String.raw`isa ("Test's \"quoted\" value") mu test`);
            expect(result[0]).toHaveProperty('success', true);
        });

        it('should handle numeric operations', () => {
            parseAndExecute('mu homwe mune numbers');
            parseAndExecute('numbers ine value');
            parseAndExecute('isa (100) mu numbers');
            parseAndExecute('isa (200.5) mu numbers');
            parseAndExecute('isa (0) mu numbers');

            const result = parseAndExecute('zvese kubva mu numbers');
            expect(result[0]).toHaveLength(3);
            expect(result[0][0].value).toBe(100);
            expect(result[0][1].value).toBe(200.5);
            expect(result[0][2].value).toBe(0);
        });
    });
});