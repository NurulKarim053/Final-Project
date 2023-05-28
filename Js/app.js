// JQUERY CODE
AOS.init();
$('.slider').slick({
 
 


})





$('.switch input').click(function(){

 let isChecked  = $(this).prop("checked")

  if(isChecked == true){
    $('body').addClass('darkmode')
  } else{
    $('body').removeClass('darkmode')
  }



})