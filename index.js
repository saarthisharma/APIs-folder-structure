const express = require('express');
const app = express();
const port = 3000;

// now for making request to the slash/ url we will use app.use
app.use('/' , require('./routes/hello'));

app.listen(port , ()=>{
    console.log(`app listening at http://localhost:${port}`)
});
