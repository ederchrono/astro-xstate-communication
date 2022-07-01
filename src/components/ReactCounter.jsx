import { useActor } from '@xstate/react';
import { getInstance } from '../state/counter';

function ReactCounter() {
  const [state, send] = useActor(getInstance());
  return (
    <div style={{backgroundColor: '#5ED4F3'}}>
      <p>React counter: {state.context.count}</p>
      <p>state: {state.value}</p>
      <button onClick={() => send('decrement')}>-</button>
      <button onClick={() => send('increment')}>+</button>
      <button onClick={() => send('disable')}>Disable</button>
      <button onClick={() => send('enable')}>Enable</button>
    </div>
  );
}

export default ReactCounter;