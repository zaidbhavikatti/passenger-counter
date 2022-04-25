
let saveEl=document.getElementById("save-el");
let count=0;
let countEl=document.getElementById("count-el");
function increment(){
      count+=1;
      countEl .textContent=count;
}

function save(){
    let newVar= count +  " - ";
    saveEl.textContent += newVar;
    console.log(count)
    countEl.textContent=0;
    count=0;
}


