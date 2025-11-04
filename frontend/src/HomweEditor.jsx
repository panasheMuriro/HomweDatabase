import React, { useState, useRef } from 'react';
import Editor from '@monaco-editor/react';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';
import { Play, AlertCircle, CheckCircle, FileText, Database, ChevronDown, ChevronRight } from 'lucide-react';
import antlr4 from 'antlr4';
import HomweParser from '../grammar/build/HomweParser.js';
import { HomweExecutor } from '../grammar/HomweVisitor.js';
import { homweLanguageDefinition, homweTheme } from './homweLanguage';
import HomweLexer from '../grammar/build/HomweLexer.js';

const defaultCode = `// Uyai ku Homwe Database Language!
// Create collection
mu homwe mune users

// Define ma columns
users vane name, age, email, city

// Insert data
isa ("John", 25, "john@email.com", "Harare") mu users
isa ("Jane", 30, "jane@email.com", "Bulawayo") mu users
isa ("Bob", 25, "bob@email.com", "Harare") mu users

// Select zvese ma records
zvese kubva mu users

// Select specific columns
(name, age) kubva mu users

// Filter ma records
zvese kubva mu users ane age = 25`;

// Helper function to format messages in Shona + English style
const formatMessage = (result) => {
  if (!result) return null;
  
  if (result.success !== undefined) {
    if (result.collection) {
      return `✓ Collection "${result.collection}" ragadzirwa successfully`;
    }
    if (result.columns) {
      return `✓ Columns dzagadzirwa: ${result.columns.join(', ')}`;
    }
    if (result.id) {
      return `✓ Record raiswa successfully (ID: ${Math.round(result.id)})`;
    }
    if (result.updated !== undefined) {
      return `✓ ${result.updated} ma records achinjwa`;
    }
    if (result.deleted !== undefined) {
      return `✓ ${result.deleted} ma records abviswa`;
    }
  }
  
  if (result.message) {
    return result.message;
  }
  
  return null;
};

function HomweEditor() {
  const [code, setCode] = useState(defaultCode);
  const [output, setOutput] = useState([]);
  const [errors, setErrors] = useState([]);
  const [isRunning, setIsRunning] = useState(false);
  const [expandedItems, setExpandedItems] = useState(new Set());
  const editorRef = useRef(null);
  const executorRef = useRef(new HomweExecutor());

  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor;
    
    // Register Homwe language
    monaco.languages.register({ id: 'homwe' });
    monaco.languages.setMonarchTokensProvider('homwe', homweLanguageDefinition);
    monaco.editor.defineTheme('homwe-theme', homweTheme);
    monaco.editor.setTheme('homwe-theme');
    
    // Add custom commands
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, () => {
      runCode();
    });
  };

  const parseAndExecute = (input) => {
    const chars = new antlr4.InputStream(input);
    const lexer = new HomweLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new HomweParser(tokens);
    
    // Add error listener
    const errorListener = {
      syntaxError: (recognizer, offendingSymbol, line, column, msg, err) => {
        throw new Error(`Pane syntax error pa line ${line}:${column} - ${msg}`);
      }
    };
    
    parser.removeErrorListeners();
    parser.addErrorListener(errorListener);
    
    const tree = parser.program();
    return executorRef.current.execute(tree);
  };

  const runCode = async () => {
    setIsRunning(true);
    setErrors([]);
    setOutput([]);
    setExpandedItems(new Set());
    
    try {
      // Split code into individual statements for better error handling
      const lines = code.split('\n').filter(line => line.trim() && !line.trim().startsWith('//'));
      const results = [];
      
      for (const line of lines) {
        try {
          const result = parseAndExecute(line);
          results.push({
            statement: line,
            result: result,
            success: true
          });
        } catch (err) {
          results.push({
            statement: line,
            error: err.message,
            success: false
          });
          setErrors(prev => [...prev, { line, error: err.message }]);
        }
      }
      
      setOutput(results);
    } catch (err) {
      setErrors([{ error: err.message }]);
    } finally {
      setIsRunning(false);
    }
  };

  const clearData = () => {
    executorRef.current = new HomweExecutor();
    setOutput([]);
    setErrors([]);
    setExpandedItems(new Set());
  };

  const toggleExpanded = (index) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedItems(newExpanded);
  };

  return (
    <div className="h-screen bg-gray-900 text-gray-100" style={{fontFamily: "JetBrains Mono"}}>
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700 p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Database className="w-6 h-6 text-blue-400" />
          <h1 className="text-xl font-bold" style={{fontFamily: "Arial"}}>Homwe Database Editor</h1>
        </div>
        <div className="flex gap-2">
          <button
            onClick={clearData}
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors flex items-center gap-2"
          >
            <FileText className="w-4 h-4" />
            Bvisa Data
          </button>
          <button
            onClick={runCode}
            disabled={isRunning}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:cursor-not-allowed rounded-lg transition-colors flex items-center gap-2"
          >
            <Play className="w-4 h-4" />
            {isRunning ? 'Kuri kushanda...' : 'Run Code'}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <PanelGroup direction="horizontal" className="h-[calc(100vh-73px)]">
        {/* Editor Panel */}
        <Panel defaultSize={50} minSize={30}>
          <div className="h-full flex flex-col">
            <div className="bg-gray-800 px-4 py-2 text-sm font-medium">
              Editor
            </div>
            <div className="flex-1">
              <Editor
                height="100%"
                defaultLanguage="homwe"
                value={code}
                onChange={setCode}
                onMount={handleEditorDidMount}
                options={{
                  minimap: { enabled: false },
                  fontSize: 14,
                  lineNumbers: 'on',
                  roundedSelection: false,
                  scrollBeyondLastLine: false,
                  automaticLayout: true,
                  theme: 'homwe-theme',
                  fontFamily: "'Jetbrains Mono', 'Fira Code', monospace"
                }}
              />
            </div>
          </div>
        </Panel>

        {/* Resize Handle */}
        <PanelResizeHandle className="w-1 bg-gray-700 hover:bg-gray-600 transition-colors" />

        {/* Output Panel */}
        <Panel defaultSize={50} minSize={30}>
          <div className="h-full flex flex-col bg-[#1e1e1e]">
            <div className="bg-gray-800 px-4 py-2 text-sm font-medium flex items-center justify-between">
              <span>Zvabuda / Output</span>
              {errors.length > 0 && (
                <span className="text-red-400 text-xs flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.length} {errors.length > 1 ? 'ma errors' : 'error'}
                </span>
              )}
            </div>
            <div className="flex-1 overflow-auto p-4">
              {output.length === 0 ? (
                <div className="text-gray-500 text-center mt-8">
                  Baya pa Run Code kuti uone zvinobuda pano
                </div>
              ) : (
                <div className="space-y-4">
                  {output.map((item, index) => (
                    <div key={index} className="border border-gray-700 rounded-lg overflow-hidden">
                      <div className="bg-gray-800 px-3 py-2">
                        <div className="text-xs text-gray-400 font-mono">
                          {item.statement}
                        </div>
                      </div>
                      
                      {item.success ? (
                        <div>
                          {Array.isArray(item.result[0]) ? (
                            <div className="p-3">
                              <ResultTable data={item.result[0]} />
                            </div>
                          ) : (
                            <div className="p-3">
                              {/* Show formatted message if available */}
                              {formatMessage(item.result[0]) && (
                                <div className="flex items-center gap-2 text-green-400 mb-2">
                                  <CheckCircle className="w-4 h-4 flex-shrink-0" />
                                  <span>{formatMessage(item.result[0])}</span>
                                </div>
                              )}
                              
                              {/* Collapsible raw data */}
                              <button
                                onClick={() => toggleExpanded(index)}
                                className="flex items-center gap-1 text-xs text-gray-400 hover:text-gray-300 transition-colors"
                              >
                                {expandedItems.has(index) ? (
                                  <ChevronDown className="w-3 h-3" />
                                ) : (
                                  <ChevronRight className="w-3 h-3" />
                                )}
                                Ona raw data
                              </button>
                              
                              {expandedItems.has(index) && (
                                <pre className="text-gray-400 text-xs mt-2 p-2 bg-gray-800 rounded overflow-x-auto">
                                  {JSON.stringify(item.result[0], null, 2)}
                                </pre>
                              )}
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="p-3">
                          <div className="flex items-start gap-2">
                            <AlertCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                            <div className="text-red-400 text-sm">{item.error}</div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </Panel>
      </PanelGroup>
    </div>
  );
}

// Component to render results as a table
function ResultTable({ data }) {
  if (!data || data.length === 0) {
    return <div className="text-gray-500 text-sm">Hapana ma records akawanikwa</div>;
  }

  const columns = Object.keys(data[0]).filter(col => col !== 'id');

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm">
        <thead>
          <tr className="border-b border-gray-700">
            {columns.map(col => (
              <th key={col} className="text-left px-3 py-2 text-gray-300 font-medium">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="border-b border-gray-800">
              {columns.map(col => (
                <td key={col} className="px-3 py-2 text-gray-100">
                  {row[col] !== null ? String(row[col]) : <span className="text-gray-500">hapana</span>}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-xs text-gray-500 mt-2 px-3">
        {data.length} {data.length === 1 ? 'record' : 'ma records'}
      </div>
    </div>
  );
}

export default HomweEditor;