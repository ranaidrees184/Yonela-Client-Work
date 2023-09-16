const scrollButton2 = document.getElementById('letusknow');
const targetDiv2= document.getElementById('contactdivformindustries');
scrollButton2.addEventListener('click', () => {
    // Scroll to the targetDiv with smooth behavior
    targetDiv2.scrollIntoView({ behavior: 'smooth' });
  });