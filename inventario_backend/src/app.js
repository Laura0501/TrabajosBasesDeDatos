require('./database/sync');
const express = require('express');
const app = express();
const port = process.env.PORT ||8000;

const userrouter = require('./routers/userrouter');
const departmentrouter = require('./routers/departmentrouter');
const salerouter = require('./routers/salerouter');
const branchrouter= require('./routers/branchrouters');
const productrouter= require('./routers/productrouters');

app.use(express.json())
app.use(express.urlencoded({ extended:false }))

app.listen(port, ()=> {
    console.log('The application is running on port ' + port)
});

app.use('/api', userrouter);
app.use('/api', departmentrouter);
app.use('/api', salerouter);

app.use('/api', branchrouter);
app.use('/api', productrouter);