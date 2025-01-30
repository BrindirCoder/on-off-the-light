$('.btn-outline-primary').on('click', function () {
    $('.imgName').attr('src','./img/on.svg'); // when you press on the button the light will be on  
})

$('.btn-outline-primary').on ('click', function() {
    $('body').toggleClass('bg-dark');  // when you click on  the button the mode of body will be change to black and when you preesing again on the button the mode of body will be a white again
})