
<script>
import { getInstance } from '../state/counter';

const service = getInstance();
let state
service.onTransition((newState) => {
  state = newState
});
</script>

<div style="background-color: #F73D01;">
  <p>Svelte counter:{state.context.count}</p>
  <p>state: {state.value}</p>
  <button on:click={ () => service.send('decrement') }>-</button>
  <button on:click={ () => service.send('increment') }>+</button>
  <button on:click={ () => service.send('disable') }>Disable</button>
  <button on:click={ () => service.send('enable') }>Enable</button>
</div>