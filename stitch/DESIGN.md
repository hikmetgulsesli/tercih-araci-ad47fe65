---
name: Core Precision
colors:
  surface: '#f9f9ff'
  surface-dim: '#cadaff'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f3ff'
  surface-container: '#e8edff'
  surface-container-high: '#e0e8ff'
  surface-container-highest: '#d7e2ff'
  on-surface: '#041b3c'
  on-surface-variant: '#434654'
  inverse-surface: '#1d3052'
  inverse-on-surface: '#edf0ff'
  outline: '#737685'
  outline-variant: '#c3c6d6'
  surface-tint: '#0c56d0'
  primary: '#003d9b'
  on-primary: '#ffffff'
  primary-container: '#0052cc'
  on-primary-container: '#c4d2ff'
  inverse-primary: '#b2c5ff'
  secondary: '#5c5f60'
  on-secondary: '#ffffff'
  secondary-container: '#dee0e2'
  on-secondary-container: '#606365'
  tertiary: '#5e3c00'
  on-tertiary: '#ffffff'
  tertiary-container: '#7d5200'
  on-tertiary-container: '#ffca81'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2ff'
  primary-fixed-dim: '#b2c5ff'
  on-primary-fixed: '#001848'
  on-primary-fixed-variant: '#0040a2'
  secondary-fixed: '#e1e2e4'
  secondary-fixed-dim: '#c5c6c8'
  on-secondary-fixed: '#191c1e'
  on-secondary-fixed-variant: '#444749'
  tertiary-fixed: '#ffddb3'
  tertiary-fixed-dim: '#ffb950'
  on-tertiary-fixed: '#291800'
  on-tertiary-fixed-variant: '#624000'
  background: '#f9f9ff'
  on-background: '#041b3c'
  surface-variant: '#d7e2ff'
typography:
  headline-xl:
    fontFamily: Hanken Grotesk
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 48px
  margin-mobile: 16px
---

## Brand & Style

The design system is engineered for a preference tool (Tercih Aracı), where clarity of information and ease of decision-making are paramount. The brand personality is **authoritative, dependable, and highly functional**, aiming to reduce cognitive load during complex selection processes.

The aesthetic follows a **Modern Corporate Minimalism** approach. It prioritizes utility over decoration, utilizing generous whitespace, a structured grid, and high-contrast elements to guide the user through logical workflows. The emotional response should be one of confidence and focus, ensuring users feel supported by a professional and accessible interface.

## Colors

The palette is anchored by a **Deep Corporate Blue** (`#0052CC`), serving as the primary driver for actions and brand presence. 

- **Primary:** Used for key call-to-actions, active states, and primary navigation elements.
- **Secondary:** A soft cool-gray used for subtle backgrounds and grouping elements without adding visual weight.
- **Tertiary:** An accent amber reserved strictly for high-priority alerts or status indicators to maintain contrast against the blue/white foundation.
- **Neutral:** A rich navy-black used for primary text to ensure maximum readability and WCAG AA compliance.
- **Background:** The canvas remains pure white (#FFFFFF) to provide the highest possible contrast for text and interactive components.

## Typography

This design system uses a dual-font strategy to balance character with utility. **Hanken Grotesk** is used for headlines to provide a sharp, contemporary professional feel. **Inter** is utilized for all body text and UI labels due to its exceptional legibility and systematic performance in data-heavy environments.

Text scales are strictly adhered to for accessibility. All body text maintains a minimum of 16px for primary reading experiences. Letter spacing is slightly tightened on large headlines for impact and slightly opened on small labels for clarity.

## Layout & Spacing

The layout is built on a **12-column fixed grid** for desktop, ensuring content remains readable and contained at 1280px. 

- **Desktop (1024px+):** 12 columns, 24px gutters, 48px page margins.
- **Tablet (768px - 1023px):** 8 columns, 16px gutters, 32px page margins.
- **Mobile (<767px):** 4 columns, 16px gutters, 16px page margins.

A strictly linear 8px spacing system governs all internal component padding and margins (8, 16, 24, 32, 48, 64). This ensures a predictable rhythm and visual harmony across the preference tool's various data tables and selection forms.

## Elevation & Depth

This design system uses **Tonal Layers** and **Low-Contrast Outlines** rather than heavy shadows to maintain a clean, professional "flat" aesthetic. 

- **Level 0 (Base):** Pure white background.
- **Level 1 (Cards/Sections):** A 1px border of `#DFE1E6` (Light Gray) with no shadow. Used for secondary content areas.
- **Level 2 (Interactive/Focus):** A subtle, diffused shadow (0px 4px 8px rgba(0, 0, 0, 0.05)) is only applied to active cards or hovering interactive elements to provide a "lifted" affordance.
- **Separators:** 1px solid lines using the Secondary color are used to divide list items and form sections.

## Shapes

The design system employs a **Soft** shape language. A standard border radius of `4px` (0.25rem) is applied to buttons, input fields, and small UI components. This provides a professional edge that feels modern without being overly "bubbly" or informal. Larger containers like cards may use `8px` (0.5rem) to distinguish structural boundaries.

## Components

### Buttons
- **Primary:** Solid Primary Blue background, white text. 4px radius. 
- **Secondary:** Transparent background, Primary Blue border and text.
- **Sizes:** Large (48px height) for main actions; Medium (40px) for standard UI.

### Input Fields
- **Default State:** 1px border (`#DFE1E6`), white background.
- **Focus State:** 2px border (`#0052CC`), subtle blue tint background.
- **Labels:** Always positioned above the field using `label-md` for maximum accessibility.

### Cards & Selection Items
- Used for preference choices. Features a 1px border. 
- **Selected State:** Border thickens to 2px Primary Blue with a light blue background fill (`#E6EFFC`).

### Chips
- Used for categories or filters. Rounded (16px radius), light gray background, dark navy text.

### Progress Indicators
- For multi-step preference processes, a horizontal stepper with text labels below each icon is required to provide clear orientation.