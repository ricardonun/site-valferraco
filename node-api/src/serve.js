const express = require('express')
const requireDir = require('require-dir')
const routes = require('./routes');
const cors = require('cors')

require('./database')


//iniciando o app
const app = express();

app.use(cors({
    origin: '*'
}

))

app.use(express.json())
app.use(routes);


app.listen(30001)