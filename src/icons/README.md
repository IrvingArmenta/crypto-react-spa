# SVG icons setup

This application leverages the dynamic power of vite-plugin-svg-icons to deliver a performant and optimized SVG icon system. This innovative plugin ensures that only the icons actually utilized within the application are imported, minimizing bundle size and maximizing loading speed.

## Registering a New Icon

### 1. Add the SVG file:

Place the new SVG icon file in the designated icons directory (e.g., src/icons).

### 2. Update the icon list:

In the iconNames array found in this folder `index.ts` file, add the new icon's name (without the .svg extension) to the list.

### 3. Use the icon:

use the `<SvgIcon />` componet from the `@/components` directory in the application and refresh the application, the name that you added to the list will be displayed as autocomplete in the `icon=""` prop.
