function simpleinterest(customer_Name, P, T, R) {
  console.log("HHHHHHHHH");
  console.log("Hello World --- Welcome To Simple Interest Application");
  console.log("###########################");

  var SI = (P * T * R) / 100;

  console.log("HHHHHHHHH");
  console.log("The Simple Interest for " + customer_Name + " is :" + SI);
  console.log("###########################");
}

var customer_Name = "Segun Emmanuel";
var P = 1000000;
var T = 2;
var R = 11;
simpleinterest(customer_Name, P, T, R);
