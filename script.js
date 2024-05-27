const boxes = document.querySelectorAll(".box");
const heading = document.querySelector(".heading span");
const btn = document.querySelector(".btn");

const colors = [
  "#41436A",
  "#984063",
  "#f64668",
  "#fe9677",
  "#aa4ff6",
  "#cf649a",
  "#e04e39",
];



let current = 1;

const textStyle = () => {
  btn.style.backgroundColor = colors[current - 1];
  btn.firstElementChild.textContent = techs[current - 1];
};

let interval = setInterval(() => {
  boxes.forEach((box) => {
    if (current > boxes.length) current = 1;

    if (box.classList[1].split("-")[1] * 1 === current) {
      box.classList.add("active");
    } else {
      box.classList.remove("active");
    }
  });
  textStyle();
  current++;
}, 5000);

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    boxes.forEach((cube) => {
      cube.classList.remove("active");
    });
    box.classList.add("active");

    current = box.classList[1].split("-")[1] * 1;

    textStyle();

    clearInterval(interval);
  });
});


// Question Page Button 


$('.button').click(function(){
  var $btn = $(this),
      $step = $btn.parents('.modal-body'),
      stepIndex = $step.index(),
      $pag = $('.modal-header span').eq(stepIndex);
      console.log($step,'step')
      console.log($pag,'$pag')
      console.log(stepIndex,'stepIndex')
  if(stepIndex === 0 || stepIndex === 1 || stepIndex === 2 || stepIndex === 3 || stepIndex === 4) { step1($step, $pag); }
  else { step6($step, $pag); }
  
});


function step1($step, $pag){
// console.log('step1');
  // animate the step out
  $step.addClass('animate-out');
  
  // animate the step in
  setTimeout(function(){
    $step.removeClass('animate-out is-showing')
         .next().addClass('animate-in');
    $pag.removeClass('is-active')
          .next().addClass('is-active');
  }, 600);
  
  // after the animation, adjust the classes
  setTimeout(function(){
    $step.next().removeClass('animate-in')
          .addClass('is-showing');
    
  }, 1200);
}

function step6($step, $pag){
console.log('3');

  // animate the step out
  $step.parents('.modal-wrap').addClass('animate-up');

  setTimeout(function(){
    $('.rerun-button').css('display', 'inline-block');
  }, 300);
}

$('.rerun-button').click(function(){
 $('.modal-wrap').removeClass('animate-up')
                  .find('.modal-body')
                  .first().addClass('is-showing')
                  .siblings().removeClass('is-showing');

  $('.modal-header span').first().addClass('is-active')
                          .siblings().removeClass('is-active');
 $(this).hide();
});
