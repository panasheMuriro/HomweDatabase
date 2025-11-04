// HomweVisitor.js
import HomweVisitor from './build/HomweVisitor.js';
import HomweParser from './build/HomweParser.js';

export class HomweExecutor extends HomweVisitor {
    constructor() {
        super();
        this.collections = new Map();
        this.schemas = new Map();
    }

    execute(tree) {

        return this.visit(tree);
    }

    visit(ctx) {
        if (!ctx) {

            return null;
        }

        // Get the rule name from the context
        const ruleName = ctx.constructor.name.replace('Context', '');
        const visitMethodName = `visit${ruleName}`;



        // Check if we have a visitor method for this rule
        if (typeof this[visitMethodName] === 'function') {

            return this[visitMethodName](ctx);
        }

        // If no specific visitor, try to visit children
        if (ctx.children) {

            const results = [];
            for (const child of ctx.children) {
                if (child.constructor.name.includes('Context')) {
                    results.push(this.visit(child));
                }
            }
            return results.length === 1 ? results[0] : results;
        }


        return null;
    }

    visitProgram(ctx) {

        const results = [];

        // Get all statement contexts
        if (ctx.statement && typeof ctx.statement === 'function') {
            const statements = ctx.statement();


            for (let i = 0; i < statements.length; i++) {
                const result = this.visit(statements[i]);
                if (result !== null && result !== undefined) {
                    results.push(result);
                }
            }
        }

        return results;
    }

    visitStatement(ctx) {

        // Visit the child (should be one of the statement types)
        if (ctx.children && ctx.children.length > 0) {
            return this.visit(ctx.children[0]);
        }
        return null;
    }

    // Handle labeled alternatives from the grammar
    visitCreateCollection(ctx) {


        // The IDENTIFIER token should be available
        let collectionName = null;
        if (ctx.IDENTIFIER && typeof ctx.IDENTIFIER === 'function') {
            const id = ctx.IDENTIFIER();
            collectionName = id ? id.getText() : null;
        }



        if (!collectionName) {
            return { success: false, message: 'No collection iyi haisi kuzivikanwa' };
        }

        if (this.collections.has(collectionName)) {
            return { success: false, message: 'Collection yagadzirwa kare' };
        }

        this.collections.set(collectionName, []);
        return { success: true, collection: collectionName };
    }

    visitDefineColumns(ctx) {


        let collectionName = null;
        if (ctx.IDENTIFIER && typeof ctx.IDENTIFIER === 'function') {
            const id = ctx.IDENTIFIER();
            collectionName = id ? id.getText() : null;
        }

        let columns = [];
        if (ctx.columnList && typeof ctx.columnList === 'function') {
            const columnListCtx = ctx.columnList();
            columns = this.visitColumnList(columnListCtx);
        }



        if (!collectionName) {
            return { success: false, message: 'No collection name' };
        }

        this.schemas.set(collectionName, columns);
        return { success: true, columns };
    }

    visitInsertValues(ctx) {


        // Get collection name
        let collectionName = null;
        if (ctx.IDENTIFIER && typeof ctx.IDENTIFIER === 'function') {
            const id = ctx.IDENTIFIER();
            collectionName = id ? id.getText() : null;
        }

        // Get values
        let values = [];
        if (ctx.valueList && typeof ctx.valueList === 'function') {
            const valueListCtx = ctx.valueList();
            values = this.visitValueList(valueListCtx);
        }



        if (!collectionName || !this.collections.has(collectionName)) {
            throw new Error(`Collection ${collectionName} does not exist`);
        }

        const schema = this.schemas.get(collectionName);
        const record = { id: Date.now() + Math.random() };

        if (schema) {
            schema.forEach((col, index) => {
                if (index < values.length) {
                    record[col] = values[index];
                }
            });
        }

        const collection = this.collections.get(collectionName);
        collection.push(record);

        return { success: true, id: record.id };
    }

    visitSelectStatement(ctx) {


        // Get collection name
        let collectionName = null;
        if (ctx.IDENTIFIER && typeof ctx.IDENTIFIER === 'function') {
            const id = ctx.IDENTIFIER();
            collectionName = id ? id.getText() : null;
        }

        if (!collectionName || !this.collections.has(collectionName)) {

            return [];
        }

        // Get columns to select
        let columns = '_';
        if (ctx.selectColumns && typeof ctx.selectColumns === 'function') {
            const selectColumnsCtx = ctx.selectColumns();
            columns = this.visit(selectColumnsCtx);
        }

        // Get WHERE clause if present
        let whereClause = null;

        // Try different ways to access the WHERE clause
        if (ctx.whereClause) {


            // Check if it's a function
            if (typeof ctx.whereClause === 'function') {

                try {
                    const whereCtxs = ctx.whereClause();


                    if (Array.isArray(whereCtxs) && whereCtxs.length > 0) {

                        whereClause = this.visitWhereClause(whereCtxs[0]);
                    } else if (whereCtxs && !Array.isArray(whereCtxs)) {

                        whereClause = this.visitWhereClause(whereCtxs);
                    }
                } catch (e) {


                    // Try accessing with index
                    try {
                        const whereCtx = ctx.whereClause(0);
                        if (whereCtx) {

                            whereClause = this.visitWhereClause(whereCtx);
                        }
                    } catch (e2) {

                    }
                }
            } else {
                // It's not a function, might be a property

                whereClause = this.visitWhereClause(ctx.whereClause);
            }
        }

        // Get LIMIT clause if present
        let limit = null;

        if (ctx.limitClause) {

            if (typeof ctx.limitClause === 'function') {

                try {
                    const limitCtxs = ctx.limitClause();


                    if (Array.isArray(limitCtxs) && limitCtxs.length > 0) {

                        limit = this.visitLimitClause(limitCtxs[0]);
                    } else if (limitCtxs && !Array.isArray(limitCtxs)) {

                        limit = this.visitLimitClause(limitCtxs);
                    }
                } catch (e) {


                    // Try accessing with index
                    try {
                        const limitCtx = ctx.limitClause(0);
                        if (limitCtx) {

                            limit = this.visitLimitClause(limitCtx);
                        }
                    } catch (e2) {

                    }
                }
            }
        } else {

        }



        let results = [...this.collections.get(collectionName)];

        // Apply WHERE
        if (whereClause) {

            results = results.filter(record => {
                const matches = record[whereClause.column] == whereClause.value;

                return matches;
            });

        }

        // Apply LIMIT
        if (limit !== null && limit > 0) {

            results = results.slice(0, limit);

        }

        // Select specific columns
        if (columns !== '_' && Array.isArray(columns)) {
            results = results.map(record => {
                const filtered = {};
                columns.forEach(col => {
                    if (col in record) {
                        filtered[col] = record[col];
                    }
                });
                return filtered;
            });
        }

        return results;
    }

    visitUpdateColumn(ctx) {


        // Get column name to update
        let columnName = null;
        if (ctx.IDENTIFIER && typeof ctx.IDENTIFIER === 'function') {
            const id = ctx.IDENTIFIER();
            columnName = id ? id.getText() : null;
        }

        // Get new value
        let newValue = null;
        if (ctx.value && typeof ctx.value === 'function') {
            newValue = this.visitValue(ctx.value());
        }

        // Get WHERE clause
        let whereClause = null;
        if (ctx.whereClause && typeof ctx.whereClause === 'function') {
            whereClause = this.visitWhereClause(ctx.whereClause());
        }



        // Find the collection that contains this column
        let targetCollection = null;
        let targetCollectionName = null;

        for (const [collName, schema] of this.schemas.entries()) {
            if (schema.includes(columnName)) {
                targetCollection = this.collections.get(collName);
                targetCollectionName = collName;
                break;
            }
        }

        if (!targetCollection) {
            // If no schema, check all collections
            for (const [collName, coll] of this.collections.entries()) {
                if (coll.length > 0 && columnName in coll[0]) {
                    targetCollection = coll;
                    targetCollectionName = collName;
                    break;
                }
            }
        }

        if (!targetCollection) {
            return { success: false, message: 'Column not found in any collection' };
        }

        let updatedCount = 0;

        for (const record of targetCollection) {
            let shouldUpdate = false;

            if (whereClause) {
                shouldUpdate = record[whereClause.column] == whereClause.value;
            } else {
                shouldUpdate = true;
            }

            if (shouldUpdate) {
                record[columnName] = newValue;
                updatedCount++;
            }
        }

        return { success: true, updated: updatedCount };
    }

    visitDeleteRecord(ctx) {


        // Get collection name
        let collectionName = null;
        if (ctx.IDENTIFIER && typeof ctx.IDENTIFIER === 'function') {
            const id = ctx.IDENTIFIER();
            collectionName = id ? id.getText() : null;
        }

        // Get WHERE clause
        let whereClause = null;
        if (ctx.whereClause && typeof ctx.whereClause === 'function') {
            whereClause = this.visitWhereClause(ctx.whereClause());
        }



        if (!collectionName || !this.collections.has(collectionName)) {
            return { success: false, message: 'Collection not found' };
        }

        const collection = this.collections.get(collectionName);
        const originalLength = collection.length;

        if (whereClause) {
            const filtered = collection.filter(record =>
                record[whereClause.column] != whereClause.value
            );

            const deletedCount = originalLength - filtered.length;
            this.collections.set(collectionName, filtered);

            return { success: true, deleted: deletedCount };
        }

        // No WHERE clause, delete all
        this.collections.set(collectionName, []);
        return { success: true, deleted: originalLength };
    }

    visitLimitClause(ctx) {


        if (ctx.NUMBER && typeof ctx.NUMBER === 'function') {
            const num = ctx.NUMBER();
            if (num) {
                return parseInt(num.getText());
            }
        }

        // Try to get the number from the text directly
        const text = ctx.getText();
        const parsed = parseInt(text);
        return isNaN(parsed) ? null : parsed;
    }

    visitSpecificColumns(ctx) {

        if (ctx.columnList && typeof ctx.columnList === 'function') {
            return this.visitColumnList(ctx.columnList());
        }
        return [];
    }

    visitColumnListSelect(ctx) {

        if (ctx.columnList && typeof ctx.columnList === 'function') {
            return this.visitColumnList(ctx.columnList());
        }
        return [];
    }

    visitAllColumns(ctx) {

        return '_';
    }

    visitColumnList(ctx) {

        const identifiers = [];

        if (ctx.IDENTIFIER && typeof ctx.IDENTIFIER === 'function') {
            const ids = ctx.IDENTIFIER();
            if (Array.isArray(ids)) {
                return ids.map(id => id.getText());
            } else if (ids) {
                return [ids.getText()];
            }
        }

        return identifiers;
    }

    visitValueList(ctx) {

        const values = [];

        if (ctx.value && typeof ctx.value === 'function') {
            const valueCtxs = ctx.value();
            if (Array.isArray(valueCtxs)) {
                return valueCtxs.map(v => this.visitValue(v));
            } else if (valueCtxs) {
                return [this.visitValue(valueCtxs)];
            }
        }

        return values;
    }

    visitValue(ctx) {

        const text = ctx.getText();

        // Check for STRING token
        if (ctx.STRING && typeof ctx.STRING === 'function') {
            const str = ctx.STRING();
            if (str) {
                const strText = str.getText();
                // Remove quotes
                return strText.slice(1, -1);
            }
        }

        // Check for NUMBER token
        if (ctx.NUMBER && typeof ctx.NUMBER === 'function') {
            const num = ctx.NUMBER();
            if (num) {
                return parseFloat(num.getText());
            }
        }

        // Check for IDENTIFIER token
        if (ctx.IDENTIFIER && typeof ctx.IDENTIFIER === 'function') {
            const id = ctx.IDENTIFIER();
            if (id) {
                return id.getText();
            }
        }

        // Check for underscore
        if (text === '_') {
            return null;
        }

        return text;
    }

    visitWhereClause(ctx) {

        if (!ctx) {

            return null;
        }

        if (ctx.condition && typeof ctx.condition === 'function') {
            const conditionCtx = ctx.condition();

            return this.visitCondition(conditionCtx);
        }

        return null;
    }

    visitCondition(ctx) {


        let column = null;
        if (ctx.IDENTIFIER && typeof ctx.IDENTIFIER === 'function') {
            const id = ctx.IDENTIFIER();
            column = id ? id.getText() : null;
        }

        let value = null;
        if (ctx.value && typeof ctx.value === 'function') {
            value = this.visitValue(ctx.value());
        }



        if (column && value !== null && value !== undefined) {
            return { column, value };
        }

        return null;
    }
}