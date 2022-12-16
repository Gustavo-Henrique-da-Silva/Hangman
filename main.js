console.log("H A N G M A N");
const words = new Array("python", "java", "swift", "javascript");
let isAlpha = (l) => {return /^[a-z]$/.test(l)}
let wins = 0;
let losses = 0;
let game = "";
do{
    let choice = words[Math.floor(Math.random() * 4)];
    let attempts = 8
    answer = ""
    let clue = (w) => [...w].reduce((acc, ch) => acc + (answer.includes(ch) ? ch : '-'), "");
    let wordig = "";
    
    

    game = prompt(`Type "play" to play the game, "results" to show the scoreboard, and "exit" to quit:`)


    if(game=="play"){
        while(attempts!=0){
            const ch = prompt(`\n${clue(choice)}\nInput a letter: `)
            
            if (choice.includes(ch)) {
                if(wordig.includes(ch) && ch!=""){
                console.log("You've already guessed this letter.");
                } else if(ch==""){
                    console.log("Please, input a single letter.");
                }
                answer += ch;
            } else if(wordig.includes(ch)){
                console.log("You've already guessed this letter.");
            } else if(ch.length>1){
            console.log("Please, input a single letter.");
            } else if(isAlpha(ch)==false){
                console.log("Please, enter a lowercase letter from the English alphabet.");
            } 
            else {
                attempts -= 1;
                console.log(`That letter doesn't appear in the word. # ${attempts} attempts`)
                if(attempts==0){
                    console.log("You lost!");
                    losses+=1;
                    break;
                }
            }

            if(clue(choice).includes(choice)){
            console.log(`You guessed the word ${clue(choice)}!`);
            console.log("You survived!");
            wins+=1;
            break;
            }
            
            if(ch.length==1 && isAlpha(ch)){
                wordig += ch;
            }
        }
    }

    else if(game=="results"){
        console.log(`You won: ${wins} times.`);
        console.log(`You lost: ${losses} times.`);
    }
}while(game!="exit");