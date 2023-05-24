const options = [
  { label: '😄', count: 0 },
  { label: '😊', count: 0 },
  { label: '😃', count: 0 },
  { label: '😆', count: 0 },
  { label: '😍', count: 0 }
];

function displayResults() {
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = '';

  options.forEach(option => {
    const smileyDiv = document.createElement('div');
    smileyDiv.className = 'smiley';
    smileyDiv.textContent = option.label;

    smileyDiv.addEventListener('click', () => {
      option.count++;
      displayResults();
    });

    const countDiv = document.createElement('div');
    countDiv.textContent = option.count;

    resultsDiv.appendChild(smileyDiv);
    resultsDiv.appendChild(countDiv);
  });
}

displayResults();