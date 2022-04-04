const express=require("express")
const app=express()
const path=require("path")
const public=path.resolve(__dirname,"./public");

// LINEA PARA QUE EXPRES PUEDDA LEER LO QUE VIENE EN EL POST POR HTML O JSON
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// LINEA PARA QUE EXPRES PUEDDA USAR ARCHIVOS CARPETA DE PUBLIC
app.use(express.static("public"));

app.set("view engine", "ejs")

app.get("/",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/home.html"))
});
app.get("/register",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/register.html"))
});

app.get("/login",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/login.html"))
});
app.post("/",(req,res)=>{
    console.log(req.body);
    res.sendFile(path.resolve(__dirname,"./views/home.html"))
})

app.listen(process.env.PORT||4000,()=>{
    console.log("levantando servidor funcionando")
});
