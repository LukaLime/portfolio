// Function to get and format the current date and time
function updateDateTime() {
  const now = new Date();
  const options = {
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric', 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit'
  };
  const formattedDate = now.toLocaleDateString('en-US', options);
  document.getElementById('currentDate').textContent = formattedDate;
}

// Initialize the date and time
updateDateTime();

// Optionally, update the time every second
setInterval(updateDateTime, 1000);