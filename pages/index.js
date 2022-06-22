import { useContext } from 'react';
import { makeStyles } from '@mui/styles';

import { ExampleContext } from '../store/example';

const useStyles = makeStyles((theme) => ({
  box: {
    border: '1px solid red',
  },
}));

const Home = () => {
  const classes = useStyles();
  const { test } = useContext(ExampleContext);

  return (
    <div className={classes.box}>
      <h1 onClick={test}>project</h1>
    </div>
  );
};

export default Home;
