grammar Homwe;

// Parser Rules
program: statement+ EOF;

statement
    : createStatement
    | readStatement
    | updateStatement
    | deleteStatement
    ;

createStatement
    : 'mu' 'homwe' 'mune' IDENTIFIER                                    # CreateCollection
    | IDENTIFIER 'ine' columnList                                       # DefineColumns
    | 'isa' '(' valueList ')' 'mu' IDENTIFIER                          # InsertValues
    ;

readStatement
    : selectColumns 'kubva' 'mu' IDENTIFIER whereClause? limitClause?   # SelectStatement
    ;

updateStatement
    : 'chinja' IDENTIFIER 'kuita' value whereClause                     # UpdateColumn
    ;

deleteStatement
    : 'bvisa' IDENTIFIER whereClause                                    # DeleteRecord
    ;

selectColumns
    : '(' columnList ')'                                                # SpecificColumns
    | columnList                                                        # ColumnListSelect
    | 'zvese'                                                           # AllColumns
    ;

whereClause
    : aneVariants condition
    ;

aneVariants
    : 'ane' | 'vane' | 'zvine' | 'pane' | 'rine' | 'dzine' 
    | 'kune' | 'kane' | 'svine' | 'mune' | 'mine' | 'chine' 
    | 'ine' | 'rune' | 'tune' | 'twune' | 'zine'
    ;

condition
    : IDENTIFIER '=' value
    ;

limitClause
    : NUMBER
    ;

columnList
    : IDENTIFIER (',' IDENTIFIER)*
    ;

valueList
    : value (',' value)*
    ;

value
    : STRING
    | NUMBER
    | '_'
    | IDENTIFIER
    ;

IDENTIFIER: [a-zA-Z_][a-zA-Z0-9_]*;
NUMBER: [0-9]+('.'[0-9]+)?;
STRING: '"' (EscapeSequence | ~["\\\r\n])* '"' 
      | '\'' (EscapeSequence | ~['\\\r\n])* '\'';

fragment EscapeSequence
    : '\\' [btnfr"'\\]
    | '\\' ([0-3]? [0-7])? [0-7]
    | '\\' 'u'+ HexDigit HexDigit HexDigit HexDigit
    ;

fragment HexDigit
    : [0-9a-fA-F]
    ;

WS: [ \t\r\n]+ -> skip;
COMMENT: '//' ~[\r\n]* -> skip;
