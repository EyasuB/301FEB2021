
//let btn = document.querySelector("btn");
//btn.onclick = calcTip;

//alert("hi Ashie");
 function calcTip() {
	//let subtotalElem = 
	//let tipElem =
    let subtotal = parseFloat(document.getElementById('subtotal').value);
    //subtotal.innerHTML = subtotal;
    //btn.innerHTML = "Calculate Tip";
     let tip = parseFloat(document.getElementById('tip').value);
     tip = subtotal * tip / 100;
     let total = subtotal + tip; 
    
    document.getElementById("total").innerHTML = '$' + total;
}
