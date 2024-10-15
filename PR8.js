
      alert("WELCOME TO OUR SPACE!");

     

     // PR8.js  

// Function to check if the quotes section is in the viewport  
function isInViewport(element) {  
  const rect = element.getBoundingClientRect();  
  return (  
      rect.top >= 0 &&  
      rect.left >= 0 &&  
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&  
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)  
  );  
}  

// Function to add the visible class to quotes  
function animateQuotes() {  
  const quotesSection = document.getElementById('quotes');  
  if (isInViewport(quotesSection)) {  
      quotesSection.classList.add('visible');  
  }  
}  

// Add event listener to check on scroll and resize  
window.addEventListener('scroll', animateQuotes);  
window.addEventListener('resize', animateQuotes);  

// Initial check to animate if already in the viewport  
window.onload = animateQuotes;

// Function to toggle the dropdown menu  
function myFunction() {  
  document.getElementById("myDropdown").classList.toggle("show");  
}  

// Close the dropdown if the user clicks outside of it  
window.onclick = function(event) {  
  if (!event.target.matches('.dropbtn')) {  
      var dropdowns = document.getElementsByClassName("dropdown-content");  
      for (var i = 0; i < dropdowns.length; i++) {  
          var openDropdown = dropdowns[i];  
          if (openDropdown.classList.contains('show')) {  
              openDropdown.classList.remove('show');  
          }  
      }  
  }  
}  

// CSS for dropdown display when toggled  
const style = document.createElement('style');  
style.innerHTML = `  
.dropdown-content.show {  
    display: block;  
}  
`;  
document.head.appendChild(style);