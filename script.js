// Function to click the buttons
function clickButtons() {
    const button1 = document.querySelector('button[aria-labelledby="score-label-5"]');
    const button2 = document.querySelector('button.pbr-btn.pbr-btn--primary.pbr-btn--large.pbr-btn--with-icon-end');
    
    if (button1) {
        button1.click();
    }
    
    if (button2) {
        button2.click();
    }
}

// Interval to click the buttons every second
const intervalId = setInterval(clickButtons, 1000);

// Stop the interval after 10 minutes (600,000 milliseconds)
setTimeout(() => clearInterval(intervalId), 600000);
