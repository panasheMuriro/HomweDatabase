export const homweLanguageDefinition = {
  defaultToken: '',
  tokenPostfix: '.homwe',
  
  keywords: [
    'mu', 'homwe', 'mune', 'ine', 'isa', 'kubva', 'chinja', 'kuita', 'bvisa', 'zvese',
    'ane', 'vane', 'zvine', 'pane', 'rine', 'dzine', 'kune', 'kane', 'svine', 'mine', 'chine',
    'rune', 'tune', 'twune', 'zine'
  ],
  
  tokenizer: {
    root: [
      // Keywords
      [/\b(mu|homwe|mune|ine|isa|kubva|chinja|kuita|bvisa|zvese)\b/, 'keyword'],
      [/\b(ane|vane|zvine|pane|rine|dzine|kune|kane|svine|mine|chine|rune|tune|twune|zine)\b/, 'keyword.control'],
      
      // Identifiers
      [/[a-zA-Z_]\w*/, 'identifier'],
      
      // Numbers
      [/\d+(\.\d+)?/, 'number'],
      
      // Strings
      [/"([^"\\]|\\.)*"/, 'string'],
      [/'([^'\\]|\\.)*'/, 'string'],
      
      // Operators
      [/[=]/, 'operator'],
      
      // Delimiters
      [/[(),]/, 'delimiter'],
      
      // Whitespace
      [/[ \t\r\n]+/, 'white'],
      
      // Comments
      [/\/\/.*$/, 'comment']
    ]
  }
};

export const homweTheme = {
  base: 'vs-dark',
  inherit: true,
  rules: [
    { token: 'keyword', foreground: '569cd6' },
    { token: 'keyword.control', foreground: 'c586c0' },
    { token: 'identifier', foreground: '9cdcfe' },
    { token: 'string', foreground: 'ce9178' },
    { token: 'number', foreground: 'b5cea8' },
    { token: 'operator', foreground: 'd4d4d4' },
    { token: 'delimiter', foreground: 'd4d4d4' },
    { token: 'comment', foreground: '6a9955' }
  ],
  colors: {
    'editor.background': '#1e1e1e'
  }
};