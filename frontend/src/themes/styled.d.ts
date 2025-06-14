import 'styled-components';
import { Theme } from './theme';

declare module 'styled-components' {
  // This declaration file extends the DefaultTheme interface used by styled-components
  // to include our custom Theme type (from src/themes/theme.ts).
  // This allows full TypeScript support for theme properties inside styled components,
  // e.g., theme.colors.primary, theme.global.boxShadow, etc.
  //
  // Note: Although this interface appears "empty", it extends Theme,
  // and is required for proper theme typing across the app.
  // We disable the ESLint rule to avoid a false-positive warning.
  //

  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends Theme {}
}
