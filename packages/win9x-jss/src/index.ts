import * as CSS from 'csstype';
import { JssStyle, Styles } from 'jss';

import * as components from './components/';
import * as theme from './theme/';

namespace X9T {
  export namespace JSS {
    export type Declarations = JssStyle;

    export interface ClassList {
      [k: string]: Declarations;
    }

    export type Classes<R> = Readonly<{ [key in keyof R]: Declarations }>;

    export interface IColor {
      readonly [k: string]: CSS.Property.Color;
    }
  }
}

export { components, theme, X9T };
