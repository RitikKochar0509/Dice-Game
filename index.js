let num;
let numb;
let score = 0;
function shuffle(){

    const img = document.getElementById("img");
 let randomnumber = Math.floor(Math.random()*6 + 1);
 num = randomnumber;

    
    img.setAttribute("src",`${randomnumber}.png`);
    var i = document.getElementById('score');
    if(num==numb){
        
        score = score+1;
        
        i.innerHTML = "Score : "  +  score;
        

        console.log(score);
    }
    else{
        
        i.innerHTML = "Score : " +  score;


        
        console.log("not");
    }


    

}



var input = document.querySelectorAll(".number .input")[0];


var btn = document.querySelectorAll(" .first");


for(var i = 0; i < btn.length; i++){
	btn[i].addEventListener('click', function(){

		
		var num1 = this.childNodes[0].nodeValue;

		

		input.value = num1;
        numb = input.value;
        
        
	});
}

let time = 3;
const cntdown  = document.getElementById('tm');
function update(){
    

    const seconds = time%60;

    cntdown.innerHTML = `Dice will show number in ${seconds} seconds `;
    if(seconds==0){
        if(num==numb){

            cntdown.innerHTML = "Your Guess was right";        
        }
        else{
            
            cntdown.innerHTML = "Your Guess was wrong";            
        }
            
        return;

    }
    time--;

}

function anim(){    

    


    setInterval(update,1000);
    setTimeout(shuffle,4000);

    const img = document.getElementById("img");
    img.setAttribute("src","roll-the-dice.gif");
    
    
    


}

reset.addEventListener('click', function(){
	input.value = "";

});