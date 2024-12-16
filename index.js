// Object containing the correct answers
const correctAnswers = {
    q1: "b", // O(log n)
    q2: "b", // Merge Sort
    q3: "c", // A collision resolution mechanism is used, such as chaining or open addressing.
    q4: "c", // Binary Heap
    q5: "a", // O(V + E)
    q6: "b", // Tries allow for efficient prefix-based searches.
    q7: "c", // O(n²)
    q8: "c", // Inorder
    q9: "a", // Dijkstra's Algorithm
    q10: "a" // Stack
  };
  
  
  function addquestiontoDOM(i) {
    let id = 'q' + String(i);
    let div = document.getElementById(id);
    if (div) div.classList.remove('hidden'); // For further questions, if div doesn't exist, then no showing 
    if (i == 10) {
      document.getElementsByTagName('button')[0].classList.remove('hidden');
      document.getElementsByTagName('button')[1].classList.add('hidden');
    }
  }
  
  function getanswer(id) {
    const options = document.getElementById(id).getElementsByTagName('input');
    for (let option of options) {
      if (option.checked) return option.value;
    }
    return null; // if user skips the question then answer should be null
  }
  
  function displayscore(score) {
    for (let i = 1; i <= 10; i++) {
      let id = 'q' + String(i);
      document.getElementById(id).classList.add('hidden');
    }
    let submitButton = document.getElementById('submit-btn');
    submitButton.remove()
    let p = document.createElement('p');
    p.innerHTML = `Your total score is <strong>${score}</strong> out of 10`;
    p.style.fontSize = '24px';
    p.style.fontWeight = 'bold';
    p.style.textAlign = 'center';
    p.style.marginTop = '20px';
    p.style.padding = '20px';
    p.style.backgroundColor = '#4CAF50';
    p.style.color = 'white';
    p.style.borderRadius = '8px';
    p.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.2)'; 
    document.body.appendChild(p);
    //The correct answer also should be displayed
    document.getElementsByTagName('table')[0].classList.remove('hidden')
  }
  
  let score = 0;
  let currentQuestion = 1; 
  
  document.addEventListener('DOMContentLoaded', () => {
    let nextButton = document.getElementsByClassName('next-btn')[0]; 
    let submitButton = document.getElementById('submit-btn');
  
    nextButton.addEventListener('click', () => {
      let id = 'q' + String(currentQuestion);
      let answer = getanswer(id);
      if (answer && answer == correctAnswers[id]) score++; 
      currentQuestion++; 
      addquestiontoDOM(currentQuestion);
    });
  
    submitButton.addEventListener('click', () => {
      let options=document.getElementById('q10').getElementsByTagName('input')
      for(let option of options){
        if(option.checked){
            let answer=option.value
            if(answer && answer==correctAnswers['q10'])score++;
            break
        }
      }
      //for examining the last question when nxt button wont be there so we have to check when submit button is clicked for the last question only
      displayscore(score); 
    });
  
    addquestiontoDOM(currentQuestion); 
  });
  