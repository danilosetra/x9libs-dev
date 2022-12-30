import { X9T } from '../';
import colors from './colors';

const classesRules = {
  root: {
    boxShadow: [
      ['inset', -1, -1, colors.black],
      ['inset', 1, 1, colors.white],
      ['inset', -2, -2, colors.greywinDark],
      ['inset', 2, 2, colors.greywinLight]
    ]
  },
  invert: {
    boxShadow: [
      ['inset', -1, -1, colors.white],
      ['inset', 1, 1, colors.black],
      ['inset', -2, -2, colors.greywinLight],
      ['inset', 2, 2, colors.greywinDark]
    ]
  },
  out: {
    boxShadow: [
      [-1, -1, colors.white],
      [1, 1, colors.black],
      [-2, -2, colors.greywinLight],
      [2, 2, colors.greywinDark]
    ]
  }
} satisfies X9T.JSS.ClassList;

export default classesRules as X9T.JSS.Classes<typeof classesRules>;
