var buttonOpen = document.getElementById('show');
var occButton = document.getElementById('occupied');
var openSeatsNumber = 1;
var fiskePar = document.getElementById("fiskeSeat");

buttonOpen.addEventListener("click", function(e){

    buttonOpen.id = "hide";
    occButton.id = "show";
    openSeatsNumber --;
    fiskePar.innerHTML = "number of open seats available: " + openSeatsNumber;


})

occButton.addEventListener("click", function(e){
  buttonOpen.id = "show";
  occButton.id = "hide";
  openSeatsNumber ++;
  fiskePar.innerHTML = "number of open seats available: " + openSeatsNumber;
})
// $(document).ready(function() {
//
//   var scrollLink = $('.scroll');
//
//   // Smooth scrolling
//   scrollLink.click(function(e) {
//     e.preventDefault();
//     $('body,html').animate({
//       scrollTop: $(this.hash).offset().top
//     }, 1000 );
//   });
