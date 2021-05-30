const express=require("express")
var app=express()
app.use(express.static(__dirname))
app.set('views', 'views')
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.get('/',function(req,res){
    res.render('views')
})

app.post('/enter',function(req,res){
  
  let score=0;
  if(req.body.optradio==1){
     score+=30
  }
  if(req.body.optradio==2){
    score+=0
 }
  if( req.body.active==2){
     score+=10
  }
  if( req.body.active==1){
    score+=0
 }
  if( req.body.help==2){
     score+=10
  }
  if( req.body.help==1){
    score+=0
 }
  if(req.body.work==2 ){
    score+=10
  }
  if(req.body.work==1 ){
    score+=0
  }
  if( req.body.sleep==2){
    score+=10
  }
  if( req.body.sleep==1){
    score+=0
  }
  if(req.body.food==2){
    score+=10
  }
  if(req.body.food==1){
    score+=0
  }
  if(req.body.conf==1){
    score+=10
  }
  if(req.body.conf==2){
    score+=0
  }
  if(req.body.dark==1){
    score+=5
  }
  if(req.body.friendships==2){
    score+=0
  }
  if(req.body.friendships==1){
    score+=10
  }
  if(req.body.alone==1){
    score+=10
  }
  if(req.body.alone==2){
    score+=0
  }
  if(req.body.discomfort==1){
    score+=10
  }
  if(req.body.discomfort==2){
    score+=0
  }
  if(req.body.friendships==1){
    score+=10
  }
  if(req.body.futu==1){
    score+=10
  }
  if(req.body.futu==2){
    score+=0
  }
  if(req.body.attack==1){
    score+=10
  }
  if(req.body.attack==2){
    score+=0
  }
  if(req.body.anxiety==1){
    score+=10
  }
  if(req.body.anxiety==2){
    score+=0
  }
  if(score>50){
    res.render('sad',{name:req.body.name})
  }else{
    res.render('happy',{name:req.body.name})
  }
  
})
app.listen(3000)
