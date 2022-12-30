import { X9T } from '../../../';
import { colors, shadowBorder } from '../../../theme/';

const classesRules = {
  root: {
    textDecoration: 'none',
    color: 'black',
    userSelect: 'none',
    cursor: 'pointer',
    padding: [6, 12],
    display: 'inline-block',
    textAlign: 'center',
    lineHeight: 1,
    overflow: 'visible',
    width: 'auto',
    margin: [0, 4],
    background: colors.greywin,
    border: 'none',
    borderRadius: 0,
    ...shadowBorder.root,

    '&:disabled': {
      color: colors.greywinDark,
      cursor: 'not-allowed'
    },

    '&:active': {
      MozAppearance: 'initial',
      WebkitAppearance: 'initial',
      padding: [6, 11, 6, 13],
      clear: 'both',
      ...shadowBorder.invert
    },

    '&:focus': {
      outline: [1, 'dotted', colors.black],
      outlineOffset: 4
    },

    '&:first-child': {
      marginLeft: 0
    },

    '&:last-child': {
      marginRight: 0
    },

    '&::-moz-focus-inner, &::-moz-focus-inner': {
      border: '0 none'
    },

    '&:before, &:after': {
      clear: 'both',
      content: '',
      display: 'block',
      fontSize: 0,
      lineHeight: 0,
      visibility: 'hidden',
      width: 0,
      height: 0
    }
  },

  full: {
    display: 'block',
    marginLeft: 0,
    marginRight: 0,
    width: 'auto'
  }
} satisfies X9T.JSS.ClassList;

export default classesRules as X9T.JSS.Classes<typeof classesRules>;
