function results(){
    $("#header").hide()
    $("#start").hide()
    $("#results").hide()
    $("#exit").hide()
    
    
    vWin.innerHTML = `You won: ${wins} times.`;
    vLoss.innerHTML = `You lost: ${losses} times.`;
    console.log(`You won: ${wins} times.`);
    console.log(`You lost: ${losses} times.`);
   
    setTimeout(()=> {
        vWin.innerHTML = "";
        vLoss.innerHTML = "";
        $("#header").show() 
        $("#start").show()
        $("#results").show()
        $("#exit").show()
        
     }
     ,3000);
    
    
}

