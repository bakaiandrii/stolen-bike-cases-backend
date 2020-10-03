const express = require('express');
const cors = require('cors');
const path = require('path');

const {officerRouter, caseRouter} = require('./routers');
const inctance = require('./database').getInstance();
inctance.setModels();

let app = express();
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.use('/officer', officerRouter);
app.use('/case', caseRouter);

app.listen(5000, (err) => {
    if (err) throw err;
    console.log('Listen in port 5000');
});
