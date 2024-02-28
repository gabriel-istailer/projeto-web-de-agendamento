const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req,res) => {
    res.send("Servidor funcionando!");
});

app.listen(process.env.PORT, () => {
    console.log("Server rodando..");
});
