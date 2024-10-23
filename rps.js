let score =JSON.parse (localStorage.getItem('score')) ||
    {
      Wins:0,
      Loses:0,
      Ties:0
    }

    function checkscore(){
      if ((score.Wins>0) || (score.Loses>0) || (score.Ties>0)){
        document.querySelector('.js-reset').classList.add('reset-green');
      }
      else{
        document.querySelector('.js-reset').classList.remove('reset-green');
      }
    }
    function resetScore(){
      score.Wins=0;
      score.Loses=0;
      score.Ties=0;
      localStorage.setItem('score',JSON.stringify(score)) 
      checkscore();
      document.querySelector('.js-result').innerHTML='';
      document.querySelector('.js-description').innerHTML ='';
      
      document.querySelector('.js-score').innerHTML = `
      Wins: ${score.Wins} | Loses: ${score.Loses} | Ties: ${score.Ties}
    `
    }

    function pickComputerMove(){
      const randomNumber = Math.random();
      

      if (randomNumber<1/3) return 'rock';
      if (randomNumber<2/3) return 'paper';
      return 'scissor';
      
    }
    function getImage(move){
      switch(move){
        case 'rock':
          return '<img  src="images/rock-emoji.png"  alt="">';
        case 'paper':
          return '<img  src="images/paper-emoji.png" alt="">';
        case 'scissor':
          return '<img  src="images/scissors-emoji.png" alt="">';
        default :
        return '';
      }
    }

    function playGame(playerMove) {
      
      const computerMove=pickComputerMove();
      const result = determineResult(playerMove,computerMove);
      
      
      display(playerMove,computerMove,result);
    }

    function determineResult(playerMove,computerMove){
      if (playerMove===computerMove ) return 'Tie' ;
      if (
        (playerMove==='rock' && computerMove==='scissor')||
         (playerMove==='paper' && computerMove==='rock')||
         (playerMove==='scissor'&&computerMove==='paper')
      ){
        return 'You Win';
      }
      return 'You Lose';
    }
    
    function display(playerMove,computerMove,result){
      if (result=='You Win' ){
      score.Wins += 1
      }
      else if (result=='Tie'){
        score.Ties+=1
      }
      else{
        score.Loses+=1
      }
    
    localStorage.setItem('score',JSON.stringify(score)) 
    checkscore();

    document.querySelector('.js-result').innerHTML =`${result}`;
    document.querySelector('.js-description').innerHTML =`You picked ${getImage(playerMove)}
Computer Picked ${getImage(computerMove)}`
    document.querySelector('.js-score').innerHTML=`Wins:${score.Wins} | Loses:
${score.Loses} | Ties:${score.Ties}`
      
}    

    window.onload = function() {
      checkscore();
      document.querySelector('.js-score').innerHTML = 
        `Wins: ${score.Wins} | Loses: ${score.Loses} | Ties: ${score.Ties}`
    };
    
   

    