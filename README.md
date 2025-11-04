# Homwe Database Language

<div align="center">
  <img src="https://img.shields.io/badge/Language-Shona-blue" alt="Language: Shona">
  <img src="https://img.shields.io/badge/Type-Database_Language-green" alt="Type: Database Language">
  <img src="https://img.shields.io/badge/Built_with-ANTLR4-orange" alt="Built with ANTLR4">
  <img src="https://img.shields.io/badge/Editor-Monaco-purple" alt="Editor: Monaco">
</div>

## 🌍 Overview

**Homwe** is a database query language that uses Shona language constructs. It provides an intuitive way to interact with databases using familiar Shona terms, making database operations more accessible to Shona speakers.


![Homwe Screenshot](/screenshot.png)


### ✨ Features

- 📝 **Shona-based syntax** - Use natural Shona language constructs for database operations
- 🎨 **Web-based editor** - Full-featured Monaco editor with syntax highlighting
- 🔍 **Real-time execution** - See query results instantly
- 📊 **Table visualization** - Clean, formatted output for query results
- 🛠️ **CRUD operations** - Complete Create, Read, Update, Delete functionality
- 🧪 **Comprehensive testing** - Full test suite using Vitest

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/panasheMuriro/HomweDatabase.git
cd homwe

# Install dependencies
npm install

# Build the grammar
npm run build

# Run tests
npm test

# Start the web editor
npm run dev
```

## 📖 Language Guide

### Creating a Collection

```homwe
mu homwe mune users
```

### Defining Columns

```homwe
// You can use any of these variants:
users vane name, age, email  
users dzine employeeId, department
```

### Inserting Data

```homwe
isa ("John", 25, "john@email.com") mu users
isa ("Jane", 30, "jane@email.com") mu users
```

### Selecting Data

```homwe
// Select all columns
zvese kubva mu users

// Select specific columns
(name, age) kubva mu users

// With WHERE clause
zvese kubva mu users ane age = 25
zvese kubva mu users vane name = "John"

// With LIMIT
zvese kubva mu users 5
```

### Updating Data

```homwe
chinja age kuita 26 ane name = "John"
chinja email kuita "newemail@test.com" vane age = 30
```

### Deleting Data

```homwe
bvisa users ane age = 25
bvisa users vane name = "John"
```
## 🔧 Development

### Building the Grammar

After modifying `Homwe.g4`:

```bash
npm run build
```

This generates the lexer and parser files in the `grammar/build/` directory.

### Running Tests

```bash
# Run all tests
npm test

# Watch mode
npm run test:watch
```

### Starting the Development Server

```bash
npm run dev
```

The editor will be available at `http://localhost:5173`

## 🧩 Grammar Reference

### Keywords

| Shona | English Equivalent | Usage |
|-------|-------------------|--------|
| `mu homwe mune` | CREATE TABLE | Create a new collection |
| `ine/vane/dzine...` | HAS/HAVE | Define columns |
| `isa` | INSERT | Insert values |
| `kubva mu` | FROM | Select from collection |
| `zvese` | ALL/SELECT * | Select all columns |
| `chinja...kuita` | UPDATE...SET | Update values |
| `bvisa` | DELETE | Delete records |

### Operators

- `=` - Equality comparison
- `,` - List separator
- `()` - Grouping/value lists

### Data Types

- **Strings**: `"text"` or `'text'`
- **Numbers**: `123`, `45.67`
- **Null**: `_`
- **Identifiers**: `columnName`

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Write tests for new features
- Update documentation as needed
- Follow the existing code style
- Add Shona translations where appropriate

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [ANTLR4](https://www.antlr.org/) for parsing
- Uses [Monaco Editor](https://microsoft.github.io/monaco-editor/) for the web interface
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Tested with [Vitest](https://vitest.dev/)

## 📞 Support

For questions, issues, or suggestions:
- Open an issue on GitHub
- Submit a pull request

---

<div align="center">
  Made with ❤️ for the Shona-speaking developer community.
  <br>
  © Shonascript
</div>

