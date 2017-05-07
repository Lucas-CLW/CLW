/* 互動邏輯，網頁手腳 */
var startBtn = document.querySelector('#start-btn');
  //var（變數）定義startBtn ＝ object.method（value）：start-btn的功能，對應HTML的id定義
startBtn.addEventListener('click', function() {
  //addEventListener:事件監聽，進行後續function
  var cochoice = Math.floor(Math.random()*3); 
  //floor=四捨五入;random=隨機取：結果為取0,1,2
  var choice = parseInt(prompt('Should we play a game? 0. Rock 1. Scissors 2. Paper', 0));
  //parseInt:將String字串轉換為Number數字
  console.log(typeof(choice));
  if (choice === 0) {
      alert('You threw Rock!');
    if(cochoice === 0){
      alert('Me too! Try again!');
    } else if (cochoice === 1){
      alert('I threw Scissors! Lucky Winner!');         
    } else if (cochoice === 2){
      alert('I threw Paper! Loser!!');         
    }
  } else if(choice === 1){
      alert('You threw Scissors!');
    if(cochoice === 0){
      alert('I threw Rock! Loser!');
    }else if(cochoice === 1){
      alert('Me too! Try again!');       
    }else if(cochoice ===2){
      alert('I threw Paper! Lucky winner!');
    }
  } else if(choice === 2){
      alert('You out of Paper!');
    if(cochoice === 0){
      alert('I threw Rock! Lucky Winner!'); 
    }else if(cochoice === 1){
      alert('I threw Scissors! Loser!');       
    }else if(cochoice === 2){
      alert('Me too! Try again!');
    }
  }
});