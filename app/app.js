//imports
const http = require('http');
const cors = require('cors')
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

let corsOptions = {
    origin: "http://localhost:8081"
}
app.use(cors(corsOptions));

// parse request of content type - application/json
app.use(express.json());

// static files 
app.use(express.static('public'));
app.use('/css', express.static(__dirname + '/src/public/css'));

// views
app.set('views', './src/views');
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');
app.get('', (req, res) => {
    res.sendFile(__dirname + '/src/views/index.html')
})

require("./src/routes/clientes.routes.js")(app);
require("./src/routes/catalogo.routes.js")(app);
require("./src/routes/pedidos.routes.js")(app);

app.listen(port, () => {
    console.debug(`App listening on port ${port}`)
});