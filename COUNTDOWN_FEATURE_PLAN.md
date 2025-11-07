# Romantic Countdown Button - Development Plan

## Feature Overview
Create an elegant, romantic countdown button that reveals a beautiful real-time countdown timer showing the time remaining until April 1, 2026 - the day they will meet.

## Design Requirements

### Visual Design
1. **Button Style:**
   - Elegant, romantic appearance matching the site's aesthetic
   - Gradient background using existing color palette (rose/mauve)
   - Soft shadows and hover effects
   - Smooth animations and transitions
   - Heart or romantic iconography
   - Glassmorphism or elegant card effect

2. **Countdown Display Modal:**
   - Beautiful, centered modal overlay
   - Romantic background with subtle animations
   - Large, readable countdown numbers
   - Display format: Days, Hours, Minutes, Seconds
   - "We will meet on 1 April 2026" text prominently displayed
   - Elegant typography matching site fonts
   - Smooth entrance/exit animations
   - Close button with romantic styling

### Functionality Requirements
1. **Countdown Logic:**
   - Target date: April 1, 2026, 00:00:00 (midnight)
   - Real-time updates every second
   - Calculate: Days, Hours, Minutes, Seconds remaining
   - Handle timezone considerations
   - Graceful handling when date is reached

2. **User Experience:**
   - Button click opens countdown modal
   - Smooth modal animations
   - Real-time countdown updates visible
   - Close button or click outside to close
   - ESC key to close
   - Mobile responsive design
   - Accessible (ARIA labels, keyboard navigation)

### Technical Implementation
1. **HTML:**
   - Add countdown button in appropriate section (likely after closing section or in hero)
   - Create modal structure with countdown display
   - Semantic HTML with proper ARIA attributes

2. **CSS:**
   - Match existing design system (colors, fonts, spacing)
   - Create elegant button styles with hover/active states
   - Design beautiful modal with backdrop
   - Animate countdown numbers with subtle effects
   - Responsive design for all screen sizes
   - Add romantic visual elements (hearts, sparkles, etc.)

3. **JavaScript:**
   - Calculate time difference to target date
   - Update countdown every second
   - Format time display (days, hours, minutes, seconds)
   - Modal open/close functionality
   - Handle edge cases (past date, timezone)
   - Performance optimization (efficient updates)

## Placement
- Option 1: Add button in the closing section, near the "Click here, Betu" button
- Option 2: Add button in hero section
- Option 3: Add as a floating button

**Recommended:** Add in closing section for thematic consistency

## Color Scheme
- Use existing palette: `--accent-rose`, `--accent-mauve`
- White/ivory backgrounds
- Soft shadows and gradients
- Romantic pink/rose tones

## Typography
- Use existing fonts: `Playfair Display` for headings, `Dancing Script` for romantic text
- Large, readable numbers for countdown
- Elegant, romantic messaging

## Animation Ideas
- Button: Gentle pulse, glow effect, heart animation
- Modal: Fade in with scale, romantic particles
- Countdown: Subtle number transitions, heartbeat effect
- Background: Soft romantic particles or sparkles

## Accessibility
- Proper ARIA labels
- Keyboard navigation support
- Screen reader announcements
- Focus management
- Reduced motion support

