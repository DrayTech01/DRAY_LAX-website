document.getElementById('contactLink').addEventListener('click', function() {
    var contactSection = document.getElementById('contactSection');
    if (contactSection.style.display === 'none' || contactSection.style.display === '') {
      contactSection.style.display = 'block';
    } else {
      contactSection.style.display = 'none';
    }
  });
  