import { useContext } from 'react';
import { Context } from '../../../../store';
import worker from '../../../../assets/worker.jpg';
import minerals from '../../../../assets/minerals.jpg';
import './Status.scss';

export const Status = () => {
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useContext(Context);

  return (
    <div className='status'>
      <div className='status-section'>
        <i>
          <img src={minerals} alt='Minerals' title='Minerals' />
        </i>
        <span>{state.minerals}</span>
      </div>
      <div className='status-section'>
        {' '}
        <i>
          <img src={worker} alt='Workers' title='Workers' />
        </i>{' '}
        <span> {state.workers.length}</span>
      </div>
    </div>
  );
};
