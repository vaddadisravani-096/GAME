
let boxes=document.querySelectorAll(".box");
let rs=document.querySelector("#rs");             //restart access
let ks=document.querySelector("#ks");             //start button access                               //player1 and player2(turn's)
let mines=document.querySelector("#mine");
let hey=document.querySelector(".hey");
let turn0=true; 
                                               //winning pattern(2d array using)
const wp=[
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8],
];
 const reset=()=>{
    turn0=true;
    enableboxes();
    hey.classList.add("hide");
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{          //now all boxes are clickable as we added events
        if(turn0){                              //now printing inner text in boxes
            box.innerText="O";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        checkwinner();
    });
});
const disableallboxes=()=>{
for(let box of boxes){
    box.disabled=true;
}
}
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner=(pos1)=>{
    mines.innerText=`congrats winner is ${pos1}`;
    hey.classList.remove("hide");
    disableallboxes();
}
const checkwinner=()=>{
    for(let para of wp){
        let pos1=boxes[para[0]].innerText;
        let pos2=boxes[para[1]].innerText;
        let pos3=boxes[para[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                console.log("winner",pos1);
                showWinner(pos1);
            }
        }
    }
}
rs.addEventListener("click",reset);
ks.addEventListener("click",reset);

















