---
name: Festive Heritage
colors:
  surface: '#fbf9f1'
  surface-dim: '#dcdad2'
  surface-bright: '#fbf9f1'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f4ec'
  surface-container: '#f0eee6'
  surface-container-high: '#eae8e0'
  surface-container-highest: '#e4e3db'
  on-surface: '#1b1c17'
  on-surface-variant: '#5a403c'
  inverse-surface: '#30312c'
  inverse-on-surface: '#f3f1e9'
  outline: '#8e706b'
  outline-variant: '#e3beb8'
  surface-tint: '#b52619'
  primary: '#610000'
  on-primary: '#ffffff'
  primary-container: '#8b0000'
  on-primary-container: '#ff907f'
  inverse-primary: '#ffb4a8'
  secondary: '#735c00'
  on-secondary: '#ffffff'
  secondary-container: '#fed65b'
  on-secondary-container: '#745c00'
  tertiary: '#00341a'
  on-tertiary: '#ffffff'
  tertiary-container: '#004d2a'
  on-tertiary-container: '#6ac089'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad4'
  primary-fixed-dim: '#ffb4a8'
  on-primary-fixed: '#410000'
  on-primary-fixed-variant: '#920703'
  secondary-fixed: '#ffe088'
  secondary-fixed-dim: '#e9c349'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#9df6b9'
  tertiary-fixed-dim: '#81d99f'
  on-tertiary-fixed: '#00210f'
  on-tertiary-fixed-variant: '#00522d'
  background: '#fbf9f1'
  on-background: '#1b1c17'
  surface-variant: '#e4e3db'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.2'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max-width: 1200px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
---

## Brand & Style

The design system is rooted in the "Festive Heritage" philosophy, blending the opulence of traditional Pakistani celebrations with the streamlined efficiency of modern commerce. It targets a discerning audience looking for authentic, premium confectionery for weddings, Eids, and family milestones.

The visual style is a **Modern-Tactile** hybrid. It utilizes clean layouts and generous whitespace to ensure ease of navigation, while injecting "soul" through intricate Pakistani patterns—mandalas and geometric tile motifs—used as subtle background watermarks or border accents. The emotional goal is to evoke a sense of warmth, generous hospitality, and the "shadi" (joyful) atmosphere of a traditional sweet shop.

## Colors

The palette is inspired by the vibrant attire and decor of Pakistani festivities. 
- **Deep Royal Red** serves as the primary brand color, used for critical actions and brand markers to signify passion and tradition.
- **Shimmering Gold** is the accent color, reserved for highlights, icons, and premium tiers to denote high quality.
- **Vibrant Emerald Green** is used for secondary actions and "freshness" indicators, such as organic certifications or seasonal availability.
- **Warm Cream** is the foundational background color, providing a softer, more inviting canvas than pure white.

Use subtle gold gradients (linear, 45 degrees) on buttons and premium cards to simulate a metallic sheen.

## Typography

The typographic strategy balances elegance with utility. 
- **Headlines:** Use **Playfair Display**. Its high-contrast serifs evoke a literary and premium feel, perfect for product names and celebratory messaging.
- **Body & UI:** Use **Plus Jakarta Sans**. This typeface provides a friendly, contemporary counterpoint to the traditional headlines, ensuring high legibility on mobile screens where users browse ingredient lists and delivery details.

Maintain a clear hierarchy by using Royal Red for primary headlines and Ink Black for body text to ensure maximum readability against the Warm Cream background.

## Layout & Spacing

This design system employs a **12-column fluid grid** for desktop and a **4-column grid** for mobile. 
- **Rhythm:** A base 8px spacing unit drives all padding and margin decisions. 
- **Negative Space:** Use generous vertical margins (minimum 64px between sections) to give the traditional patterns room to breathe without cluttering the interface.
- **Mobile Comfort:** Elements are spaced to allow for "fat-finger" accessibility, with a minimum touch target height of 48px for all interactive components.

## Elevation & Depth

Hierarchy is established through **Ambient Shadows** and **Tonal Layering**. 
- **Cards:** Use soft, diffused shadows tinted with a hint of Royal Red (e.g., `rgba(139, 0, 0, 0.08)`) to make product cards feel as though they are resting on the Warm Cream surface.
- **Modals & Overlays:** Use a deeper shadow with a larger blur radius to indicate height. 
- **Patterned Layers:** Intricate mandalas should be placed at the lowest elevation (z-index), appearing almost as a watermark on the background to prevent them from interfering with content legibility.

## Shapes

The shape language is consistently **Rounded**. 
- Standard UI elements (buttons, inputs) use a 0.5rem (8px) corner radius. 
- Product cards and featured containers use "Large" (16px) or "Extra Large" (24px) corners to evoke a friendly, approachable, and "soft" aesthetic reminiscent of the confectionery itself.
- **Decorative Accents:** Use circular or organic shapes for image masks to mirror the form of traditional sweets like Gulab Jamun or Laddu.

## Components

### Buttons
Primary buttons are large, featuring a Royal Red background with Shimmering Gold text or border. Use a slight "lift" effect (hover shadow increase) to signify interactivity. Secondary buttons should use a Gold outline with Red text.

### Cards
Product cards feature a clean Warm Cream surface, a subtle shadow, and a top-aligned image. Price points are highlighted in Emerald Green to signify value and freshness.

### Input Fields
Inputs use a Soft Gold border (1px) that thickens and turns Royal Red upon focus. Labels remain in Plus Jakarta Sans for clarity.

### Traditional Accents (Custom Component)
"Pattern Dividers" are used to separate major sections. These are thin, horizontal lines featuring a small, centered mandala or tile motif in Gold.

### Chips/Tags
Used for "Bestseller," "Sugar-Free," or "Festive Box" labels. These use Emerald Green backgrounds with white text and a fully rounded (pill) shape.