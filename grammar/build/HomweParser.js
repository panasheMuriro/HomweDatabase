// Generated from Homwe.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import HomweListener from './HomweListener.js';
import HomweVisitor from './HomweVisitor.js';

const serializedATN = [4,1,35,116,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,1,0,4,0,30,8,0,11,0,12,0,31,1,0,1,0,1,1,1,1,1,1,1,1,3,1,40,8,1,
1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,57,8,2,1,
3,1,3,1,3,1,3,1,3,3,3,64,8,3,1,3,3,3,67,8,3,1,4,1,4,1,4,1,4,1,4,1,4,1,5,
1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,3,6,85,8,6,1,7,1,7,1,7,1,8,1,8,1,9,1,
9,1,9,1,9,1,10,1,10,1,11,1,11,1,11,5,11,101,8,11,10,11,12,11,104,9,11,1,
12,1,12,1,12,5,12,109,8,12,10,12,12,12,112,9,12,1,13,1,13,1,13,0,0,14,0,
2,4,6,8,10,12,14,16,18,20,22,24,26,0,2,2,0,3,3,12,27,1,0,30,33,113,0,29,
1,0,0,0,2,39,1,0,0,0,4,56,1,0,0,0,6,58,1,0,0,0,8,68,1,0,0,0,10,74,1,0,0,
0,12,84,1,0,0,0,14,86,1,0,0,0,16,89,1,0,0,0,18,91,1,0,0,0,20,95,1,0,0,0,
22,97,1,0,0,0,24,105,1,0,0,0,26,113,1,0,0,0,28,30,3,2,1,0,29,28,1,0,0,0,
30,31,1,0,0,0,31,29,1,0,0,0,31,32,1,0,0,0,32,33,1,0,0,0,33,34,5,0,0,1,34,
1,1,0,0,0,35,40,3,4,2,0,36,40,3,6,3,0,37,40,3,8,4,0,38,40,3,10,5,0,39,35,
1,0,0,0,39,36,1,0,0,0,39,37,1,0,0,0,39,38,1,0,0,0,40,3,1,0,0,0,41,42,5,1,
0,0,42,43,5,2,0,0,43,44,5,3,0,0,44,57,5,31,0,0,45,46,5,31,0,0,46,47,3,16,
8,0,47,48,3,22,11,0,48,57,1,0,0,0,49,50,5,4,0,0,50,51,5,5,0,0,51,52,3,24,
12,0,52,53,5,6,0,0,53,54,5,1,0,0,54,55,5,31,0,0,55,57,1,0,0,0,56,41,1,0,
0,0,56,45,1,0,0,0,56,49,1,0,0,0,57,5,1,0,0,0,58,59,3,12,6,0,59,60,5,7,0,
0,60,61,5,1,0,0,61,63,5,31,0,0,62,64,3,14,7,0,63,62,1,0,0,0,63,64,1,0,0,
0,64,66,1,0,0,0,65,67,3,20,10,0,66,65,1,0,0,0,66,67,1,0,0,0,67,7,1,0,0,0,
68,69,5,8,0,0,69,70,5,31,0,0,70,71,5,9,0,0,71,72,3,26,13,0,72,73,3,14,7,
0,73,9,1,0,0,0,74,75,5,10,0,0,75,76,5,31,0,0,76,77,3,14,7,0,77,11,1,0,0,
0,78,79,5,5,0,0,79,80,3,22,11,0,80,81,5,6,0,0,81,85,1,0,0,0,82,85,3,22,11,
0,83,85,5,11,0,0,84,78,1,0,0,0,84,82,1,0,0,0,84,83,1,0,0,0,85,13,1,0,0,0,
86,87,3,16,8,0,87,88,3,18,9,0,88,15,1,0,0,0,89,90,7,0,0,0,90,17,1,0,0,0,
91,92,5,31,0,0,92,93,5,28,0,0,93,94,3,26,13,0,94,19,1,0,0,0,95,96,5,32,0,
0,96,21,1,0,0,0,97,102,5,31,0,0,98,99,5,29,0,0,99,101,5,31,0,0,100,98,1,
0,0,0,101,104,1,0,0,0,102,100,1,0,0,0,102,103,1,0,0,0,103,23,1,0,0,0,104,
102,1,0,0,0,105,110,3,26,13,0,106,107,5,29,0,0,107,109,3,26,13,0,108,106,
1,0,0,0,109,112,1,0,0,0,110,108,1,0,0,0,110,111,1,0,0,0,111,25,1,0,0,0,112,
110,1,0,0,0,113,114,7,1,0,0,114,27,1,0,0,0,8,31,39,56,63,66,84,102,110];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class HomweParser extends antlr4.Parser {

    static grammarFileName = "Homwe.g4";
    static literalNames = [ null, "'mu'", "'homwe'", "'mune'", "'isa'", 
                            "'('", "')'", "'kubva'", "'chinja'", "'kuita'", 
                            "'bvisa'", "'zvese'", "'ane'", "'vane'", "'zvine'", 
                            "'pane'", "'rine'", "'dzine'", "'kune'", "'kane'", 
                            "'svine'", "'mine'", "'chine'", "'ine'", "'rune'", 
                            "'tune'", "'twune'", "'zine'", "'='", "','", 
                            "'_'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, "IDENTIFIER", 
                             "NUMBER", "STRING", "WS", "COMMENT" ];
    static ruleNames = [ "program", "statement", "createStatement", "readStatement", 
                         "updateStatement", "deleteStatement", "selectColumns", 
                         "whereClause", "aneVariants", "condition", "limitClause", 
                         "columnList", "valueList", "value" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = HomweParser.ruleNames;
        this.literalNames = HomweParser.literalNames;
        this.symbolicNames = HomweParser.symbolicNames;
    }



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, HomweParser.RULE_program);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 29; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 28;
	            this.statement();
	            this.state = 31; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 2147487026) !== 0));
	        this.state = 33;
	        this.match(HomweParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, HomweParser.RULE_statement);
	    try {
	        this.state = 39;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 35;
	            this.createStatement();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 36;
	            this.readStatement();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 37;
	            this.updateStatement();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 38;
	            this.deleteStatement();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	createStatement() {
	    let localctx = new CreateStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, HomweParser.RULE_createStatement);
	    try {
	        this.state = 56;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            localctx = new CreateCollectionContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 41;
	            this.match(HomweParser.T__0);
	            this.state = 42;
	            this.match(HomweParser.T__1);
	            this.state = 43;
	            this.match(HomweParser.T__2);
	            this.state = 44;
	            this.match(HomweParser.IDENTIFIER);
	            break;
	        case 31:
	            localctx = new DefineColumnsContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 45;
	            this.match(HomweParser.IDENTIFIER);
	            this.state = 46;
	            this.aneVariants();
	            this.state = 47;
	            this.columnList();
	            break;
	        case 4:
	            localctx = new InsertValuesContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 49;
	            this.match(HomweParser.T__3);
	            this.state = 50;
	            this.match(HomweParser.T__4);
	            this.state = 51;
	            this.valueList();
	            this.state = 52;
	            this.match(HomweParser.T__5);
	            this.state = 53;
	            this.match(HomweParser.T__0);
	            this.state = 54;
	            this.match(HomweParser.IDENTIFIER);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	readStatement() {
	    let localctx = new ReadStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, HomweParser.RULE_readStatement);
	    var _la = 0;
	    try {
	        localctx = new SelectStatementContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 58;
	        this.selectColumns();
	        this.state = 59;
	        this.match(HomweParser.T__6);
	        this.state = 60;
	        this.match(HomweParser.T__0);
	        this.state = 61;
	        this.match(HomweParser.IDENTIFIER);
	        this.state = 63;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 268431368) !== 0)) {
	            this.state = 62;
	            this.whereClause();
	        }

	        this.state = 66;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===32) {
	            this.state = 65;
	            this.limitClause();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	updateStatement() {
	    let localctx = new UpdateStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, HomweParser.RULE_updateStatement);
	    try {
	        localctx = new UpdateColumnContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 68;
	        this.match(HomweParser.T__7);
	        this.state = 69;
	        this.match(HomweParser.IDENTIFIER);
	        this.state = 70;
	        this.match(HomweParser.T__8);
	        this.state = 71;
	        this.value();
	        this.state = 72;
	        this.whereClause();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	deleteStatement() {
	    let localctx = new DeleteStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, HomweParser.RULE_deleteStatement);
	    try {
	        localctx = new DeleteRecordContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 74;
	        this.match(HomweParser.T__9);
	        this.state = 75;
	        this.match(HomweParser.IDENTIFIER);
	        this.state = 76;
	        this.whereClause();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	selectColumns() {
	    let localctx = new SelectColumnsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, HomweParser.RULE_selectColumns);
	    try {
	        this.state = 84;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	            localctx = new SpecificColumnsContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 78;
	            this.match(HomweParser.T__4);
	            this.state = 79;
	            this.columnList();
	            this.state = 80;
	            this.match(HomweParser.T__5);
	            break;
	        case 31:
	            localctx = new ColumnListSelectContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 82;
	            this.columnList();
	            break;
	        case 11:
	            localctx = new AllColumnsContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 83;
	            this.match(HomweParser.T__10);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	whereClause() {
	    let localctx = new WhereClauseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, HomweParser.RULE_whereClause);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 86;
	        this.aneVariants();
	        this.state = 87;
	        this.condition();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	aneVariants() {
	    let localctx = new AneVariantsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, HomweParser.RULE_aneVariants);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 89;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 268431368) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	condition() {
	    let localctx = new ConditionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, HomweParser.RULE_condition);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 91;
	        this.match(HomweParser.IDENTIFIER);
	        this.state = 92;
	        this.match(HomweParser.T__27);
	        this.state = 93;
	        this.value();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	limitClause() {
	    let localctx = new LimitClauseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, HomweParser.RULE_limitClause);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 95;
	        this.match(HomweParser.NUMBER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	columnList() {
	    let localctx = new ColumnListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, HomweParser.RULE_columnList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 97;
	        this.match(HomweParser.IDENTIFIER);
	        this.state = 102;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===29) {
	            this.state = 98;
	            this.match(HomweParser.T__28);
	            this.state = 99;
	            this.match(HomweParser.IDENTIFIER);
	            this.state = 104;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	valueList() {
	    let localctx = new ValueListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, HomweParser.RULE_valueList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 105;
	        this.value();
	        this.state = 110;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===29) {
	            this.state = 106;
	            this.match(HomweParser.T__28);
	            this.state = 107;
	            this.value();
	            this.state = 112;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	value() {
	    let localctx = new ValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, HomweParser.RULE_value);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 113;
	        _la = this._input.LA(1);
	        if(!(((((_la - 30)) & ~0x1f) === 0 && ((1 << (_la - 30)) & 15) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

HomweParser.EOF = antlr4.Token.EOF;
HomweParser.T__0 = 1;
HomweParser.T__1 = 2;
HomweParser.T__2 = 3;
HomweParser.T__3 = 4;
HomweParser.T__4 = 5;
HomweParser.T__5 = 6;
HomweParser.T__6 = 7;
HomweParser.T__7 = 8;
HomweParser.T__8 = 9;
HomweParser.T__9 = 10;
HomweParser.T__10 = 11;
HomweParser.T__11 = 12;
HomweParser.T__12 = 13;
HomweParser.T__13 = 14;
HomweParser.T__14 = 15;
HomweParser.T__15 = 16;
HomweParser.T__16 = 17;
HomweParser.T__17 = 18;
HomweParser.T__18 = 19;
HomweParser.T__19 = 20;
HomweParser.T__20 = 21;
HomweParser.T__21 = 22;
HomweParser.T__22 = 23;
HomweParser.T__23 = 24;
HomweParser.T__24 = 25;
HomweParser.T__25 = 26;
HomweParser.T__26 = 27;
HomweParser.T__27 = 28;
HomweParser.T__28 = 29;
HomweParser.T__29 = 30;
HomweParser.IDENTIFIER = 31;
HomweParser.NUMBER = 32;
HomweParser.STRING = 33;
HomweParser.WS = 34;
HomweParser.COMMENT = 35;

HomweParser.RULE_program = 0;
HomweParser.RULE_statement = 1;
HomweParser.RULE_createStatement = 2;
HomweParser.RULE_readStatement = 3;
HomweParser.RULE_updateStatement = 4;
HomweParser.RULE_deleteStatement = 5;
HomweParser.RULE_selectColumns = 6;
HomweParser.RULE_whereClause = 7;
HomweParser.RULE_aneVariants = 8;
HomweParser.RULE_condition = 9;
HomweParser.RULE_limitClause = 10;
HomweParser.RULE_columnList = 11;
HomweParser.RULE_valueList = 12;
HomweParser.RULE_value = 13;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HomweParser.RULE_program;
    }

	EOF() {
	    return this.getToken(HomweParser.EOF, 0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof HomweListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HomweListener ) {
	        listener.exitProgram(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof HomweVisitor ) {
	        return visitor.visitProgram(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HomweParser.RULE_statement;
    }

	createStatement() {
	    return this.getTypedRuleContext(CreateStatementContext,0);
	};

	readStatement() {
	    return this.getTypedRuleContext(ReadStatementContext,0);
	};

	updateStatement() {
	    return this.getTypedRuleContext(UpdateStatementContext,0);
	};

	deleteStatement() {
	    return this.getTypedRuleContext(DeleteStatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof HomweListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HomweListener ) {
	        listener.exitStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof HomweVisitor ) {
	        return visitor.visitStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CreateStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HomweParser.RULE_createStatement;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class CreateCollectionContext extends CreateStatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	IDENTIFIER() {
	    return this.getToken(HomweParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof HomweListener ) {
	        listener.enterCreateCollection(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HomweListener ) {
	        listener.exitCreateCollection(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof HomweVisitor ) {
	        return visitor.visitCreateCollection(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

HomweParser.CreateCollectionContext = CreateCollectionContext;

class InsertValuesContext extends CreateStatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	valueList() {
	    return this.getTypedRuleContext(ValueListContext,0);
	};

	IDENTIFIER() {
	    return this.getToken(HomweParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof HomweListener ) {
	        listener.enterInsertValues(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HomweListener ) {
	        listener.exitInsertValues(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof HomweVisitor ) {
	        return visitor.visitInsertValues(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

HomweParser.InsertValuesContext = InsertValuesContext;

class DefineColumnsContext extends CreateStatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	IDENTIFIER() {
	    return this.getToken(HomweParser.IDENTIFIER, 0);
	};

	aneVariants() {
	    return this.getTypedRuleContext(AneVariantsContext,0);
	};

	columnList() {
	    return this.getTypedRuleContext(ColumnListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof HomweListener ) {
	        listener.enterDefineColumns(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HomweListener ) {
	        listener.exitDefineColumns(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof HomweVisitor ) {
	        return visitor.visitDefineColumns(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

HomweParser.DefineColumnsContext = DefineColumnsContext;

class ReadStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HomweParser.RULE_readStatement;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class SelectStatementContext extends ReadStatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	selectColumns() {
	    return this.getTypedRuleContext(SelectColumnsContext,0);
	};

	IDENTIFIER() {
	    return this.getToken(HomweParser.IDENTIFIER, 0);
	};

	whereClause() {
	    return this.getTypedRuleContext(WhereClauseContext,0);
	};

	limitClause() {
	    return this.getTypedRuleContext(LimitClauseContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof HomweListener ) {
	        listener.enterSelectStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HomweListener ) {
	        listener.exitSelectStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof HomweVisitor ) {
	        return visitor.visitSelectStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

HomweParser.SelectStatementContext = SelectStatementContext;

class UpdateStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HomweParser.RULE_updateStatement;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class UpdateColumnContext extends UpdateStatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	IDENTIFIER() {
	    return this.getToken(HomweParser.IDENTIFIER, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	whereClause() {
	    return this.getTypedRuleContext(WhereClauseContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof HomweListener ) {
	        listener.enterUpdateColumn(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HomweListener ) {
	        listener.exitUpdateColumn(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof HomweVisitor ) {
	        return visitor.visitUpdateColumn(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

HomweParser.UpdateColumnContext = UpdateColumnContext;

class DeleteStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HomweParser.RULE_deleteStatement;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class DeleteRecordContext extends DeleteStatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	IDENTIFIER() {
	    return this.getToken(HomweParser.IDENTIFIER, 0);
	};

	whereClause() {
	    return this.getTypedRuleContext(WhereClauseContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof HomweListener ) {
	        listener.enterDeleteRecord(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HomweListener ) {
	        listener.exitDeleteRecord(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof HomweVisitor ) {
	        return visitor.visitDeleteRecord(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

HomweParser.DeleteRecordContext = DeleteRecordContext;

class SelectColumnsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HomweParser.RULE_selectColumns;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class SpecificColumnsContext extends SelectColumnsContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	columnList() {
	    return this.getTypedRuleContext(ColumnListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof HomweListener ) {
	        listener.enterSpecificColumns(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HomweListener ) {
	        listener.exitSpecificColumns(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof HomweVisitor ) {
	        return visitor.visitSpecificColumns(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

HomweParser.SpecificColumnsContext = SpecificColumnsContext;

class ColumnListSelectContext extends SelectColumnsContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	columnList() {
	    return this.getTypedRuleContext(ColumnListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof HomweListener ) {
	        listener.enterColumnListSelect(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HomweListener ) {
	        listener.exitColumnListSelect(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof HomweVisitor ) {
	        return visitor.visitColumnListSelect(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

HomweParser.ColumnListSelectContext = ColumnListSelectContext;

class AllColumnsContext extends SelectColumnsContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }


	enterRule(listener) {
	    if(listener instanceof HomweListener ) {
	        listener.enterAllColumns(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HomweListener ) {
	        listener.exitAllColumns(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof HomweVisitor ) {
	        return visitor.visitAllColumns(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

HomweParser.AllColumnsContext = AllColumnsContext;

class WhereClauseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HomweParser.RULE_whereClause;
    }

	aneVariants() {
	    return this.getTypedRuleContext(AneVariantsContext,0);
	};

	condition() {
	    return this.getTypedRuleContext(ConditionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof HomweListener ) {
	        listener.enterWhereClause(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HomweListener ) {
	        listener.exitWhereClause(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof HomweVisitor ) {
	        return visitor.visitWhereClause(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AneVariantsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HomweParser.RULE_aneVariants;
    }


	enterRule(listener) {
	    if(listener instanceof HomweListener ) {
	        listener.enterAneVariants(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HomweListener ) {
	        listener.exitAneVariants(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof HomweVisitor ) {
	        return visitor.visitAneVariants(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConditionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HomweParser.RULE_condition;
    }

	IDENTIFIER() {
	    return this.getToken(HomweParser.IDENTIFIER, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof HomweListener ) {
	        listener.enterCondition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HomweListener ) {
	        listener.exitCondition(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof HomweVisitor ) {
	        return visitor.visitCondition(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LimitClauseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HomweParser.RULE_limitClause;
    }

	NUMBER() {
	    return this.getToken(HomweParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof HomweListener ) {
	        listener.enterLimitClause(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HomweListener ) {
	        listener.exitLimitClause(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof HomweVisitor ) {
	        return visitor.visitLimitClause(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ColumnListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HomweParser.RULE_columnList;
    }

	IDENTIFIER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(HomweParser.IDENTIFIER);
	    } else {
	        return this.getToken(HomweParser.IDENTIFIER, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof HomweListener ) {
	        listener.enterColumnList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HomweListener ) {
	        listener.exitColumnList(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof HomweVisitor ) {
	        return visitor.visitColumnList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ValueListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HomweParser.RULE_valueList;
    }

	value = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ValueContext);
	    } else {
	        return this.getTypedRuleContext(ValueContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof HomweListener ) {
	        listener.enterValueList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HomweListener ) {
	        listener.exitValueList(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof HomweVisitor ) {
	        return visitor.visitValueList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HomweParser.RULE_value;
    }

	STRING() {
	    return this.getToken(HomweParser.STRING, 0);
	};

	NUMBER() {
	    return this.getToken(HomweParser.NUMBER, 0);
	};

	IDENTIFIER() {
	    return this.getToken(HomweParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof HomweListener ) {
	        listener.enterValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HomweListener ) {
	        listener.exitValue(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof HomweVisitor ) {
	        return visitor.visitValue(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




HomweParser.ProgramContext = ProgramContext; 
HomweParser.StatementContext = StatementContext; 
HomweParser.CreateStatementContext = CreateStatementContext; 
HomweParser.ReadStatementContext = ReadStatementContext; 
HomweParser.UpdateStatementContext = UpdateStatementContext; 
HomweParser.DeleteStatementContext = DeleteStatementContext; 
HomweParser.SelectColumnsContext = SelectColumnsContext; 
HomweParser.WhereClauseContext = WhereClauseContext; 
HomweParser.AneVariantsContext = AneVariantsContext; 
HomweParser.ConditionContext = ConditionContext; 
HomweParser.LimitClauseContext = LimitClauseContext; 
HomweParser.ColumnListContext = ColumnListContext; 
HomweParser.ValueListContext = ValueListContext; 
HomweParser.ValueContext = ValueContext; 
