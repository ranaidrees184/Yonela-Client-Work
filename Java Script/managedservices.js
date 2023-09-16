const scrollButton2 = document.getElementById('scheduleafreecontc');
const targetDiv2= document.getElementById('managedservicescontactdivform');
scrollButton2.addEventListener('click', () => {
    // Scroll to the targetDiv with smooth behavior
    targetDiv2.scrollIntoView({ behavior: 'smooth' });
  });