import { X9T } from '../';
import colors from './colors';
import shadowBorder from './shadow-border';

const classesRules = {
  root: {
    '&::-webkit-scrollbar': {
      width: 15,
      height: 15,
      backgroundColor: colors.white,
      backgroundImage:
        'url("data:image/gif;base64,R0lGODlhAgACAJEAAAAAAP///8zMzP///yH5BAEAAAMALAAAAAACAAIAAAID1CYFADs=")'
    },
    '&::-webkit-scrollbar-track': {
      position: 'relative'
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: colors.greywin,
      ...shadowBorder
    },
    '&::-webkit-scrollbar-corner': {
      backgroundColor: 'transparent'
    },
    '&::-webkit-scrollbar-button': {
      backgroundColor: colors.greywinLight,
      ...shadowBorder
    },
    '&::-webkit-scrollbar-button:start:decrement, &::-webkit-scrollbar-button:end:increment': {
      height: 15,
      width: 15,
      display: 'block',
      backgroundRepeat: 'no-repeat',
      backgroundColor: colors.greywin
    },
    '&::-webkit-scrollbar-button:start:decrement:active, &::-webkit-scrollbar-button:end:increment:active': {
      border: [1, 'solid', colors.greywinDark],
      boxShadow: 'none',
      backgroundColor: colors.greywin
    },
    '&::-webkit-scrollbar-button:horizontal:decrement': {
      backgroundImage:
        'url("data:image/gif;base64,R0lGODlhBAAHAJEAAAAAAP///////wAAACH5BAEAAAIALAAAAAAEAAcAAAIIlHEIy7ppBCgAOw==")',
      backgroundPosition: [6, 4]
    },
    '&::-webkit-scrollbar-button:horizontal:decrement:active': {
      backgroundPosition: [5, 3]
    },
    '&::-webkit-scrollbar-button:horizontal:increment': {
      backgroundImage:
        'url("data:image/gif;base64,R0lGODlhBAAHAJEAAAAAAP///////wAAACH5BAEAAAIALAAAAAAEAAcAAAIIhA4maeyrlCgAOw==")',
      backgroundPosition: [6, 4]
    },
    '&::-webkit-scrollbar-button:horizontal:increment:active': {
      backgroundPosition: [5, 3]
    },
    '&::-webkit-scrollbar-button:vertical:decrement': {
      backgroundImage:
        'url("data:image/gif;base64,R0lGODlhBwAEAJEAAAAAAP///////wAAACH5BAEAAAIALAAAAAAHAAQAAAIHlGEJq8sOCwA7")',
      backgroundPosition: [4, 6]
    },
    '&::-webkit-scrollbar-button:vertical:decrement:active': {
      backgroundPosition: [3, 5]
    },
    '&::-webkit-scrollbar-button:vertical:increment': {
      backgroundImage:
        'url("data:image/gif;base64,R0lGODlhBwAEAJEAAAAAAP///////wAAACH5BAEAAAIALAAAAAAHAAQAAAIIhA+CKWoNmSgAOw==")',
      backgroundPosition: [4, 6]
    },
    '&::-webkit-scrollbar-button:vertical:increment:active': {
      backgroundPosition: [3, 5]
    }
  }
} satisfies X9T.JSS.ClassList;

export default classesRules as X9T.JSS.Classes<typeof classesRules>;
