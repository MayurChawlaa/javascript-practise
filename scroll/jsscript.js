// $('#slideRight').click(function(){
//   console.log("Right Clicked");
//   $('.container').scrollLeft += 100;
// });
// $('#slideLeft').click(function(){
//   console.log("Right Clicked");
//   //$('.container').scrollLeft += 100;
// });


const buttonRight = document.getElementById('slideRight');
const buttonLeft = document.getElementById('slideLeft');

buttonRight.onclick = function () {
  console.log("Right Clicked");
  document.querySelector('.container').scrollLeft += 100;
};
buttonLeft.onclick = function () {
  console.log("Left Clicked");
  document.querySelector('.container').scrollLeft -= 100;
};