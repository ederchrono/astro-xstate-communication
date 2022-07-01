<script lang="ts">
import { useActor, useMachine } from '@xstate/vue';
import { getInstance } from '../state/counter';

export default {
  setup() {
    const { state, send } = useActor(getInstance());
    return {
      state,
      send,
    };
  }
};
</script>

<template>
  <div>
    <p>state: {{state.value}}</p>
    <p>Vue counter:{{state.context.count}}</p>
    <button @click="send('decrement')">-</button>
    <button @click="send('increment')">+</button>
    <button @click="send('disable')">Disable</button>
  </div>
</template>