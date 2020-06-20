const express = require('express');
const ind = require('./routes/users');
const app = express();
const port = process.env.PORT || 3000;
app.use (express.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE"); 
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    next();
  });

  app.use(ind);

app.listen(port,()=>{
    console.log(`Server is running on port: ${port}`);
})




