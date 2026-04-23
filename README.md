# The Quiz - Interactive Quiz Website

A beautiful, interactive single-page application (SPA) built with React and Tailwind CSS. This is a playful quiz experience that culminates in a personalized message.

## Features

✨ **Beautiful Design**
- Responsive mobile-first design
- Smooth animations with Framer Motion
- Gradient backgrounds and modern UI with Tailwind CSS

🎮 **Interactive Gameplay**
- 6 engaging multiple-choice questions
- Progress bar showing completion percentage
- Playful "flee button" mechanic on one question
- Smooth transitions between stages

🎉 **Finale Experience**
- Personalized message with confetti animation
- Floating hearts and celebratory elements
- Ability to retake the quiz

## Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **Vite** - Fast build tool

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Landing.tsx      # Welcome screen
│   ├── Quiz.tsx         # Quiz questions with flee button logic
│   ├── Finale.tsx       # Final celebration screen
│   └── Confetti.tsx     # Confetti animation component
├── App.tsx              # Main app component
├── main.tsx             # Entry point
└── index.css            # Global styles with Tailwind
```

## Customization

### Change the Name

Edit `src/components/Finale.tsx` and update:
```typescript
const herName = 'Milena' // Change this to the desired name
```

### Modify Quiz Questions

Edit the `QUESTIONS` array in `src/components/Quiz.tsx`:
- Add or remove questions
- Change question text
- Modify answer options
- Add more questions with the `hasFleeButton` mechanic

### Customize Colors

Edit `tailwind.config.js` to change the color scheme.

### Final Message

Update the message in `src/components/Finale.tsx`:
```typescript
<p className="text-gray-700 text-lg mb-8 leading-relaxed">
  Your custom message here...
</p>
```

## Features Breakdown

### Landing Page
- Animated heart icon
- Call-to-action button
- Floating decorative elements

### Quiz
- Progress bar
- Multiple choice options
- Special "flee button" on question 2 that moves away from cursor
- Smooth question transitions

### Finale
- Personalized greeting
- Confetti falling animation
- Floating hearts
- Restart button

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

MIT

## Author

Created with ❤️ for a special someone
