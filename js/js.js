/*
Hace el scrolldown al abrir la pagina para que los elementos
carguen correctamente
*/
scrolldown()
function scrolldown() {
  window.scrollBy(0, 200);

  setTimeout(() => {
      window.scrollBy(0, -200);
  }, 100);
}

/*OJOS ROBOT*/ 
/*Rota los ojos*/
const anchor=document.getElementById('anchor')
const rekt = anchor.getBoundingClientRect();
const anchorX = rekt.left + rekt.width / 2;
const anchorY = rekt.top + rekt.height / 2 - 40;

document.addEventListener('mousemove', (e)=>{
    const mouseX = e.clientX
    const mouseY = e.clientY

    const angleDeg = angle(mouseX,mouseY,anchorX,anchorY)
    const eyes = document.querySelectorAll('.eye')

    eyes.forEach(eye =>{
        eye.style.transform=`rotate(${90 + angleDeg}deg)`
    })
})

function angle(cx,cy,ex,ey){
    const dy = ey-cy;
    const dx = ex-cx;

    const rad = Math.atan2(dy,dx);
    const deg = rad*180 / Math.PI;
    return deg;
}

/*FADE IN ROBOT*/
document.addEventListener('DOMContentLoaded', function() {
  var miDiv = document.querySelector('.robot');
  setTimeout(function() {
      miDiv.classList.add('show');
  }, 1000);
});
/*REVEAL*/
/*Hace que los elementos vengan desde abajo con menos opacidad*/
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 10;
      if (elementTop < windowHeight - elementVisible+200) {
        reveals[i].classList.add("active");
      }
    }
}
window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();

/*Desplaza el scroll para que se vea mejor el ultimo boton del acordion*/
let cantidadClicksEnUltimo = 0;
document.querySelector("#ultimo").addEventListener("click", () => {
    cantidadClicksEnUltimo++
    const cantidadDesplazamiento = 200;
    if(cantidadClicksEnUltimo % 2 == 0){
        window.scrollBy({
            top: cantidadDesplazamiento
        });
    }else{
        window.scrollBy({
            top: -1*cantidadDesplazamiento / 2
        }); 
    }
});

/*PROYECTOS*/
/*Abre el acordion segun la resolucion*/
window.addEventListener('DOMContentLoaded', function() {
    var accordionButtons = document.querySelectorAll('.accordion-collapse');
    
    var accordionItems = document.querySelectorAll('.accordion-button')

    function toggleCollapsedClass() {
        accordionItems.forEach(function(button) {
          if (window.innerWidth < 991) {
            button.classList.remove('collapsed');
          } else {
            button.classList.add('collapsed');
          }
        });
      }

    function toggleCollapsedClass2() {
      accordionButtons.forEach(function(button) {
        if (window.innerWidth < 991) {
          button.classList.remove('collapse');
        } else {
          button.classList.add('collapse');
        }
      });
    }


    toggleCollapsedClass();
    toggleCollapsedClass2();


    window.addEventListener('resize', toggleCollapsedClass);
    window.addEventListener('resize', toggleCollapsedClass2);
  });

  /*CONTACTO*/
  /*SCRIPT DE EMAILJS*/
  function sendMail(){
    let nombreTest = document.getElementById("nombre").value
    let emailTest = document.getElementById("email").value
    let asuntoTest = document.getElementById("asunto").value
    let mensajeTest = document.getElementById("mensaje").value
    if(validarInput(nombreTest) && validarInput(emailTest) && validarEmail(emailTest) && validarInput(asuntoTest) && validarInput(mensajeTest)){
      let parms = {
        nombre : nombreTest,
        email : emailTest,
        asunto : asuntoTest,
        mensaje : mensajeTest
      }
      emailjs.send("service_5xe9weg","template_ktuglou",parms).then(alert("Correo enviado correctamente. Me pondré en contacto contigo a la brevedad. Muchas gracias!"))
      document.getElementById("nombre").value = ""
      document.getElementById("email").value=""
      document.getElementById("asunto").value=""
      document.getElementById("mensaje").value=""
    }else{
      alert("Ha ocurrido un error, el mail no ha sido enviado, revisar los campos ingresados")
    }
  }

function validarInput(pInput){
if(pInput==null){
  return false;
  }else{
    return true
  }
}

function validarEmail(pEmail){
  var posicionArroba = pEmail.indexOf('@');

  if (posicionArroba !== -1 && posicionArroba !== 0 && posicionArroba !== pEmail.length - 1) {
    return true;
  } else {
    return false;
  }
}