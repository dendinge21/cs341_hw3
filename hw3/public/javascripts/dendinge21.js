/* Olivia Dendinger */
var $j = jQuery.noConflict();
$j(document).ready(function(){
    $j("#submit").click(function () {
        /*<!--External Citation: https://stackoverflow.com/questions/5831413/get-textarea-text-with-javascript-or-jquery-->*/
            var text1 = document.getElementById('box').value.toLowerCase();
            /*<!--Checking for vegan in textbox-->*/
            if (text1.indexOf('vegan') != -1) {
               alert('WARNING: The cheesecakes contain dairy!');
            } 
            else {
                /* getting values of quanitity and flavor*/
                var myNode = document.getElementById("orderform");
                /*External Citation: https://stackoverflow.com/questions/1085801/get-selected-value-in-dropdown-list-using-javascript */
                var quantity = document.getElementById("amount");
                /*External Citation: https://stackoverflow.com/questions/9618504/how-to-get-the-selected-radio-button-s-value */
                var number = quantity.options[quantity.selectedIndex].value;
                var flavor = document.getElementsByName("type");
                for(var i=0; length=flavor.length; i++){
                    if(flavor[i].checked){
                        topping = flavor[i].value;
                        break;
                    }
                }
                /*removing the elements of the form*/
                while (myNode.firstChild) {
                    myNode.removeChild(myNode.firstChild);
                }
                
                /* replacing order form with a thank you and the details of their order*/
                /*External Citation:https://www.w3schools.com/js/js_htmldom_nodes.asp*/
                var para = document.createElement("p");
                var node = document.createTextNode("Thank you. Your order has been placed." + " The number of cheesecakes ordered is: " + number 
                + "! The topping you chose was: " + topping + "! The notes you entered were: " + text1 + "!");
                para.appendChild(node);
                var element = document.getElementById("orderform");
                element.appendChild(para);
             } 
    });
/*Changing text with whatever is clicked in drop down*/
$j(".dropdown-content a").click(function() {
/*External Citation: https://www.w3schools.com/jquery/jquery_dom_set.asp */
    var item = $j(this).text();
    $j("#month").text(item);
 });
});