<script lang="ts">
export default {
  data() {
    return {
      count: 0
    }
  }
}
</script>

<template>
  <div>
    <p>You clicked {{count}} times</p>
    <button @click="count++">Click me</button>
  </div>
</template>