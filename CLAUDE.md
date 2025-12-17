# CLAUDE.md - AI Assistant Guide for Willoughby Component Library

> **Last Updated**: 2025-12-17
> **Purpose**: This document provides AI assistants with comprehensive context about this codebase's structure, conventions, and development workflows.

---

## Table of Contents
1. [Project Overview](#project-overview)
2. [Directory Structure](#directory-structure)
3. [Technology Stack](#technology-stack)
4. [Component Architecture](#component-architecture)
5. [Styling System](#styling-system)
6. [Development Conventions](#development-conventions)
7. [Common Patterns](#common-patterns)
8. [Git Workflow](#git-workflow)
9. [Guidelines for AI Assistants](#guidelines-for-ai-assistants)

---

## Project Overview

**Willoughby** is a React component library designed for a Gatsby-based static site generator website. The site serves two primary content types:

1. **Travel Blog**: Photography galleries with interactive maps, lightboxes, and location-based content
2. **Recipe Content**: Searchable recipes with custom timers, tagging, and categorization

This is a **component-only repository** - it contains reusable UI components that are imported into a separate Gatsby project. There is no build system or testing infrastructure in this repository.

### Key Characteristics
- Pure React functional components with hooks
- Heavily visual/interactive (galleries, maps, lightboxes)
- Strong theming support (light/dark mode, travel/recipe themes)
- Mobile-first responsive design
- MDX integration for enhanced markdown content

---

## Directory Structure

```
/home/user/willoughby/
├── .git/                          # Git repository
├── .gitignore                     # Only ignores .DS_Store files
├── package.json                   # Minimal - only @fontsource/inter listed
├── node_modules/                  # Dependencies
├── lightbox-components/           # Lightbox sub-components
│   ├── arrow-button.js           # Navigation arrows for lightbox
│   ├── footer.js                 # Caption display in lightbox
│   └── header.js                 # Close button for lightbox
│
└── [Root-level components]        # All main components in root directory
    ├── back-button.js            # Floating back navigation button
    ├── image-callout.js          # Text-image alternating layout
    ├── image-grid.js             # Configurable image grid (1-4 columns)
    ├── layout.js                 # Main layout wrapper with theming
    ├── layout.scss               # Complete styling system (1067 lines)
    ├── lbImage.js                # Experimental/placeholder component
    ├── lightbox.js               # Main lightbox wrapper component
    ├── location.js               # Location heading with map pin icon
    ├── mdx-wrapper.js            # MDX provider with custom components
    ├── tag-button.js             # Tag filter button with state
    ├── travel-map.js             # Interactive Mapbox map (150+ locations)
    └── unbalanced-image-grid.js  # Image grid with custom sizing
```

### Organizational Notes
- **Flat structure**: All main components live in the root directory (not in a `src/` or `components/` folder)
- **Single subdirectory**: Only `lightbox-components/` contains related sub-components
- **No README**: No project-level README exists (only this CLAUDE.md)
- **No tests**: No test files or testing infrastructure

---

## Technology Stack

### Core Framework
- **React**: Modern functional components with hooks (useState, useEffect, useRef)
- **Gatsby**: Static site generator (components use gatsby-plugin-image, gatsby Link)
- **MDX**: Markdown with embedded JSX components

### Key Dependencies
```javascript
// Explicitly listed in package.json
"@fontsource/inter": "^4.5.2"              // Inter font family

// Used in code (likely in parent Gatsby project's package.json)
"gatsby-plugin-image"                       // Optimized image handling
"@mdx-js/react"                            // MDX support
"react-spring-lightbox"                    // Lightbox with spring animations
"mapbox-gl": "^1.x"                        // Interactive maps
"@fontsource/roboto-mono": "^4.x"          // Monospace font for timers
"prop-types"                               // Runtime type checking
```

### Build & Styling Tools
- **SCSS**: CSS preprocessing with variables, nesting, and mixins
- **NPM**: Package management
- **No bundler in this repo**: Bundling handled by parent Gatsby project

---

## Component Architecture

### Component Categories

#### 1. Layout Components
**`layout.js`** - Main layout wrapper
```javascript
export default function Layout({ mode, children })
```
- Applies theme mode (`dark`, `travel`, `recipe`, etc.)
- Loads Inter and Roboto Mono fonts
- Wraps all page content

**`mdx-wrapper.js`** - MDX provider
- Maps custom components into MDX content
- Handles Location component and custom image rendering

#### 2. Image Display Components

**`image-grid.js`** - Flexible image grid (layout.js:5)
```javascript
export default function ImageGrid({ content, queryData, imagesPerRow })
```
- `imagesPerRow`: 1-4 (determines flex-basis: 100%, 45%, 28%, 22%)
- Integrates with SimpleLightbox for full-size viewing
- Expects `queryData` with `cropped` and `fullsize` nodes

**`unbalanced-image-grid.js`** - Custom-sized grid
- Similar to ImageGrid but accepts custom flex-basis per image
- Used for asymmetric layouts

**`image-callout.js`** - Text-image alternating layout
- Mobile-responsive (stacks on mobile)
- Supports left/right image positioning

#### 3. Interactive Components

**`lightbox.js`** - Lightbox wrapper
```javascript
export default function SimpleLightbox({
  currentImageIndex, setCurrentIndex, isOpen, onClose, images
})
```
- Uses react-spring-lightbox library
- Custom arrow buttons, header, and footer components
- Keyboard navigation support

**`travel-map.js`** - Mapbox GL interactive map
- Hardcoded GeoJSON data with 150+ travel destinations
- Mapbox token: `pk.eyJ1IjoiYW5kcmV3Y3JhaWciLCJhIjoiY2lqdGQydmY0MDFoYXZha2d6azg2NXIzaCJ9.LSLqBs5zrPgSAxrv9SGA6Q`
- Custom marker styling with travel theme colors

**`tag-button.js`** - Tag filter button
- Active/inactive state management
- Used for recipe and travel post filtering

**`back-button.js`** - Floating back navigation
- Uses Gatsby Link for client-side routing
- Positioned with fixed positioning

#### 4. Content Components

**`location.js`** - Location heading with icon
```javascript
export default function Location({ name })
```
- Displays map pin icon + location name
- Used in travel post headers

### Component Patterns

1. **Functional Components Only**: All components use modern React hooks
2. **Single Responsibility**: Each component handles one UI concern
3. **Prop-Driven**: Data flows down via props (no Context API)
4. **Composition**: Smaller components compose into larger ones
5. **Minimal PropTypes**: Only lightbox.js uses prop-types validation

---

## Styling System

### Architecture: layout.scss (1067 lines)

The entire styling system lives in a single SCSS file with:
- Theme color variables
- Light/dark mode support
- Responsive breakpoints
- Component-specific styles
- Print styles

### Theme Colors

```scss
// Travel Theme (Blue)
$primary-blue: #1087bf;
$light-blue: #e8f4f8;

// Recipe Theme (Green)
$primary-green: #4a7c59;
$light-green: #f0f7f2;

// Neutral Colors
$dark-gray: #2d2d2d;
$light-gray: #f5f5f5;
```

### Dark Mode Implementation

**Two parallel systems**:

1. **Manual class-based** (`.dark`)
```javascript
<div className={`tl-container ${mode}`}>
```

2. **System preference-based**
```scss
@media (prefers-color-scheme: dark) {
  // Dark mode styles
}
```

**Pattern**: Many elements duplicate styles for both systems to ensure compatibility.

### Responsive Breakpoints

```scss
// Mobile
@media (max-width: 500px) { }

// Tablet
@media (max-width: 700px) { }

// Desktop small
@media (max-width: 800px) { }
```

**Approach**: Mobile-first with max-width breakpoints

### Key Styling Conventions

1. **BEM-like naming**: `.lightbox-button`, `.grid-card-container`, `.recipe-timer`
2. **Component scoping**: Styles grouped by component
3. **CSS Variables**: Used for dynamic theming
4. **Flexbox-heavy**: Modern flex layouts with gap property
5. **Print styles**: Dedicated `@media print` rules for recipes

---

## Development Conventions

### Code Style

#### Import Order
```javascript
import React, { useState, useEffect } from 'react'  // React imports first
import { GatsbyImage, getSrc } from "gatsby-plugin-image"  // Gatsby plugins
import SimpleLightbox from './lightbox'  // Local components
import "./styles.scss"  // Styles last
```

#### Component Structure
```javascript
export default function ComponentName({ prop1, prop2 }) {
  // 1. State declarations
  const [state, setState] = useState(initialValue)

  // 2. Refs and effect hooks
  const ref = useRef(null)
  useEffect(() => { /* ... */ }, [])

  // 3. Helper functions
  function handleClick() { /* ... */ }

  // 4. Data transformations
  const transformedData = data.map(/* ... */)

  // 5. JSX return
  return (
    <div>
      {/* ... */}
    </div>
  )
}
```

#### Event Handling
```javascript
// Always define named handler functions
function handleClick(index, e) {
  // Handler logic
}

// Use both click and keyboard events for accessibility
onClick={(e) => handleClick(index, e)}
onKeyDown={(e) => handleKeyDown(index, e)}
```

### File Naming
- **Component files**: `kebab-case.js` (e.g., `image-grid.js`, `back-button.js`)
- **No `.jsx` extension**: All React files use `.js`
- **Match export name**: File `image-grid.js` exports `ImageGrid`

### Data Patterns

#### Image Query Data Structure
Components expect `queryData` with this structure:
```javascript
{
  cropped: {
    nodes: [
      {
        name: "photo-name",
        childImageSharp: {
          gatsbyImageData: { /* ... */ }
        }
      }
    ]
  },
  fullsize: {
    nodes: [
      {
        name: "photo-name",
        // Full image data
      }
    ]
  }
}
```

#### Content Arrays
Image components expect `content` arrays:
```javascript
[
  { name: "photo-name", description: "Alt text/caption" },
  // ...
]
```

**Pattern**: Filter `queryData` by matching `name` field from `content`.

---

## Common Patterns

### Pattern 1: Lightbox Integration

Most image components follow this pattern:

```javascript
import SimpleLightbox from './lightbox'

export default function Component({ content, queryData }) {
  const [isOpen, setOpen] = useState(false)
  const [currentImageIndex, setCurrentIndex] = useState(0)

  // Transform data for lightbox
  const lightboxImages = content.map(photo => ({
    src: getSrc(queryData.fullsize.nodes.filter(
      fullphoto => fullphoto.name === photo.name
    )[0]),
    alt: photo.description,
    caption: photo.description
  }))

  // Show lightbox on click
  function showLightbox(index) {
    setCurrentIndex(index)
    setOpen(true)
  }

  return (
    <>
      {/* Grid/display components */}
      <SimpleLightbox
        currentImageIndex={currentImageIndex}
        setCurrentIndex={setCurrentIndex}
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        images={lightboxImages}
      />
    </>
  )
}
```

### Pattern 2: Dynamic Class Mapping

For configurable layouts:

```javascript
const classMap = new Map([
  [1, '100%'],
  [2, '45%'],
  [3, '28%'],
  [4, '22%'],
])

const imgFB = classMap.get(imagesPerRow)

<div style={{flexBasis: imgFB}}>
```

### Pattern 3: Gatsby Image Handling

```javascript
import { GatsbyImage, getSrc } from "gatsby-plugin-image"

// For display (thumbnail)
<GatsbyImage
  image={node.childImageSharp.gatsbyImageData}
  alt={description}
/>

// For lightbox (get full URL)
const src = getSrc(fullsizeNode)
```

### Pattern 4: Theme Mode Application

```javascript
// In Layout component
<div className={`tl-container ${mode}`}>
  {children}
</div>

// Mode values: 'dark', 'travel', 'recipe', or combinations
```

---

## Git Workflow

### Branch Strategy
- **Main branch**: Not explicitly named in config (likely `main` or `master`)
- **Feature branches**: Use descriptive names (e.g., `claude/add-claude-documentation`)
- **Recent pattern**: Branches prefixed with `claude/` for AI-assisted work

### Commit Message Style

Based on recent commit history:

```
Imperative mood, lowercase, no period
✓ "add support for timers in recipes"
✓ "fix dark mode bugs for recipes"
✓ "update recipes for dark mode"

✓ Capitalize proper nouns
  "Add mono font for recipe timer"

✓ Be specific about what changed
  "migrate to scss" (not "update styles")
```

**Pattern**: Commits are small and focused on single features/fixes.

### Recent Development Focus
```
d516732 Improve timer
6441344 Add mono font for recipe timer
414ec2c add support for timers in recipes
1105fff fix dark mode bugs for recipes
e0d7d63 update recipes for dark mode
8fa8208 add support for dark mode
3115f9f migrate to scss
```

**Trends**:
- Dark mode implementation and refinement
- Recipe timer functionality
- SCSS migration
- Mobile UI improvements

---

## Guidelines for AI Assistants

### When Making Changes

#### ✅ DO:
1. **Read before editing**: Always read existing components before modifying
2. **Match existing patterns**: Follow the conventions in similar components
3. **Preserve styling**: Maintain the SCSS structure and theming approach
4. **Test both themes**: Consider light/dark mode and travel/recipe themes
5. **Think mobile-first**: Consider responsive behavior at all breakpoints
6. **Maintain flat structure**: Keep new components in root directory
7. **Use functional components**: Always use hooks, never class components
8. **Follow import order**: React → Gatsby → local → styles
9. **Keep components simple**: Single responsibility, avoid over-engineering
10. **Consider accessibility**: Include keyboard handlers and ARIA attributes

#### ❌ DON'T:
1. **Don't create nested directories**: Keep the flat structure
2. **Don't add testing**: There's no testing infrastructure in this repo
3. **Don't modify package.json unnecessarily**: Dependencies managed in parent project
4. **Don't use class components**: This codebase is fully functional
5. **Don't add build tools**: This is a component library, not a standalone app
6. **Don't create README files**: Focus on code, not documentation (except CLAUDE.md)
7. **Don't break theming**: Maintain dual dark mode systems (class + media query)
8. **Don't ignore mobile**: Always consider responsive behavior
9. **Don't add TypeScript**: This is a JavaScript codebase
10. **Don't add state management**: Components use local state only

### Common Tasks

#### Adding a New Component

1. Create component file in root directory: `new-component.js`
2. Use functional component with hooks
3. Follow the import order convention
4. Add necessary styles to `layout.scss`
5. Consider theming (travel vs recipe colors)
6. Add dark mode support if visible UI
7. Test responsiveness at all breakpoints
8. Export as default export

#### Modifying Styles

1. **Find the section** in `layout.scss` (it's organized by component)
2. **Check for existing variables**: Use theme colors from the top of the file
3. **Duplicate for dark mode**: Add both `.dark` and `@media (prefers-color-scheme: dark)` rules
4. **Test breakpoints**: Add responsive rules at 500px, 700px, 800px if needed
5. **Consider print**: Add print styles if component should appear in prints

#### Adding Image Components

1. **Follow the lightbox pattern** (see Pattern 1 above)
2. **Expect `queryData` structure** with cropped and fullsize nodes
3. **Use GatsbyImage** for thumbnails, `getSrc()` for lightbox
4. **Add click and keyboard handlers** for accessibility
5. **Map data by `name` field** to match content with images

#### Updating Theming

1. **Define color variables** at the top of `layout.scss`
2. **Apply to `.travel` class** for travel theme
3. **Apply to `.recipe` class** for recipe theme
4. **Add dark mode overrides** in both systems
5. **Test all combinations**: light travel, dark travel, light recipe, dark recipe

### Debugging Tips

1. **Image not showing**: Check `queryData` structure and `name` field matching
2. **Styles not applying**: Check if component has theme class applied via Layout
3. **Dark mode issues**: Verify both `.dark` class and media query have rules
4. **Responsive issues**: Check breakpoint order (smaller breakpoints should come last)
5. **Lightbox not working**: Verify `images` array structure (src, alt, caption)

### Code Review Checklist

Before committing changes, verify:
- [ ] Component uses functional syntax with hooks
- [ ] Imports follow the standard order
- [ ] Styles added to `layout.scss` in appropriate section
- [ ] Dark mode supported (both class and media query)
- [ ] Responsive at all breakpoints (500px, 700px, 800px)
- [ ] Travel and recipe themes considered
- [ ] Accessibility: keyboard handlers and ARIA attributes
- [ ] File naming follows kebab-case convention
- [ ] No new directories created (except if truly necessary)
- [ ] No testing or build files added
- [ ] Commit message follows imperative, lowercase style

---

## Key Files Reference

### Critical Files (Never delete)
- `layout.js` - Main layout wrapper, loads fonts and applies themes
- `layout.scss` - Entire styling system (1067 lines)
- `lightbox.js` - Core lightbox functionality used by multiple components
- `mdx-wrapper.js` - MDX integration layer

### High-Touch Components (Frequently modified)
- `image-grid.js` - Most used image display component
- `travel-map.js` - Contains hardcoded travel location data
- `layout.scss` - Styles updated frequently

### Experimental/Incomplete
- `lbImage.js` - Appears to be a placeholder or experimental component

### External Dependencies (Not in this repo)
- Gatsby configuration
- GraphQL queries for image data
- Page templates that consume these components
- Site-level configuration and routing

---

## Troubleshooting

### "Component not rendering"
- Verify component is imported in consuming page/template
- Check if Layout wrapper is applied with correct mode
- Ensure props match expected structure

### "Styles not applying"
- Check if layout.scss is imported in Layout component
- Verify theme class is applied to container
- Clear Gatsby cache in parent project

### "Images not loading"
- Verify queryData structure matches expected format
- Check that image names match between content and queryData
- Ensure gatsby-plugin-image is configured in parent project

### "Dark mode not working"
- Check if `mode="dark"` is passed to Layout component
- Verify both `.dark` and media query styles exist
- Check for specificity conflicts in SCSS

### "Lightbox not opening"
- Verify images array has correct structure (src, alt, caption)
- Check that isOpen state is being set to true
- Ensure react-spring-lightbox is installed in parent project

---

## Additional Context

### Why This Structure?

This component library uses an unconventional flat structure because:
1. **Small scope**: Limited number of components (~15 total)
2. **Single purpose**: All components serve one Gatsby site
3. **Easy imports**: Simple paths like `./lightbox` instead of `../../components/lightbox`
4. **Historical**: Likely started small and never needed reorganization

### Relationship to Parent Project

This repository is **imported** into a larger Gatsby project:
- Parent project has full package.json with all dependencies
- Parent project has GraphQL queries for image data
- Parent project has page templates and routing
- This repo only provides reusable components

### Design Philosophy

1. **Visual-first**: Strong focus on imagery and presentation
2. **Content-driven**: Components designed around specific content types (travel, recipes)
3. **Theme flexibility**: Support for multiple color themes and modes
4. **Mobile-friendly**: Responsive design is core, not afterthought
5. **Performance-conscious**: Uses Gatsby image optimization throughout

---

## Version History

- **2025-12-17**: Initial CLAUDE.md creation
  - Documented all components and patterns
  - Captured styling conventions and theming approach
  - Recorded git workflow and commit style
  - Added comprehensive AI assistant guidelines

---

## Questions?

When in doubt:
1. **Look at similar components**: Find a component that does something similar
2. **Check layout.scss**: Most patterns are visible in the styling
3. **Read git history**: `git log --oneline` shows recent patterns
4. **Keep it simple**: Don't over-engineer, match the existing simplicity
5. **Ask the user**: If unsure about theme/structure decisions

---

**Remember**: This is a component library for a specific Gatsby site. Changes should enhance the existing patterns, not introduce new architectural paradigms. Keep it simple, visual, and consistent with the established conventions.
