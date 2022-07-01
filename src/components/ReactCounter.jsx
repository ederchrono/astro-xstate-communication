import { useMachine } from '@xstate/react';
import { counterMachine } from '../state/counter';

function ReactCounter() {
  const [state, send] = useMachine(counterMachine);
  return (
    <div>
      <p>state: {state.value}</p>
      <p>React counter: {state.context.count}</p>
      <button onClick={() => send('decrement')}>-</button>
      <button onClick={() => send('increment')}>+</button>
      <button onClick={() => send('disable')}>Disable</button>
    </div>
  );
}

export default ReactCounter;