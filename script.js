// استرجاع النقاط وأسماء اللاعبين من localStorage عند تحميل الصفحة
window.onload = function() {
  const player1Name = localStorage.getItem('player1Name');
  const player2Name = localStorage.getItem('player2Name');
  const score1 = localStorage.getItem('score1');
  const score2 = localStorage.getItem('score2');

  if (player1Name) {
    document.getElementById('player1Name').value = player1Name;
  }
  if (player2Name) {
    document.getElementById('player2Name').value = player2Name;
  }
  if (score1 !== null) {
    document.getElementById('score1').textContent = score1;
  }
  if (score2 !== null) {
    document.getElementById('score2').textContent = score2;
  }
};

// تخزين البيانات في localStorage عندما يتغير النقاط أو الأسماء
function decreaseScore(player) {
  let score = parseInt(document.getElementById(`score${player}`).textContent);
  score--;
  document.getElementById(`score${player}`).textContent = score;

  saveData();
}

function clearScore(player) {
  document.getElementById(`score${player}`).textContent = '0';

  saveData();
}

function addPoints(player, points) {
  let score = parseInt(document.getElementById(`score${player}`).textContent);
  score += points;
  document.getElementById(`score${player}`).textContent = score;

  saveData();
}

function saveData() {
  // حفظ النقاط وأسماء اللاعبين في localStorage
  const player1Name = document.getElementById('player1Name').value;
  const player2Name = document.getElementById('player2Name').value;
  const score1 = document.getElementById('score1').textContent;
  const score2 = document.getElementById('score2').textContent;

  localStorage.setItem('player1Name', player1Name);
  localStorage.setItem('player2Name', player2Name);
  localStorage.setItem('score1', score1);
  localStorage.setItem('score2', score2);
}
