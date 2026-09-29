# Project Code Generation Rules

## Frontend Layout From Figma

- The implementation must match the Figma design as closely as possible: layout, spacing, typography, colors, radii, shadows, states, and responsive behavior.
- Inspect the Figma structure before coding: Auto Layout, constraints, spacing, padding, alignment, gap, element order, and container sizes.
- Do not recreate layouts approximately when exact values are available in the design.
- Translate Figma Auto Layout into CSS layout primitives: `flex`, `grid`, `gap`, `padding`, `align-items`, and `justify-content`.

## Existing UI Components

- Before creating a new component, search for existing reusable components in `app/components`, UI/shared component folders, and other established project locations.
- Use existing UI components whenever they cover the required behavior or visual style.
- Create a new component only when no suitable existing component exists.
- Preserve the existing component APIs, naming conventions, import style, and architecture.
- Do not duplicate UI components with slightly different markup or styling.

## Positioning And Layout

- Use `flex` or `grid` as the default approach for positioning.
- Use `position: absolute` only when the design actually requires overlays, badges, floating icons, decorative layers, or similar cases.
- Prefer `gap`, `padding`, alignment properties, wrapping, and grid tracks over margin-based layout hacks.
- The DOM structure should reflect the visual and semantic structure of the design.

## Style Variables And Tokens

- Use existing style variables for colors, spacing, typography, radii, shadows, breakpoints, and reusable sizes.
- Before adding a new variable, check whether the project already has an equivalent token.
- If a needed token does not exist, add it in the established style variables location for this project.
- Avoid hardcoded design-system values in component styles.
- Avoid inline styles except for truly dynamic values that cannot be expressed cleanly through classes or variables.

## Component Decomposition

- Split independent UI blocks into separate components.
- Each component should have one clear responsibility.
- New components should use this folder structure:

```text
ComponentName/
  ComponentName.vue
  ComponentName.sass
```

- Keep component styles next to the component.
- Decompose large components into smaller parts when they contain independent visual or logical blocks.
- Do not mix page-level business logic, reusable UI, and large layout sections in one oversized component.

## Vue And SASS

- Follow the project's existing Vue style, including Composition API usage, prop definitions, emits and naming.
- Props must be explicit and typed when the surrounding codebase uses typing.
- Repeated template fragments should be extracted into reusable components.
- Do not add local state when props or computed values are sufficient.
- Use one SASS file per component unless the existing local pattern clearly differs.
- Do not add global styles from a component unless there is a clear project-level reason.

## Responsive Behavior

- Validate desktop, tablet, and mobile behavior when the design includes responsive states or when the component can appear across different viewport sizes.
- Text and UI elements must not overlap, overflow their containers, or break the layout on small screens.
- Use responsive layout tools such as `grid`, `flex-wrap`, `minmax`, `clamp`, media queries, or existing breakpoint variables.

## Images

- Use `NuxtPicture` for project images instead of plain `img` when rendering bitmap/content images.
- Always provide a `sizes` value for `NuxtPicture` so responsive image selection is explicit.
- Use AVIF output for optimized images through the Nuxt image format configuration, for example `format="avif"`.
- Use CSS `aspect-ratio` to preserve image proportions instead of fixed height hacks, padding hacks, or layout-dependent image stretching.
- Decorative icons and inline SVG UI symbols may use the existing project icon approach when `NuxtPicture` is not appropriate.

## Verification In Dev Mode

- Do not run production build commands for verification, including `npm run build`, `nuxt build`, `npm run generate`, or equivalent build commands.
- Verify frontend changes only against an already running development server.
- If the development server is not running, ask the user to start it manually and provide the local URL.
- Do not start the development server automatically unless the user explicitly asks for it.

## Before Finishing

- Confirm the result matches the Figma design.
- Confirm existing UI components were reused where appropriate.
- Confirm no duplicate UI components were introduced.
- Confirm styles are in SASS files next to components.
- Confirm style variables are used or created where needed.
- Confirm Figma Auto Layout was represented with `flex` or `grid`.
- Confirm responsive behavior is correct.
- Confirm bitmap/content images use `NuxtPicture` with `sizes`, AVIF format, and CSS `aspect-ratio`.
- Confirm verification was done only in development mode, or state that the development server was not running.
- Confirm hardcoded design-system values were avoided.
- Confirm the component structure is clean and maintainable.
