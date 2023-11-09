// using window prompt

// let a;
// a = window.prompt("enter the value of a");
// a = Number(a);
// let b;
// b = window.prompt("enter the value of b");
// b = Number(b);
// let c;

// sq = Math.pow(a,2) + Math.pow(b,2);
// c = Math.sqrt(sq);
// console.log(c);


// using HTML

let c;

document.getElementById("button").onclick = function(){

    
    a = document.getElementById("mya").value;
    a = Number(a);
    
    b = document.getElementById("myb").value;
    b = Number(b);
    sq = Math.pow(a,2) + Math.pow(b,2);
    c = Math.sqrt(sq); 
    document.getElementById("sidec").innerHTML = "side c :" + c;

}