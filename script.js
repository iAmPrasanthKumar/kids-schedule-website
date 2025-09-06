let activitiesData = [];
let brainGamesData = [];

// Load activities from JSON file
async function loadActivities() {
  try {
    const response = await fetch('activities.json');
    activitiesData = await response.json();
    createActivities();
  } catch (error) {
    console.error('Error loading activities:', error);
  }
}

// Load brain games from JSON file
async function loadBrainGames() {
  try {
    const response = await fetch('brain-games.json');
    brainGamesData = await response.json();
  } catch (error) {
    console.error('Error loading brain games:', error);
  }
}

// Get random brain game suggestion
function getRandomBrainGame() {
  if (brainGamesData.length === 0) return "Practice counting or simple puzzles";
  
  const randomCategory = brainGamesData[Math.floor(Math.random() * brainGamesData.length)];
  const randomGame = randomCategory.games[Math.floor(Math.random() * randomCategory.games.length)];
  
  return `${randomCategory.category}: ${randomGame}`;
}


function timeToMinutes(timeStr) {
  const [hours, minutes] = timeStr.split(':').map(Number);
  return hours * 60 + minutes;
}

function minutesToPixels(minutes, baseTime = "6:00") {
  const baseMinutes = timeToMinutes(baseTime);
  let relativeMinutes = minutes - baseMinutes;
  
  // Handle overnight activities (like sleep from 20:30 to 6:00)
  if (relativeMinutes < 0) {
    relativeMinutes += 24 * 60; // Add 24 hours
  }
  
  return relativeMinutes; // 1 minute = 1 pixel
}

function createActivities() {
  const eventsColumn = document.querySelector('.events-column');
  
  // Clear existing activities (keep current time indicator)
  const currentTimeIndicator = eventsColumn.querySelector('.current-time-line');
  eventsColumn.innerHTML = '';
  if (currentTimeIndicator) {
    eventsColumn.appendChild(currentTimeIndicator);
  }
  
  activitiesData.forEach(activity => {
    const startMinutes = timeToMinutes(activity.startTime);
    const endMinutes = timeToMinutes(activity.endTime);
    
    const topPosition = minutesToPixels(startMinutes);
    let height;
    
    // Calculate height - handle overnight activities
    if (endMinutes < startMinutes) {
      // Overnight activity: add 24 hours to end time
      height = (endMinutes + 24 * 60) - startMinutes;
    } else {
      height = endMinutes - startMinutes;
    }
    
    // Create activity element
    const activityDiv = document.createElement('div');
    activityDiv.className = 'activity';
    activityDiv.textContent = activity.label;
    activityDiv.style.top = `${topPosition}px`;
    activityDiv.style.height = `${height}px`;
    activityDiv.style.background = activity.color;
    
    // Set text color if specified
    if (activity.textColor) {
      activityDiv.style.color = activity.textColor;
      activityDiv.style.textShadow = 'none';
    }
    
    // Add click functionality for brain games
    if (activity.label.toLowerCase().includes('brain game')) {
      activityDiv.style.cursor = 'pointer';
      activityDiv.title = 'Click for game suggestion!';
      activityDiv.addEventListener('click', () => {
        const suggestion = getRandomBrainGame();
        alert(`🧠 Brain Game Suggestion:\n\n${suggestion}`);
      });
    }
    
    eventsColumn.appendChild(activityDiv);
  });
}

function updateCurrentTime() {
  const now = new Date();
  const currentHours = now.getHours();
  const currentMinutes = now.getMinutes();
  
  // Show indicator always - calculate position for 24-hour cycle
  let hoursSince6AM = currentHours - 6;
  
  // Handle times before 6 AM (early morning sleep period)
  if (currentHours < 6) {
    hoursSince6AM = currentHours + 18; // 18 hours after 6 AM previous day
  }
  
  const totalMinutes = hoursSince6AM * 60 + currentMinutes;
  const pixelsFromTop = totalMinutes; // 1 minute = 1 pixel
  
  const currentTimeLine = document.getElementById('currentTimeLine');
  if (currentTimeLine) {
    currentTimeLine.style.top = `${pixelsFromTop}px`;
    currentTimeLine.style.display = 'block';
    
    // Auto-scroll to current time on page load
    if (!window.hasScrolledToCurrentTime) {
      currentTimeLine.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' 
      });
      window.hasScrolledToCurrentTime = true;
    }
  }
}

// Initialize the schedule
async function init() {
  await loadActivities();
  await loadBrainGames();
  updateCurrentTime();
  setInterval(updateCurrentTime, 60000); // Update every minute
}

// Start the application
init();
