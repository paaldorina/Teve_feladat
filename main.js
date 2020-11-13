function jatek() {
    document.getElementById("eredmeny").innerText = "";
    var teve_db = parseInt(document.getElementById("inputTeve").value);
    var strucc_db = parseInt(document.getElementById("inputStrucc").value);
    
    if (isNaN(teve_db) || isNaN(strucc_db)) {
        alert("Hibás adat");
    }
    if (teve_db < 5) {
        alert("Ettől több teve van!");
    }
    if (teve_db > 5) {
        alert("Ettől kevesebb teve van!");
    }
    if (teve_db == 5 && strucc_db == 19) {
        document.getElementById("eredmeny").innerHTML = "Helyes! 5 teve és 19 strucc van";
    }
}