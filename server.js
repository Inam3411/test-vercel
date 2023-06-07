const express = require('express')

const app = express();

app.get('/',(req,res)=>{
  res.json({
    status: "Success",
    message: 'Test application is running'
  })
})

app.listen(5000)