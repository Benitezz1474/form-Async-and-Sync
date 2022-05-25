 
 const expresiones = {
    
    usuario: /^[a-z0-9]+/,
    clave: /^.+/,
    email: /[A-Za-z0-9\s]+@+[a-zA-Z]+.+[a-zA-Z]$/
 }

 const campos = {
   usuario: false,
   email: false,
   clave: false
 }

 const input = document.querySelectorAll(".input");



 const verificarCampo=(event)=>{

 let inputs = event.target.name;

 //validar

 if(inputs == "usuario"){

   if(expresiones.usuario.test(event.target.value)){
    
    return campos.usuario = true;

   }
}

 else if(inputs == "clave"){
  if(expresiones.clave.test(event.target.value)){
    
    return campos.clave = true;
  }
}

else if(inputs == "email"){
  if(expresiones.email.test(event.target.value)){
    
    return campos.email = true;
  }
}

 }
 


  


 input.forEach((index)=>{

  index.addEventListener("keyup", verificarCampo);

 });
 

 
 
 
 const form_1 = document.getElementById("form_1");
 
 form_1.addEventListener("submit",(event)=>{

  event.preventDefault();

  console.log("Enviando...");

  //Validaciones

  if((campos.usuario && campos.clave && campos.email) == true){
    
    form_1.submit();

  }
 
  else{
    alert("rellena los campos correctamente >:(");
  }

  
 });





 const form_2 = document.getElementById("form_2");

 form_2.addEventListener("submit", (event)=>{

  event.preventDefault();

  console.log("Enviado SIN RECARGAR la pagina");

  //Validaciones

  if((campos.usuario && campos.clave && campos.email) == true){
    
    fetch("verificar.php",{
      method: "POST",
      body: new FormData(form_2)
    });

  }

  else{
    alert("rellena los campos correctamente >:(");
  }



 });
