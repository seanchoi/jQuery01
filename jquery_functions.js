$("#first").click(function() {
    $(".title1").css("color","red");
});


$(".slideToggle").hide();

$("#second").click(function() {
    $(".slideToggle").slideToggle("slow", function() {

    })
});
    
$("#third").click(function() {
    $(".append").append("<p>Hello This is jQuesry Append Practice Assignment!</p>")
})


