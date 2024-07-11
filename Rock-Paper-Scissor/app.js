let buttons=document.querySelectorAll('img');
let decision=document.querySelector('.decision');
let youCount=0, computerCount=0;
let you=document.querySelector('#you');
let computer=document.querySelector('#computer');

buttons.forEach((obj, index)=>{
obj.addEventListener("click", ()=>{
    decision.classList.remove('youWon');
    decision.classList.remove('compWon');
    console.log(index ,"is Pressed");
    let butPress=index;
    let compPress=Math.floor(3*Math.random());
    console.log(compPress);
    printWinner(butPress, compPress);
})
})

const printWinner=(p1, p2)=>{
    console.log(p1, p2);
    if(p1==p2){
        console.log('Draw');
        decision.innerText=`It's a draw, You both choose: ${name(p1)}`;
    }
    else{
        if(p1==0&&p2==2||p1==1&&p2==0||p1==2&&p2==1){
            youCount++;
            console.log('You won', youCount);
            you.innerText=youCount;
            decision.classList.add('youWon');
            decision.innerText=`You won!🤗 Your move: ${name(p1)}, Computer move: ${name(p2)}`;
        }
        else{
            computerCount++;
            console.log('Computer won',  computerCount);
            computer.innerText=computerCount;
            decision.classList.add('compWon');
            decision.innerText=`Computer won!😢 Your move: ${name(p1)}, Computer move: ${name(p2)}`;
        }
            
    }
}
const name=(index)=>{
    switch(index){
        case 0: return 'Rock';
        case 1: return 'Paper';
        case 2: return 'Scissor';
    }
}