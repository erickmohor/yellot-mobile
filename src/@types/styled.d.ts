import 'styled-components'
import light from './light'

declare module 'styled-components' {
  type ThemeLight = typeof light;

  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ThemeLight{}
}
