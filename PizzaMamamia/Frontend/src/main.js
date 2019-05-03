$(function(){
    //This code will execute when the page is ready
    var PizzaMenu = require('./pizza/PizzaMenu');
    var PizzaCart = require('./pizza/PizzaCart');
    var Pizza_List = require('./Pizza_List');
    var OrderValidation = require('./pizza/PizzaValidationForm');
    //var GoogleCart=require('./pizza/GoogleMap');

    PizzaCart.initialiseCart();
    PizzaMenu.initialiseMenu();

    $(".orderButton").click(function(){
            if($(".howManyOrders").text()!=0){
                window.location = "/order.html";
            }
        });
});