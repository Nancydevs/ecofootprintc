function toggleMenu() {
  var navbar = document.getElementById("navbar");
  navbar.classList.toggle("open");
}

document.getElementById('ecoForm').addEventListener('submit', function(e) {
  e.preventDefault();

  let totalPoints = 0;

  // Iterate through all select inputs to get total eco-points
  const selects = document.querySelectorAll('select');
  selects.forEach(select => {
      totalPoints += parseInt(select.value);
  });

  // Store the calculated value in localStorage
  localStorage.setItem('ecoFootprint', totalPoints);

  // Redirect the user to the results page
  window.location.href = 'result.html';
});
