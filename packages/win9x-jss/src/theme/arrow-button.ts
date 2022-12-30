import { X9T } from '../';
import shadowBorder from './shadow-border';
import colors from './colors';

const arrowButtonBase: X9T.JSS.Declarations = {
  ...shadowBorder,
  backgroundColor: colors.greywinLight
};

const classesRules = {
  root: {
    ...arrowButtonBase
  },
  active: {
    ...arrowButtonBase,
    border: [1, 'solid', colors.greywinDark],
    boxShadow: 'none',
    backgroundColor: colors.greywin,
    color: 'red'
  },
  inactive: {
    ...arrowButtonBase,
    height: 15,
    width: 15,
    display: 'block',
    backgroundRepeat: 'no-repeat',
    backgroundColor: colors.greywin
  },
  horizontalDecrementInactive: {
    ...arrowButtonBase,
    backgroundImage:
      'url("data:image/gif;base64,R0lGODlhBAAHAJEAAAAAAP///////wAAACH5BAEAAAIALAAAAAAEAAcAAAIIlHEIy7ppBCgAOw==")',
    backgroundPosition: [6, 4]
  },
  horizontalDecrementActive: {
    ...arrowButtonBase,
    backgroundPosition: [5, 3]
  },
  horizontalIncrementInactive: {
    ...arrowButtonBase,
    backgroundImage:
      'url("data:image/gif;base64,R0lGODlhBAAHAJEAAAAAAP///////wAAACH5BAEAAAIALAAAAAAEAAcAAAIIhA4maeyrlCgAOw==")',
    backgroundPosition: [6, 4]
  },
  horizontalIncrementActive: {
    ...arrowButtonBase,
    backgroundPosition: [5, 3]
  },
  verticalDecrementInactive: {
    ...arrowButtonBase,
    backgroundImage:
      'url("data:image/gif;base64,R0lGODlhBwAEAJEAAAAAAP///////wAAACH5BAEAAAIALAAAAAAHAAQAAAIHlGEJq8sOCwA7")',
    backgroundPosition: [4, 6]
  },
  verticalDecrementActive: {
    ...arrowButtonBase,
    backgroundPosition: [3, 5]
  },
  verticalIncrementInactive: {
    ...arrowButtonBase,
    backgroundImage:
      'url("data:image/gif;base64,R0lGODlhBwAEAJEAAAAAAP///////wAAACH5BAEAAAIALAAAAAAHAAQAAAIIhA+CKWoNmSgAOw==")',
    backgroundPosition: [4, 6]
  },
  verticalIncrementActive: {
    ...arrowButtonBase,
    backgroundPosition: [3, 5]
  }
} satisfies X9T.JSS.ClassList;

export default classesRules as X9T.JSS.Classes<typeof classesRules>;
