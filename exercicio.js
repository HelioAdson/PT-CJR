let linhas = document.querySelectorAll("#minha-linda-tabela > tbody")[1];
let arr = Array.prototype.slice.call(linhas.querySelectorAll("tr"));
let val = 0;
let total = 0;

for(let i = 0; i < arr.length - 1; i++){
    val = Number((arr[i].cells[3]).innerText);
    total = total + val;
    if(val > 0){
        arr[i].style.backgroundColor = "#88DF97";
    }
    else{
        arr[i].style.backgroundColor = "#DE5E5E";
    }
}
const vt = document.querySelectorAll("#tabela-total > th.text-dark")[1];
vt.innerText = total.toFixed(2);