import { useActor, useMachine } from '@xstate/react';
import { getInstance } from '../state/counter';

function ReactCounter() {
  const [state, send] = useActor(getInstance());
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