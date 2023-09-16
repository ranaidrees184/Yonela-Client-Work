const scrollButton2 = document.getElementById('letstalkbtn');
const targetDiv2= document.getElementById('contactform');
scrollButton2.addEventListener('click', () => {
    // Scroll to the targetDiv with smooth behavior
    targetDiv2.scrollIntoView({ behavior: 'smooth' });
  });