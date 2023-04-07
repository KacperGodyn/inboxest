function refreshTime() {
    const timeDisplay = document.getElementById("time");
    const timeString = new Date().toLocaleTimeString();
    timeDisplay.textContent = timeString;
  }
  
  setInterval(refreshTime, 1000);
  
const exchangeIcon = document.querySelector('#exchange-icon');
const exchangeBar = document.querySelector('.exchange-bar');

exchangeIcon.addEventListener('click', () => {
    if (exchangeBar.style.display === 'none') {
      exchangeBar.style.display = 'block';
      exchangeBar.scrollIntoView();
    } else {
      exchangeBar.style.display = 'none';
      window.scrollTo(0, 0);
    }
});
