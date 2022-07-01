<script lang="ts">
import { useActor } from '@xstate/vue';
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
  <div style="background-color: #40B27F;">
    <p>Vue counter:{{state.context.count}}</p>
    <p>state: {{state.value}}</p>
    <button @click="send('decrement')">-</button>
    <button @click="send('increment')">+</button>
    <button @click="send('disable')">Disable</button>
    <button @click="send('enable')">Enable</button>
  </div>
</template>