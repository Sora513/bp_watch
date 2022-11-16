require('dotenv').config();
const token = process.env.TOKEN;

if(token !=undefined){
    console.log("TOKEN: "+token)
    
}else{
    console.log("FAILED: TOKEN is undefined")
}