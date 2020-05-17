//    what we do section
$('.main').click(function () {
  $(this).children('.hide').slideToggle(1200);
  $(this).children('.show').toggle(1500);
});
// giving feedback to the customer
$("button").click(function (omonge) {
  var client = document.getElementById('nameDetail').value;
  alert(' Dear ' + ' esteemed ' + client + ' Thank you for reaching out. Our team will get back to you shortly. ' + ' Reach out to us anytime');
  omonge.preventDefault();
});
//    reset my form button
$("button").on('click', function () {
  $('form').each(function () {
    this.reset();
  });
});
//portifolio section 
$(".card").hover(function () {
  $(this).children(".card-1").fadeToggle(1000, "linear");
});
