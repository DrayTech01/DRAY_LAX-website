
document.getElementById('advisingRequestForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const studentName = document.getElementById('studentName').value;
    const studentID = document.getElementById('studentID').value;
    const advisor = document.getElementById('advisor').value;
    const message = document.getElementById('message').value;
    
    const requestItem = document.createElement('li');
    requestItem.textContent = `Name: ${studentName}, ID: ${studentID}, Advisor: ${advisor}, Message: ${message}`;
    
    document.getElementById('requestsList').appendChild(requestItem);
    
    document.getElementById('advisingRequestForm').reset();
});
