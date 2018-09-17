$(document).ready(function () { 
    console.log("Hola Mundo!");

    //var theForm = document.getElementById("the-form");
    //theForm.hidden = true;
    var theform = $("#the-form");
    theform.hide();


    //var button = document.getElementById("buyButton");
    //button.addEventListener("click", function () {
    //    console.log("Buying item");
    //});
    var button = $("#buyButton");
    button.on("click", function () {
        console.log("Buying item");
    });

    var productInfo = $(".product-props li");
    productInfo.on("click", function () {
        console.log("You clicked on " + $(this).text()); 
    });

    var $loginToggle = $("#loginToggle");
    var $popupForm = $(".popup-form");

    $loginToggle.on("click", function () {
        $popupForm.fadeToggle(1000);
        //$popupForm.slideToggle(1000);
    });
});