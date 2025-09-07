// Kids Daily Schedule Activities Configuration
import morningPhysicalActivities from './pregeneratedAISuggestions/morning-physical-activities.js';
import eveningPhysicalActivities from './pregeneratedAISuggestions/evening-physical-activities.js';
import morningBrainGames from './pregeneratedAISuggestions/morning-brain-games.js';
import eveningBrainGames from './pregeneratedAISuggestions/evening-brain-games.js';
import bedtimeStories from './pregeneratedAISuggestions/bedtimeStories.js';

const activitiesData = [
  {
    "startTime": "6:30",
    "endTime": "7:00",
    "label": "Wake Up And Brush",
    "color": "#4CAF50",
    "description": "Morning routine: wake up gently, brush teeth, and prepare for the day"
  },
  {
    "startTime": "7:00",
    "endTime": "7:30",
    "label": "Exercise",
    "color": "#4CAF50",
    "description": "Morning physical activity to energize the body and boost metabolism for the day",
    "aiSuggestions": morningPhysicalActivities,
    "aiEnabled": true
  },
  {
    "startTime": "7:30",
    "endTime": "8:30",
    "label": "Bath And Breakfast",
    "color": "#FF9800",
    "description": "Personal hygiene and nutritious breakfast to fuel the body and mind for school"
  },
  {
    "startTime": "8:30",
    "endTime": "8:45",
    "label": "Brain Game",
    "color": "#2196F3",
    "description": "Short cognitive exercise to activate the mind and prepare for learning at school",
    "aiSuggestions": morningBrainGames,
    "aiEnabled": true
  },
  {
    "startTime": "8:45",
    "endTime": "9:00",
    "label": "Relax",
    "color": "#FFEB3B",
    "textColor": "#333",
    "description": "Brief relaxation period to transition calmly from home activities to school preparation"
  },
  {
    "startTime": "9:00",
    "endTime": "9:30",
    "label": "Travel To School",
    "color": "#9E9E9E",
    "description": "Commute time to school - can include walking, car ride, or bus journey"
  },
  {
    "startTime": "9:30",
    "endTime": "17:00",
    "label": "Attend School",
    "color": "#9C27B0",
    "description": "Full school day including classes, lunch, recess, and learning activities"
  },
  {
    "startTime": "17:00",
    "endTime": "17:30",
    "label": "Have Snack",
    "color": "#4CAF50",
    "description": "Healthy after-school snack to refuel energy after a long day of learning"
  },
  {
    "startTime": "17:30",
    "endTime": "18:00",
    "label": "Play Physical Game",
    "color": "#4CAF50",
    "description": "Evening physical activity to release energy and transition from school to home mode",
    "aiSuggestions": eveningPhysicalActivities,
    "aiEnabled": true
  },
  {
    "startTime": "18:00",
    "endTime": "19:30",
    "label": "Bath And Dinner",
    "color": "#FF9800",
    "description": "Evening hygiene routine and family dinner time for nutrition and bonding"
  },
  {
    "startTime": "19:30",
    "endTime": "20:00",
    "label": "Brain Game",
    "color": "#2196F3",
    "description": "Evening cognitive activity to wind down while keeping the mind gently engaged",
    "aiSuggestions": eveningBrainGames,
    "aiEnabled": true
  },
  {
    "startTime": "20:00",
    "endTime": "20:30",
    "label": "Bedtime Stories",
    "color": "purple",
    "description": "Calming story time to relax the mind and prepare for peaceful sleep",
    "aiSuggestions": bedtimeStories,
    "aiEnabled": true
  },
  {
    "startTime": "20:30",
    "endTime": "6:30",
    "label": "Sleep",
    "color": "#607D8B",
    "description": "Main sleep period - 9 hours of restorative rest for growth and brain development"
  }
];

// Export for use in other files
export default activitiesData;
