import { createMachine, interpret } from 'xstate';


const counterMachine = 
/** @xstate-layout N4IgpgJg5mDOIC5QGMD2BXAdgFzAJwDoBDZbASwDcwBiMzZPMAWzB0VAAdVYzzVN2IAB6IAtAEYAzAFYCADgDskgCwK5k8QE4lAJgAMygDQgAnmJ3idBHXM0A2PXL3SFey3bsBfT8bRZchCTkVNQQYAzMrNiCXDx8AkjCYsqakgR2cpaZKnr2MtLGZgiiFlY29nqSCvaZ1eLevhg4+MSklDQQZLBEAEYANmAx3Lxk-IIixToKVsqZ0urVFvbiBaZidgoE9pqa0pJTmso2tt4+IJioYfCJfs2BbVRDcaMJoBMlcnIEynbSu3rVaZuH6FMRaTTWWx2SzScr2FwNEC3AIETrdfqQJ4jMaJd46bQERyuH4KZQqORTUEIfEEab48S5Fw6I7iUmI5H4LHxcZiaSs9KZGxSZS5OySOxUj6ycp-HR2Q7MgGnTxAA */
createMachine({
  id: "counter",
  initial: "active",
  tsTypes: {} as import("./counter.typegen").Typegen0,
  context: {
    count: 0
  },
  states: {
    active: {
      on: {
        increment: {
          actions: "incrementCounter",
        },
        decrement: {
          actions: "decrementCounter",
        },
        disable: {
          target: "disabled",
        },
      },
    },
    disabled: {},
  },
}, {
  actions: {
    incrementCounter: (context, event) => {
      context.count++;
    },
    decrementCounter: (context, event) => {
      context.count--;
    }
  }
})

// global instance of the machine
const service = interpret(counterMachine).start()
const getInstance = () => {
  return service
}
export { getInstance };
