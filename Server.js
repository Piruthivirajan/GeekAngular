const express=require('express');
const app=express();
app.use((req, res)=>res.sendfile(__dirname + '/home.component.html'));
//app.use(express.static(__dirname+'/dest'));

app.listen(process.env.PORT || 8080);

