$(document).ready(function () {
    $("img").hover( function () {
        $(this).attr("src", $(this).attr("alt") ) 
       
    }, function () {
        $(this).attr("src", "img/sun.png")
    });
    
})

