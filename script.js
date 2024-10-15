// script.js  
document.getElementById('get-advice-button').addEventListener('click', function() {  
    const userInput = document.getElementById('user-input').value;  
    if (userInput.trim() === "") {  
        alert("Please enter a query!");  
        return;  
    }  
    generateAdvice(userInput);  
});  

function generateAdvice(query) {  
    // Mock advice; in a real-world scenario, you could integrate an API or more complex logic.  
    const adviceList = [  
        "Start by prioritizing your tasks.",  
        "Break your work into smaller tasks.",  
        "Take regular breaks to keep your mind fresh.",  
        "Use a planner to stay organized.",  
        "Set specific goals for each day.",  
        "Eliminate distractions while working."  
    ];  

    // Select random advice from the list  
    const advice = adviceList[Math.floor(Math.random() * adviceList.length)];  
    displayAdvice(advice);  
}  

function displayAdvice(advice) {  
    const adviceDisplay = document.getElementById('advice-display');  
    adviceDisplay.innerHTML = ""; // Clear previous advice  
    const words = advice.split(' ');  

    // Animate words one by one  
    words.forEach((word, index) => {  
        const span = document.createElement('span');  
        span.innerText = word + ' ';  
        span.style.opacity = 0;  
        adviceDisplay.appendChild(span);  

        // Animate each word  
        setTimeout(() => {  
            span.style.transition = "opacity 0.5s ease";  
            span.style.opacity = 1;  
        }, 500 * index); // Delay based on the index to create animation effect  
    });  
}