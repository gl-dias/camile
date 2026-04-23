# Copilot Instructions - The Quiz Project

## Project Overview

This is an interactive single-page application (SPA) quiz website built with React, TypeScript, Tailwind CSS, and Framer Motion. It's a playful quiz experience with smooth animations and a personalized finale.

## Project Structure

```
src/
├── components/
│   ├── Landing.tsx          # Welcome screen with call-to-action
│   ├── Quiz.tsx             # 6 quiz questions with flee button mechanic
│   ├── Finale.tsx           # Celebration screen with confetti
│   └── Confetti.tsx         # Confetti animation component
├── App.tsx                  # Main app state management
├── main.tsx                 # React app entry point
└── index.css                # Global Tailwind styles
```

## Key Features

1. **Landing Page** - Animated welcome with heart icon
2. **Quiz** - 6 multiple-choice questions with:
   - Progress bar
   - Smooth transitions
   - Special "flee button" on question 2 that moves away from cursor
3. **Finale** - Personalized message with:
   - Confetti animation
   - Floating hearts
   - Option to restart

## Customization Guide

### Change the Recipient's Name

Edit `src/components/Finale.tsx` line 11:
```typescript
const herName = 'Milena' // Change this value
```

### Modify Quiz Questions

Edit the `QUESTIONS` array in `src/components/Quiz.tsx` (lines 29-81):
- Each question object has: id, text, options
- Optional: `hasFleeButton` and `fleeButtonIndex` for the special button

### Change Final Message

Edit `src/components/Finale.tsx` lines 58-62 to customize the farewell message.

### Adjust Colors

Edit `tailwind.config.js` color theme to change the rose/pink/red gradient color scheme.

## Running the Project

- **Dev Server:** `npm run dev` (runs on http://localhost:5173/)
- **Build:** `npm run build`
- **Preview:** `npm run preview`

## Technologies Used

- React 18 - UI framework
- TypeScript - Type safety
- Tailwind CSS - Styling
- Framer Motion - Smooth animations
- Lucide React - Icons
- Vite - Lightning-fast build tool

## Development Notes

- Mobile-first responsive design
- All animations use Framer Motion
- Quiz state managed with React useState
- Component-based architecture for easy modifications
- No external database - completely client-side

## File Editing Rules

When implementing changes:
1. Maintain TypeScript types throughout
2. Keep Tailwind classes for styling (no inline styles)
3. Use Framer Motion for all animations
4. Preserve existing component structure
5. Test on mobile viewport (this is primarily mobile-first)
