let buttons=document.querySelectorAll('.box');
let resetBtn=document.querySelector('.reset');
let turn=false;
let count=0;
let h2=document.querySelector('h2');
let tileSymbol=[];
const winCases=[
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];

buttons.forEach((obj, ind, arr)=>{
    obj.addEventListener("click", ()=>{
        console.log(ind);
        if(obj.innerText==""){
            if(turn==false){
                obj.innerText="X";
                turn=true;
                tileSymbol[ind]='X';
            }
            else{
                obj.innerText="O";
                turn=false;
                tileSymbol[ind]='O';
            }
            check();
        }
    })
});
function disable(){
    
}
function check(){
    for(let i=0; i<8; i++){
        let tile0=tileSymbol[winCases[i][0]];
        let tile1=tileSymbol[winCases[i][1]];
        let tile2=tileSymbol[winCases[i][2]];
        if(tile0==undefined||tile1==undefined||tile2==undefined)
            continue;
        if(tile0==tile1&&tile1==tile2){
            h2.innerText=`Player ${tile0} Won!!🥳`;
            for(let j=0; j<3; j++)
                buttons[winCases[i][j]].style.color="red";
            return;
        }
    }
    for(let j=0; j<9; j++){
        if(tileSymbol[j]==undefined)
            return;
    }
    h2.innerText='Nobody won!!😢';
}

resetBtn.addEventListener("click", ()=>{
   reset();
});
function reset(){
    h2.innerText="";
    for(let i=0; i<8; i++)
        if(winCases[i][0]!=undefined&&winCases[i][1]!=undefined&&winCases[i][2]!=undefined){
            buttons[winCases[i][0]].style.color="black";
            buttons[winCases[i][1]].style.color="black";
            buttons[winCases[i][2]].style.color="black";
        }
    buttons.forEach((obj)=>{
        obj.innerText="";
       })
    tileSymbol=[]; 
    turn=false;
}