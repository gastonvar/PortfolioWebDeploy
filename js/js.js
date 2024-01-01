const anchor=document.getElementById('anchor')
const rekt = anchor.getBoundingClientRect();
const anchorX = rekt.left + rekt.width / 2;
const anchorY = rekt.top + rekt.height / 3;

/*OJOS ROBOT*/ 
document.addEventListener('mousemove', (e)=>{
    console.log(e)
    const mouseX = e.clientX
    const mouseY = e.clientY

    const angleDeg = angle(mouseX,mouseY,anchorX,anchorY)
    console.log(angleDeg)

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

/*REVEAL*/
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 10;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
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