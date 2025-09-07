# Kids Schedule Website

A beautiful, interactive daily schedule visualization for kids with AI-powered activity suggestions. This website displays a 24-hour timeline with color-coded activities and intelligent suggestions for brain games and physical activities.

## ✨ Features

- **Visual Timeline**: 24-hour schedule starting from 6:00 AM
- **Color-coded Activities**: Each activity type has its own color for easy recognition
- **Current Time Indicator**: Red line shows the current time and auto-scrolls to it
- **AI Activity Suggestions**: Click 🤖 icons for detailed activity suggestions
- **Responsive Design**: Works on desktop and mobile devices
- **Modular Architecture**: ES6 modules with clean code structure

## 🤖 AI-Enabled Activities

- **Morning Exercise** (7:00 AM): Physical activities to start the day
- **Morning Brain Game** (8:30 AM): Cognitive exercises for mental stimulation
- **Evening Physical Game** (5:30 PM): Calming physical activities
- **Evening Brain Game** (7:30 PM): Relaxing mental exercises

## 🌐 Live Demo

Visit the live website: [https://prasanth2611.github.io/kids-schedule-website](https://prasanth2611.github.io/kids-schedule-website)

## 🚀 Deployment

This project uses **GitHub Actions** for automated build and deployment:

1. **Automatic Builds**: Every push to `main` triggers a build
2. **Babel Transpilation**: ES6 modules are transpiled for browser compatibility
3. **GitHub Pages**: Automatically deploys to GitHub Pages

### GitHub Pages Setup

1. Go to your repository settings
2. Navigate to "Pages" section
3. Select "GitHub Actions" as the source
4. The workflow will automatically build and deploy on every push

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Development server (builds and serves from dist/)
npm run dev

# Watch mode (auto-rebuild on changes)
npm run build:watch

# Production build
npm run build

# Test production build
npm run test

# Clean build directory
npm run clean
```

## 📁 Project Structure

```
kids-schedule-website/
├── src/
│   └── script.js                   # Main application logic
├── config/
│   ├── activities.js               # Main schedule configuration with imports
│   └── pregeneratedAISuggestions/  # AI suggestion configurations
│       ├── morning-physical-activities.js   # Morning exercise suggestions
│       ├── evening-physical-activities.js   # Evening physical activities
│       ├── morning-brain-games.js           # Morning cognitive exercises
│       └── evening-brain-games.js           # Evening brain games
├── styles.css                      # Styling and animations
├── index.html                      # Main HTML file
├── .github/workflows/deploy.yml    # GitHub Actions workflow
├── package.json                    # Dependencies and scripts
└── dist/                           # Build output (generated)
```

## 🎯 Customizing Activities

The schedule is defined in `config/activities.js` with direct module imports:

```javascript
import morningPhysicalActivities from './pregeneratedAISuggestions/morning-physical-activities.js';

const activitiesData = [
  {
    "startTime": "7:00",
    "endTime": "7:30", 
    "label": "Exercise",
    "color": "#4CAF50",
    "aiSuggestions": morningPhysicalActivities,
    "aiEnabled": true
  }
];
```

## 🔧 Adding New Suggestions

1. Create a new suggestion file in `config/pregeneratedAISuggestions/` (e.g., `new-activities.js`)
2. Export an array with this structure:
```javascript
export default [
  {
    "title": "Activity Name",
    "difficulty": "Easy",
    "category": "Activity Type",
    "procedure": ["Step 1", "Step 2", "Step 3"],
    "benefits": "What this helps with",
    "materials": "What's needed"
  }
];
```
3. Import and reference in `config/activities.js`

## 🛠️ Technologies Used

- **ES6 Modules**: Modern JavaScript module system
- **Babel**: ES6 → ES5 transpilation for browser compatibility
- **GitHub Actions**: Automated CI/CD pipeline
- **CSS Grid & Flexbox**: Responsive layout
- **HTML5 & CSS3**: Modern web standards
- **Vanilla JavaScript**: No framework dependencies

## 📜 License

MIT License - feel free to use this project for your own kids' schedules!
