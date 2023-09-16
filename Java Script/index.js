
// Get references to the button and target div
const scrollButton = document.getElementById('gotocontactbtn');

const targetDiv = document.getElementById('contactdivform');

// Add a click event listener to the button
scrollButton.addEventListener('click', () => {
  // Scroll to the targetDiv with smooth behavior
  targetDiv.scrollIntoView({ behavior: 'smooth' });
});


// Get the elements
const clickableDiv = document.querySelector('.movetonextpage');
const dropdownContent = document.querySelector('.dropdowndiv');

// Add event listeners
clickableDiv.addEventListener('click', () => {
  window.location.href = clickableDiv.querySelector('a').getAttribute('href');
});

clickableDiv.addEventListener('mouseenter', () => {
  dropdownContent.style.display = 'block';
});
function dropdownclosed() {
  dropdownContent.style.display = 'none';
 }
setTimeout(dropdownclosed,"100000");
clickableDiv.addEventListener('mouseleave',dropdownclosed );


