//import http from "http"; //biblioteca nativa do node
import "dotenv/config"; // isso deve ser inserido na parte mais externa do projeto
import app from "./src/app.js";

const PORT = process.env.PORT || '3000';

// const server = http.createServer((request, response) => {
//     response.writeHead(200, {"Content-Type": "text/plain"}); //Header da resposta
//     response.end(routes[request.url]);
// });

app.listen(PORT, (): void => {
    console.log(`Server running on port ${PORT}`);
}).on('error', (error: Error): void => {
    console.error('Failed to start server:', error);
    process.exit(1);
});