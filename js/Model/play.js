function play(){
    words.innerHTML = clue(choice);
    text = 'input a letter:'
    parg.innerHTML = text;
    $("#headerWord").show()
    $("#text").show()
    hWord.innerHTML = `${clue(choice)}`;
    console.log("test");
    console.log("Entrei no Guess");
    textAttempts.innerHTML = `Attempts: ${attempts}`
    bGame.addEventListener('click' , guess);
    wordig = "";
}


function guess(){
    
    ch = document.getElementById("letter").value;
    
    clue = (w) => [...w].reduce((acc, ch) => acc + (answer.includes(ch) ? ch : '-'), "");

    
    
    
    
    
    console.log(ch);
    console.log(clue(choice));
    
   


   
            
            
            if (choice.includes(ch)) {
                if(wordig.includes(ch) && ch!=""){
                    headerText.innerHTML = "You've already guessed this letter.";
                    console.log("You've already guessed this letter");
                } else if(ch==""){
                    headerText.innerHTML = "Please, input a single letter.";
                } else{
                headerText.innerHTML = "";
                answer += ch;}
            } else if(wordig.includes(ch)){
                headerText.innerHTML = "You've already guessed this letter.";
            } else if(ch.length>1){
                headerText.innerHTML = "Please, input a single letter.";
            } else if(isAlpha(ch)==false){
                headerText.innerHTML = "Please, enter a lowercase letter from the English alphabet.";
            } 
            else {
                attempts -= 1;
                headerText.innerHTML = "That letter doesn't appear in the word.";
                if(attempts==0){
                    headerText.innerHTML = "";
                    setTimeout(()=>{
                    hWord.innerHTML = "You lost!";
                    losses+=1;
                    returnItems();
                    },1000);

                    
                    
                }
            }

            if(clue(choice).includes(choice)){
                setTimeout(()=> {
                    hWord.innerHTML = `You guessed the word ${clue(choice)}!`
                    textAttempts.innerHTML = "You survived!";
                wins+=1;
                returnItems();
                },1000);
                
            }
            if(ch.length==1 && isAlpha(ch)){
                wordig += ch;
            }
            hWord.innerHTML = clue(choice);
            textAttempts.innerHTML = `Attempts: ${attempts}`
            document.getElementById("letter").value = "";
}
function prepare(){
    $("#start").hide()
    $("#results").hide()
    $("#exit").hide()
    $("#words").show()
    $("#game").show()
    $("#letter").show()
    choice = words[Math.floor(Math.random() * 4)];
    answer = ""
    //var clue = choice.split('').map(ch => (guessed.indexOf(ch) >= 0 ? letter : " _ ")).join('');
    clue = (w) => [...w].reduce((acc, ch) => acc + (answer.includes(ch) ? ch : '-'), "");
    attempts = 5;
        
    play();         
    
        
        
    
}