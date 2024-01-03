scrolldown()
function scrolldown() {
  window.scrollBy(0, 200);

  setTimeout(() => {
      window.scrollBy(0, -200);
  }, 100);
}

const anchor=document.getElementById('anchor')
const rekt = anchor.getBoundingClientRect();
const anchorX = rekt.left + rekt.width / 2;
const anchorY = rekt.top + rekt.height / 2 + 150;
console.log(anchorY)

/*OJOS ROBOT*/ 
document.addEventListener('mousemove', (e)=>{
    const mouseX = e.clientX
    const mouseY = e.clientY

    const angleDeg = angle(mouseX,mouseY,anchorX,anchorY)
    console.log(mouseY)
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
  // Obtén el div
  var miDiv = document.querySelector('.robot');

  // Agrega la clase 'show' después de un breve retraso (por ejemplo, 1 segundo)
  setTimeout(function() {
      miDiv.classList.add('show');
  }, 1000);
});
/*REVEAL*/
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

/*ESTUDIOS*/

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

    // Initial check on page load
    toggleCollapsedClass();
    toggleCollapsedClass2();

    // Update the class on window resize
    window.addEventListener('resize', toggleCollapsedClass);
    window.addEventListener('resize', toggleCollapsedClass2);
  });
