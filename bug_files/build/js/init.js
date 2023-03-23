
$("a[href^='#']").on("click", function () {
    let href = $(this).attr("href");
  
    $("html, body").animate({
      scrollTop: $(href).offset().top
    });
  
    return false;
  });

const form = document.querySelectorAll('.form-send'),
sendBtn = document.querySelectorAll('.send-btn');
console.log(form , sendBtn)
function numberValidation(num) {
  sendBtn[num].addEventListener('click', (event) => {
    inputValidName(num);
    validName(num);
    disabled(num);
    (iti[num].isValidNumber()) ? "" : event.preventDefault(); + errorShow(num); + phoneInputFun(num); + selectChecker(num);
  })
}
for (var i = 0; i < sendBtn.length; ++i) {
  numberValidation(i);
}