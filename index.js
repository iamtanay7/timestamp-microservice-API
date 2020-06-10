const PORT = 3000;
const https = require('http')
var express = require('express')
var app = express()
var bodyParser = require('body-parser')
app.listen(PORT)

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/views/index.html')
})
app.use(bodyParser.urlencoded({extended:false}))

app.get('/api/timestamp/:mydate',(req,res)=>{
    var newdate=new Date(req.params.mydate)
    console.log(newdate)
    let obj;
    if(newdate!="Invalid Date"){
        obj={ unix:newdate.getTime(),
            utc:newdate.toUTCString()}
    }
    else{
        obj={"error":newdate.toString()}
    }
    res.json(obj)
})

app.post('/',(req,res)=>{
    return res.redirect(`${req.baseUrl}/api/timestamp/${req.body.myDate}`)
    

})

module.exports=app