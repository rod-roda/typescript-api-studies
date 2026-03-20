# Node.js API with TypeScript

Introductory RESTful API project built with Node.js, Express, MongoDB and TypeScript. Developed to refresh my knowledge in NodeJS and JavaScript, followed by a complete transformation of the project to TypeScript, thus also practicing the main points of the language.

## 📚 About the Project

API for managing books and authors, demonstrating fundamental TypeScript concepts in a backend application:

- Static typing with interfaces
- Express generics
- Mongoose with typed schemas
- Custom error handling
- Typed middlewares

## 🛠️ Technologies

- **Node.js** - JavaScript runtime
- **TypeScript** - Typed superset of JavaScript
- **Express** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **tsx** - TypeScript executor for development

## 📋 Prerequisites

- Node.js >= 18
- MongoDB running locally or connection URI

## 🚀 How to Run

### 1. Clone the repository
```bash
git clone <repository-url>
cd api-node
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment variables
```bash
cp .env.example .env
# Edit .env with your settings
```

### 4. Run in development mode
```bash
npm run dev
```

### 5. Build for production
```bash
npm run build
npm start
```

## 📡 Endpoints

### Authors
- `GET /authors` - List all authors
- `GET /authors/:id` - Get author by ID
- `POST /authors` - Create new author
- `PUT /authors/:id` - Update author
- `DELETE /authors/:id` - Delete author

### Books
- `GET /books` - List all books
- `GET /books/:id` - Get book by ID
- `GET /books/query` - Search with filters (publisher, title, minPages, maxPages)
- `GET /authors/:id/books` - List books by author
- `POST /books` - Create new book
- `PUT /books/:id` - Update book
- `DELETE /books/:id` - Delete book

## 📂 Project Structure

```
api-node/
├── src/
│   ├── config/          # Configuration (DB)
│   ├── controllers/     # Route logic
│   ├── errors/          # Custom error classes
│   ├── middlewares/     # Express middlewares
│   ├── models/          # Mongoose schemas
│   ├── routes/          # Route definitions
│   ├── types/           # Custom TypeScript types
│   └── app.ts           # Express configuration
├── server.ts            # Entry point
├── tsconfig.json        # TypeScript configuration
└── package.json         # Dependencies and scripts
```

## 🧪 Available Scripts

```bash
npm run dev      # Development with hot-reload
npm run build    # Compile TypeScript to JavaScript
npm start        # Run compiled version
```
