# Kids Schedule Website

A beautiful, interactive daily schedule visualization for kids. This website displays a 24-hour timeline with color-coded activities, helping children understand their daily routine.

## Features

- **Visual Timeline**: 24-hour schedule starting from 6:00 AM
- **Color-coded Activities**: Each activity type has its own color for easy recognition
- **Current Time Indicator**: Red line shows the current time and auto-scrolls to it
- **Responsive Design**: Works on desktop and mobile devices
- **JSON-based Configuration**: Easy to modify schedule by editing `activities.json`

## Live Demo

Visit the live website: [https://YOUR_USERNAME.github.io/kids-schedule-website](https://YOUR_USERNAME.github.io/kids-schedule-website)

## Local Development

1. Clone the repository
2. Open `index.html` in a web browser
3. Or use a local server like Python's built-in server:
   ```bash
   python3 -m http.server 8000
   ```

## Customizing the Schedule

Edit the `activities.json` file to modify the schedule:

```json
{
  "startTime": "7:00",
  "endTime": "7:30", 
  "label": "Exercise",
  "color": "#4CAF50",
  "textColor": "#333"
}
```

- `startTime` and `endTime`: Use 24-hour format (e.g., "17:00" for 5 PM)
- `color`: Background color in hex format
- `textColor`: Optional text color (defaults to white)

## Technologies Used

- HTML5
- CSS3 (with CSS Grid and Flexbox)
- Vanilla JavaScript
- JSON for data storage
