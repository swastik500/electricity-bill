function calculateBill() {
  var name = document.getElementById("name").value;
  var address = document.getElementById("address").value;
  var billNo = document.getElementById("billNo").value;
  var units = parseFloat(document.getElementById("units").value);
  var rate;
  if (units <= 50) {
    rate = 2.6;
  } else if (units <= 150) {
    rate = 3.25;
  } else if (units <= 250) {
    rate = 4.8;
  } else {
    rate = 5.5;
  }
  var billAmount = units * rate;
  document.getElementById("result").innerHTML =
    "<h3>Electricity Bill Amount:</h3><p>Name: " +
    name +
    "</p><p>Address: " +
    address +
    "</p><p>Bill No.: " +
    billNo +
    "</p><p>Amount: $" +
    billAmount.toFixed(2) +
    "</p>";
}