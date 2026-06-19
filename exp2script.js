console.log("TechStore Website Loaded Successfully");

window.onload = function()
{
    alert("Welcome to TechStore!");
};

// Product Button Click Message
document.addEventListener("DOMContentLoaded", function(){

    let buttons = document.querySelectorAll(".btn-primary");

    buttons.forEach(function(button){

        button.addEventListener("click", function(){

            console.log("Product Details Opened");

        });

    });

});