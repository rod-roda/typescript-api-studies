//import http from "http"; //biblioteca nativa do node
import "dotenv/config"; // isso deve ser inserido na parte mais externa do projeto
import app from "./src/app.js";

const PORT = 3000;

// const server = http.createServer((request, response) => {
//     response.writeHead(200, {"Content-Type": "text/plain"}); //Header da resposta
//     response.end(routes[request.url]);
// });

app.listen(PORT, () => {
    console.log("Your server started");
});