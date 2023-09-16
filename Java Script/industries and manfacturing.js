const scrollButton2 = document.getElementById('getaconsultation');
const scrollButton1 = document.getElementById('getaconsultation2');
const targetDiv2= document.getElementById('contactdivform');
scrollButton2.addEventListener('click', () => {
    // Scroll to the targetDiv with smooth behavior
    targetDiv2.scrollIntoView({ behavior: 'smooth' });
  });
  scrollButton1.addEventListener('click', () => {
    // Scroll to the targetDiv with smooth behavior
    targetDiv2.scrollIntoView({ behavior: 'smooth' });
  });