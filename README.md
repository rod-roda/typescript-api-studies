# Node.js API with TypeScript

RESTful API for managing books and authors, built as a study project to explore backend development with strong typing and modern tooling.

## 🎯 Why These Technologies?

**TypeScript** was chosen to enforce strict typing and make the codebase more robust — no more "accepting anything." Defining rigid types upfront guarantees code quality and catches errors before runtime.

**MongoDB** provides the flexibility needed for a learning project. Unlike relational databases, Mongo lets me structure data freely, which forces me to think critically about organization since there's nothing preventing incorrect schemas. This freedom is a double-edged sword that makes you a better data architect.

**Mongoose** simplifies MongoDB administration and schema definition, while integrating seamlessly with TypeScript through its built-in typing system. It provides structure where Mongo is flexible, without sacrificing the benefits of NoSQL.

**Node.js + Express** was selected to run TypeScript on the backend and revisit fundamental Express concepts. Despite newer frameworks emerging, Express remains widely used in production and understanding it deeply is valuable.

## 📚 What This Project Demonstrates

- Static typing with interfaces and custom types
- Express with TypeScript generics
- Mongoose schemas with full type safety
- Custom error handling with typed middlewares
- Clean architecture with separation of concerns

## 🛠️ Tech Stack

- **Node.js 18+** - JavaScript runtime
- **TypeScript** - Typed superset of JavaScript
- **Express** - Minimalist web framework
- **MongoDB** - NoSQL document database
- **Mongoose** - ODM for MongoDB with TypeScript support
- **tsx** - Fast TypeScript executor for development

## 📋 Prerequisites

- Node.js >= 18
- MongoDB running locally or connection URI

## 🚀 How to Run

### 1. Clone the repository
```bash
git clone https://github.com/rod-roda/typescript-api-studies.git
cd api-node
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment variables
```bash
cp .env.example .env
# Edit .env with your MongoDB connection string
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

## 📡 API Documentation

Base URL: `http://localhost:3000`

### Response Format

#### Success Response
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "name": "Example Data",
  ...
}
```

#### Error Response
All errors follow a consistent structure:
```json
{
  "message": "Error description",
  "status": 400
}
```

**Common Status Codes:**
- `200` - Success
- `201` - Created
- `400` - Bad Request (invalid data or malformed ID)
- `404` - Not Found
- `500` - Internal Server Error

### Endpoints

#### Authors
- `GET /authors` - List all authors
- `GET /authors/:id` - Get author by ID
- `POST /authors` - Create new author
  ```json
  { "name": "Author Name", "nationality": "Country" }
  ```
- `PUT /authors/:id` - Update author
- `DELETE /authors/:id` - Delete author

#### Books
- `GET /books` - List all books
- `GET /books/:id` - Get book by ID
- `GET /books/query` - Search with filters
  - Query params: `publisher`, `title`, `minPages`, `maxPages`
  - Example: `/books/query?publisher=O'Reilly&minPages=200`
- `GET /authors/:id/books` - List books by specific author
- `POST /books` - Create new book
  ```json
  {
    "title": "Book Title",
    "publisher": "Publisher Name",
    "price": 40,
    "pages": 350,
    "author": "507f1f77bcf86cd799439011"
  }
  ```
- `PUT /books/:id` - Update book
- `DELETE /books/:id` - Delete book

## 🔧 Environment Variables

Create a `.env` file in the root directory:

```env
PORT=3000
DB_CONNECTION_STRING=mongodb://localhost:27017/bookstore
```

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
