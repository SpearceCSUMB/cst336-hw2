//VARIABLES
var subtotal = 0.00;
var tax = 0.0875;
var shipping = 0.00;
var total = 0.00
var afterTax = 0.00;
var htmlCost = 0.00;
var javaCost = 0.00;
// LISTENERS
// Starts the game when page loads

//This shows the checkout once the user is ready. 
$(document).ready(function() {
  $(".submitBtn").click(function() {
    $("#finishPurchase").show();
    document.getElementById("completeOrder").disabled = true;
  });
});

//Updates the number of items for each item. 


$("#updateCartBtn").click(function () {
  var htmlQty = document.getElementById("htmlNumberBox").value;
  var javaQty = document.getElementById("javaNumberBox").value;
  calcCostOfHtml(htmlQty);
  calcCostOfJava(javaQty);
  calcSubtotal(htmlCost, javaCost);
  calcTax(subtotal);
  calcShipping(subtotal);
  calcTotal(afterTax, shipping, subtotal);
  document.getElementById("completeOrder").disabled = false;
  console.log("The value you selected is " + htmlQty + " " + javaQty)
  console.log("The value you selected is " + htmlCost + " " + javaCost)
})

$("#completeOrder").click(function() {
  $("#thankyou").show();
})

function myFunction() {
  var x = document.getElementById("myNumber").value;
  document.getElementById("demo").innerHTML = x;
}


// Functions
// Calculates the cost of the Html books
function calcCostOfHtml (htmlQ) {
  console.log("In CostofHtml");
  htmlCost = htmlQ * 75.99;
  htmlCost = htmlCost.toFixed(2);
  document.getElementById("htmlBookCost").innerHTML = "Total: $" + htmlCost;
}
// Calculates the cost of the Java books
function calcCostOfJava (javaQ) {
  console.log("In CostofJava");
  javaCost = javaQ * 84.99;
  javaCost = javaCost.toFixed(2);
  document.getElementById("javaBookCost").innerHTML = "Total: $" + javaCost;
}
// Calculates the subtotal
function calcSubtotal (htmlC,javaC) {
  htmlC = parseFloat(htmlC);
  javaC = parseFloat(javaC);
  subtotal = htmlC + javaC;
  subtotal = subtotal.toFixed(2);
  document.getElementById("subtotal").innerHTML = "Subtotal: $" + subtotal;
}
// Calculates the tax
function calcTax (sTot) {
  afterTax = tax * sTot;
  afterTax = afterTax.toFixed(2);
  document.getElementById("tax").innerHTML = "Tax (8.75%): $" + afterTax;
  // Update tax total in table
}
// Calculates whether the customer gets free shipping or not
function calcShipping (sTot) {
  if (sTot >= 1500.00) {
    shipping = 0.00;
    document.getElementById("shipping").innerHTML = "Free Shipping";
  } else {
    shipping = 45.99;
    document.getElementById("shipping").innerHTML = "Shipping: $" + shipping;
  }
  // Update shipping total in table
}
// Calculates the total of the purchase
function calcTotal (taxTot, shipTot, subTot) {
  taxTot = parseFloat(taxTot);
  shipTot = parseFloat(shipTot);
  subTot = parseFloat(subTot);
  console.log("in calcTotal");
  total = (subTot + taxTot + shipTot);
  total = total.toFixed(2);
  document.getElementById("total").innerHTML = "Total: $" + total;
  // Update Total in Table
}