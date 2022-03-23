import { useEffect, useContext } from 'react';
import { Context } from '../../store';
import worker from '../../assets/worker.jpg';
import './Worker.scss';

export const Worker = () => {
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useContext(Context);

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch({ type: 'COLLECT_MINERALS' });
    }, 5000);
    return () => clearInterval(timer);
  }, [dispatch]);

  return (
    <div className='worker'>
      <img src={worker} alt='worker' />
      <div className='carried-mineral' />
    </div>
  );
};
