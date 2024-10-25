const express  = require('express');
const app = express();

const bodyparser = require('body-parser');
const cors = require('cors');

const mongoose = require('mongoose');

const dburi = require('./config/db').dburi;

mongoose.connect(dburi,{ useUnifiedTopology: true,  useNewUrlParser: true  }).then(res=>console.log("connected to database"));

const serviceproviderroute = require('./routes/serviceprovider');

var port = process.env.PORT || 5000;

app.use(bodyparser.json());
app.use(cors());
app.use('/serviceprovider',serviceproviderroute);
app.listen(port,()=>{console.log(`server started at port: ${port}`)});
