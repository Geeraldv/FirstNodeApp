const http = require("http");
const route = require("./routes/routes");


const server = http.createServer(route);

server.listen(5000);
