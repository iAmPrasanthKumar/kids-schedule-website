// Import activities data
import activitiesData from '../config/activities.js';

// Track last shown suggestions to avoid repeats
let lastShownSuggestions = new Map();

// Get random suggestion from suggestions array (avoiding repeats)
function getRandomSuggestion(suggestionsArray, activityLabel = '') {
  if (!Array.isArray(suggestionsArray) || suggestionsArray.length === 0) {
    return {
      title: "No suggestions available",
      procedure: ["Please check back later"],
      benefits: "Framework ready for suggestions"
    };
  }
  
  // If only one suggestion available, return it
  if (suggestionsArray.length === 1) {
    return suggestionsArray[0];
  }
  
  // Get the last shown suggestion for this activity
  const lastSuggestion = lastShownSuggestions.get(activityLabel);
  
  // Filter out the last shown suggestion
  let availableSuggestions = suggestionsArray;
  if (lastSuggestion) {
    availableSuggestions = suggestionsArray.filter(s => s.title !== lastSuggestion.title);
  }
  
  // If we filtered out everything, reset and use all suggestions
  if (availableSuggestions.length === 0) {
    availableSuggestions = suggestionsArray;
  }
  
  // Pick random suggestion from available ones
  const randomIndex = Math.floor(Math.random() * availableSuggestions.length);
  const selectedSuggestion = availableSuggestions[randomIndex];
  
  // Remember this suggestion for next time
  lastShownSuggestions.set(activityLabel, selectedSuggestion);
  
  return selectedSuggestion;
}

// Show activity details - responsive (modal on desktop, fullpage on mobile)
function showActivityModal(activity, suggestion = null) {
  console.log('showActivityModal called for:', activity.label, 'with suggestion:', !!suggestion);
  const scheduledTime = `${activity.startTime} - ${activity.endTime}`;
  
  const isMobile = window.innerWidth <= 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
  const modal = document.createElement('div');
  modal.className = isMobile ? 'activity-fullpage' : 'activity-modal';
  modal.innerHTML = `
    <div class="${isMobile ? 'fullpage-content' : 'modal-content'}">
      <div class="${isMobile ? 'fullpage-header' : 'modal-header'}">
        <h2>${activity.aiEnabled ? '🤖' : '📅'} ${activity.label}</h2>
        ${isMobile ? '' : '<button class="close-btn" onclick="closeActivityView(this)">×</button>'}
      </div>
      <div class="${isMobile ? 'fullpage-body' : 'modal-body'}">
        <div class="activity-details">
          <div class="activity-description">${activity.description}</div>
          <div class="activity-time">
            <span class="duration">⏱️ ${scheduledTime}</span>
          </div>
        </div>
        
        ${suggestion ? `
          <div class="ai-suggestion-section">
            <h3>🤖 AI Suggestion: ${suggestion.title}</h3>
            <div class="suggestion-meta">
              <span class="difficulty">📊 ${suggestion.difficulty}</span>
              ${suggestion.category ? `<span class="category">🎯 ${suggestion.category}</span>` : ''}
            </div>
            <div class="procedure">
              <h4>How to do it:</h4>
              <ol>
                ${suggestion.procedure.map(step => `<li>${step}</li>`).join('')}
              </ol>
            </div>
            <div class="benefits">
              <h4>Benefits:</h4>
              <p>${suggestion.benefits}</p>
            </div>
            ${suggestion.materials || suggestion.equipment ? `
              <div class="materials">
                <h4>What you need:</h4>
                <p>${suggestion.materials || suggestion.equipment}</p>
              </div>
            ` : ''}
          </div>
        ` : ''}
      </div>
      <div class="${isMobile ? 'fullpage-footer' : 'modal-footer'}">
        <button class="btn-primary" onclick="closeActivityView(this)">${isMobile ? 'Back To Schedule' : 'Got it!'}</button>
        ${activity.aiEnabled ? `
          ${suggestion ? 
            `<button class="btn-secondary" onclick="getAnotherSuggestion(this, '${activity.label}')">Get Another Suggestion</button>` :
            `<button class="btn-secondary" onclick="getAISuggestion(this, '${activity.label}')">Get AI Suggestion</button>`
          }
        ` : ''}
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  
  // Add swipe-to-close for mobile
  if (isMobile) {
    addSwipeToClose(modal);
  }
}

// Show AI suggestion (legacy function for compatibility)
function showSuggestionModal(suggestion, activityLabel) {
  const activity = activitiesData.find(act => act.label === activityLabel);
  showActivityModal(activity, suggestion);
}

// Debug: Make sure functions are accessible
console.log('Script loaded, setting up global functions');

// Get another suggestion without closing the modal
window.getAnotherSuggestion = function(button, activityLabel) {
  console.log('getAnotherSuggestion called for:', activityLabel);
  // Find the activity that matches this label
  const activity = activitiesData.find(act => act.label === activityLabel && act.aiEnabled);
  
  if (activity && activity.aiSuggestions) {
    const newSuggestion = getRandomSuggestion(activity.aiSuggestions, activityLabel);
    
    // Find the modal content elements and update them
    const modal = button.closest('.activity-modal') || button.closest('.activity-fullpage') || button.closest('.suggestion-modal');
    const modalBody = modal.querySelector('.modal-body') || modal.querySelector('.fullpage-body');
    
    // Get scheduled time for this activity
    const scheduledTime = `${activity.startTime} - ${activity.endTime}`;
    
    // Update just the AI suggestion section with new suggestion
    const aiSection = modal.querySelector('.ai-suggestion-section');
    if (aiSection) {
      aiSection.innerHTML = `
        <h3>🤖 AI Suggestion: ${newSuggestion.title}</h3>
        <div class="suggestion-meta">
          <span class="difficulty">📊 ${newSuggestion.difficulty}</span>
          ${newSuggestion.category ? `<span class="category">🎯 ${newSuggestion.category}</span>` : ''}
        </div>
        <div class="procedure">
          <h4>How to do it:</h4>
          <ol>
            ${newSuggestion.procedure.map(step => `<li>${step}</li>`).join('')}
          </ol>
        </div>
        <div class="benefits">
          <h4>Benefits:</h4>
          <p>${newSuggestion.benefits}</p>
        </div>
        ${newSuggestion.materials || newSuggestion.equipment ? `
          <div class="materials">
            <h4>What you need:</h4>
            <p>${newSuggestion.materials || newSuggestion.equipment}</p>
          </div>
        ` : ''}
      `;
    }
  }
}

// Get AI suggestion from modal button
window.getAISuggestion = function(button, activityLabel) {
  console.log('getAISuggestion called for:', activityLabel);
  const activity = activitiesData.find(act => act.label === activityLabel && act.aiEnabled);
  
  if (activity && activity.aiSuggestions) {
    const suggestion = getRandomSuggestion(activity.aiSuggestions, activityLabel);
    
    // Close current modal and open with suggestion
    const currentModal = button.closest('.activity-modal') || button.closest('.activity-fullpage');
    if (currentModal) {
      currentModal.remove();
    }
    showActivityModal(activity, suggestion);
  }
}

// Close activity view (works for both modal and fullpage)
window.closeActivityView = function(button) {
  const view = button.closest('.activity-modal') || button.closest('.activity-fullpage');
  if (view) {
    view.remove();
  }
}

// Add swipe-to-close functionality for mobile
function addSwipeToClose(element) {
  let startY = 0;
  let startX = 0;
  
  element.addEventListener('touchstart', (e) => {
    startY = e.touches[0].clientY;
    startX = e.touches[0].clientX;
  });
  
  element.addEventListener('touchmove', (e) => {
    const currentY = e.touches[0].clientY;
    const currentX = e.touches[0].clientX;
    const diffY = currentY - startY;
    const diffX = Math.abs(currentX - startX);
    
    // If swiping down more than 100px and not much horizontal movement
    if (diffY > 100 && diffX < 50) {
      element.style.transform = `translateY(${diffY - 100}px)`;
      element.style.opacity = Math.max(0.3, 1 - (diffY - 100) / 200);
    }
  });
  
  element.addEventListener('touchend', (e) => {
    const endY = e.changedTouches[0].clientY;
    const diffY = endY - startY;
    
    if (diffY > 150) {
      // Swipe down far enough - close
      element.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
      element.style.transform = 'translateY(100vh)';
      element.style.opacity = '0';
      setTimeout(() => element.remove(), 300);
    } else {
      // Snap back
      element.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
      element.style.transform = 'translateY(0)';
      element.style.opacity = '1';
    }
  });
}


function timeToMinutes(timeStr) {
  const [hours, minutes] = timeStr.split(':').map(Number);
  return hours * 60 + minutes;
}

function minutesToPixels(minutes, baseTime = "6:00") {
  const baseMinutes = timeToMinutes(baseTime);
  let relativeMinutes = minutes - baseMinutes;
  
  // Handle times before 6:00 AM (like 5:30 AM) - position them in evening section
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
    
    // Check if this is an overnight activity
    if (endMinutes < startMinutes) {
      // Overnight activity - single stretch from start to end
      const timelineEndMinutes = timeToMinutes("6:00") + 24 * 60; // 6 AM next day (end of timeline)
      const actualEndMinutes = endMinutes + 24 * 60; // Add 24 hours to end time
      
      // Check if the activity extends beyond our timeline (past 6 AM)
      if (actualEndMinutes > timelineEndMinutes) {
        // Activity crosses 6 AM boundary - split into two blocks
        
        // Block 1: From start time to end of timeline (6 AM)
        createActivityBlock(activity, startMinutes, timelineEndMinutes, eventsColumn);
        
        // Block 2: From start of timeline (6 AM) to actual end time
        createActivityBlock(activity, timeToMinutes("6:00"), endMinutes, eventsColumn);
        
      } else {
        // Activity ends before 6 AM - single block
        createActivityBlock(activity, startMinutes, actualEndMinutes, eventsColumn);
      }
      
    } else {
      // Normal activity - single block
      createActivityBlock(activity, startMinutes, endMinutes, eventsColumn);
    }
  });
}

// Helper function to create individual activity blocks
function createActivityBlock(activity, startMinutes, endMinutes, eventsColumn) {
  const topPosition = minutesToPixels(startMinutes);
  const height = endMinutes - startMinutes;
  
  // Create activity element
  const activityDiv = document.createElement('div');
  activityDiv.className = 'activity';
  
  // Make all activities clickable for details
  activityDiv.style.cursor = 'pointer';
  
  if (activity.aiEnabled) {
    activityDiv.classList.add('ai-enabled');
    activityDiv.innerHTML = `${activity.label} <span class="suggestion-link">Get AI Suggestion</span>`;
    
    // Handle clicks on AI activities
    activityDiv.addEventListener('click', (e) => {
      console.log('AI activity clicked:', activity.label, 'target:', e.target.className);
      if (e.target.classList.contains('suggestion-link')) {
        // Clicked "Get AI Suggestion" - show modal with suggestion
        e.stopPropagation();
        console.log('Getting AI suggestion for:', activity.label);
        const suggestion = getRandomSuggestion(activity.aiSuggestions, activity.label);
        showActivityModal(activity, suggestion);
      } else {
        // Clicked elsewhere - show activity details only
        console.log('Showing activity details for:', activity.label);
        showActivityModal(activity);
      }
    });
  } else {
    activityDiv.textContent = activity.label;
    
    // Handle clicks on regular activities - show details only
    activityDiv.addEventListener('click', () => {
      console.log('Regular activity clicked:', activity.label);
      showActivityModal(activity);
    });
  }
  
  activityDiv.style.top = `${topPosition}px`;
  activityDiv.style.height = `${height}px`;
  activityDiv.style.background = activity.color;
  
  // Set text color if specified
  if (activity.textColor) {
    activityDiv.style.color = activity.textColor;
    activityDiv.style.textShadow = 'none';
  }
  
  eventsColumn.appendChild(activityDiv);
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
  // Activities data is now loaded from activities.js automatically
  createActivities();
  updateCurrentTime();
  setInterval(updateCurrentTime, 60000); // Update every minute
}

// Start the application
init();
