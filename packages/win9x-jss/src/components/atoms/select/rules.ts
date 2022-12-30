import { X9T } from '../../../';
import { arrowButton, colors, shadowBorder } from '../../../theme/';

const classesRules = {
  root: {
    ...shadowBorder.invert,
    padding: [5, 30, 5, 10],
    height: 26,
    zIndex: 1,
    cursor: 'pointer',

    '&::-ms-expand': {
      display: 'none'
    },

    '&:focus': {
      outline: [1, 'dotted', colors.black],
      outlineOffset: 4
    }
  },
  container: {
    position: 'relative',
    display: 'inline-block'
  },
  containerArrow: {
    ...arrowButton.inactive,
    ...arrowButton.verticalIncrementInactive,
    content: '',
    display: 'block',
    position: 'absolute',
    top: 2,
    right: 2,
    zIndex: 2,
    width: 20,
    height: 'calc(100% - 4px)',
    pointerEvents: 'none',
    backgroundPosition: '6px 8px'
  },

  containerNoArrow: {
    padding: [5, 10]
  }
} satisfies X9T.JSS.ClassList;

export default classesRules as X9T.JSS.Classes<typeof classesRules>;
