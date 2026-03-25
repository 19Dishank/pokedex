# 1. Project Name
**Pokédex**

---

# 2. Abstract
Pokédex is an interactive React application that displays comprehensive Pokémon data fetched from the PokéAPI. The app renders a responsive grid of 500 Pokémon with detailed statistics including height, weight, attack power, speed, types, and abilities. Users can search for specific Pokémon in real-time through a dynamic search bar. The application demonstrates efficient API integration using Promise.all() for parallel data fetching, clean component architecture with reusable React hooks, and modern UI design with Tailwind CSS styling, including custom animations and hover effects for enhanced user experience.

---

# 3. Key Features
- **Search Functionality**: Real-time search filter to find Pokémon by name across 500+ entries
- **Detailed Pokémon Cards**: Display Pokémon sprites, official artwork, name, type badges, and stats (height, weight, speed, attack)
- **Abilities Display**: Show all abilities for each Pokémon
- **Responsive Grid Layout**: Adaptive grid that adjusts from 1 column on mobile to 4 columns on XL screens
- **Custom Loading Animation**: Animated Pokéball loader with progress bar and status message during data fetching
- **Interactive Hover Effects**: Card elevation and scale animations on hover using CSS transforms
- **Blob Shape Background**: Organic blob animation on card backgrounds with color gradients
- **Type Badging System**: Color-coded type tags for each Pokémon

---

# 4. Tech Stack
- **Framework**: React 19.2.0
- **Build Tool**: Vite 7.2.4 (with @vitejs/plugin-react)
- **Styling**: Tailwind CSS 4.1.18 (@tailwindcss/vite for bundling)
- **State Management**: React Hooks (useState, useEffect)
- **API Handling**: Fetch API (native browser fetch)
- **Data Fetching**: Promise.all() for parallel HTTP requests
- **Responsive Design**: Tailwind CSS responsive utilities (grid-cols, sm/lg/xl breakpoints)
- **Animations**: CSS animations and transitions (animate-bounce, animate-pulse, custom keyframes)
- **Code Quality**: ESLint with React plugin ecosystem
- **Package Manager**: npm (Node.js module)

---

# 5. APIs / External Resources Used
- **PokéAPI** - https://pokeapi.co/api/v2/pokemon/?limit=500
  - Provides comprehensive Pokémon data including stats, sprites, abilities, and types
  - Individual Pokémon detail endpoints accessed via results.url for full data enrichment

---

# 6. Authentication / Authorization
**Not Implemented** - This is a public data display application with no login system, protected routes, or token-based authentication.

---

# 7. Performance Optimizations
- **Parallel Data Fetching**: Uses `Promise.all()` to fetch 500+ Pokémon details concurrently instead of sequentially (major performance improvement)
- **Client-Side Filtering**: Real-time search implemented with `.filter()` and `.toLowerCase()` for instant results without requesting new data
- **Lazy Image Loading**: Pokémon sprites loaded via standard `<img>` tags with fallback (dream_world sprite prioritized over front_default)
- **CSS-Based Animations**: Hardware-accelerated CSS transforms and animations (no JavaScript animation libraries)
- **Responsive Images**: Single sprite image displayed at multiple breakpoints with scaled dimensions
- **Memoized Components**: Reusable `<Stat>` component prevents redundant rendering of stats

---

# 8. Project Architecture
```
src/
├── App.jsx              (Root component - renders PokeCard)
├── components/
│   ├── PokeCard.jsx     (Search header + grid layout orchestrator)
│   └── PokeItem.jsx     (Data fetching, card rendering, Stat sub-component)
├── index.css            (Tailwind imports + custom blob clip-path)
├── App.css              (Empty placeholder)
└── main.jsx             (React DOM mount point)
```

**Component Structure**:
- **App.jsx**: Entry point, minimal wrapper
- **PokeCard.jsx**: Manages search state, renders header with search input, and grid container
- **PokeItem.jsx**: Handles API calls via useEffect, manages pokemon/loading/error state, maps data to cards, includes Stat sub-component for individual metrics
- **Stat Component**: Pure functional component for displaying metric labels and values

**Data Flow**: App → PokeCard (search state) → PokeItem (API fetch + filtered display)

---

# 9. Deployment URL
https://pokedex-puce-two-79.vercel.app/

---

# 10. GitHub Repository URL
https://github.com/19Dishank/pokedex
