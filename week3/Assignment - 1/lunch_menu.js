
var tax = 0;
let total = 0;

function loopForm(form){
  tax = 0;
  total = 0;
  total = parseFloat(total);
  tax=parseFloat(tax);

  for(var i = 0; i<form.elements.length; i++){
    if(form.elements[i].type=="checkbox"){
      if(form.elements[i].checked==true){
        total+=parseFloat(form.elements[i].value);
        tax=parseFloat(total*0.05);
      }
    }
  }
  document.getElementById("total").innerHTML= total.toFixed(2);
  document.getElementById("tax").innerHTML = tax.toFixed(2);
}

function Print(){
  var elTotal = document.getElementById("final");
  var final = 0;

  final = total+tax;
  final = parseFloat(final);
  elTotal.textContent = "$"+final.toFixed(2);

  var d = new Date();
  document.getElementById("demo").innerHTML = "Thank you for your purchase";
  document.getElementById("footer").innerHTML = d;
}
