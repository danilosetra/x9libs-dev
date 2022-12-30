import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  myButton: {
    color: 'green',
    margin: {
      top: 5,
      right: 0,
      bottom: 0,
      left: '1rem',
    },
    '& span': {
      fontWeight: 'bold',
    },
  },
  myLabel: {
    fontStyle: 'italic',
  },
});

const App: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <h1>x9libs</h1>
      <h2>react-ui-components; mode: {process.env.NODE_ENV}</h2>
      <button className={classes.myButton}>
        <span className={classes.myLabel}>click me</span>
      </button>
    </>
  );
};

export default App;
