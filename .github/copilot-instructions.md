# Vue.js 3 Project with Design System

## Setup Progress

- [x] Create .github directory
- [x] Scaffold the Project with Vite & Vue 3 TypeScript
- [x] Install dependencies
- [x] Add Tailwind CSS & design system
- [x] Create design system components
- [x] Setup development server
- [x] Configure project structure
- [x] Finalize documentation

## Project Details
- **Framework**: Vue.js 3
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Focus**: Modern design system with reusable components

## Development Server

The development server is running at: `http://localhost:5174`

### Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run type-check` - Type check with TypeScript

### Key Features Implemented

✨ **Design System Components**:
- Button (4 variants: primary, secondary, outline, ghost)
- Card (with color accents)
- Input (form control with variants)
- Badge (for labels and tags)
- Header & Footer (layout components)
- Hero & ComponentsShowcase sections

🎨 **Design Tokens**:
- Primary color palette (sky blue)
- Secondary color palette (slate gray)
- Spacing scale (4xs to 3xl)
- Typography system
- Border radius utilities

📁 **Project Structure**:
```
src/
├── components/
│   ├── Button.vue, Card.vue, Input.vue, Badge.vue
│   ├── layout/ (Header, Footer)
│   └── sections/ (Hero, ComponentsShowcase)
├── styles/main.css
├── App.vue
└── main.ts
```
