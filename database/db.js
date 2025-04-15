const mysql=require('mysql2');
const conexion=mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'Erick2000',
  database:'RegisterPerson'
});

conexion.connect((error)=>{
  if(error){
    console.error(`error en la conexion : ${error}` );
    return;
  }
  console.log(`conectado correctamente al servidor`)
});

//exportacion
module.exports=conexion;