function validateForm() {
    console.log("a ver si funciona");
    // con este codigo pude leer lo que me da el formulario y el id
    if (document.forms["loginForm"]["usuario"].value==""||document.forms["loginForm"]["contraseña"].value==""){
    alert("falta completar el campo");
    // el false hace que se detenga la ejecucion del submit para que ponga algo en la pagina
      return false;
    }
   
  }