import { useContext } from 'react';
import { makeStyles } from '@mui/styles';

import { TimerContext } from '../store/timer';

const useStyles = makeStyles((theme) => ({
  box: {
    border: '1px solid red',
  },
}));

const Home = () => {
  const classes = useStyles();
  const { test } = useContext(TimerContext);

  return (
    <div className={classes.box}>
      <h1 onClick={test}>hola</h1>
    </div>
  );
};

export default Home;
