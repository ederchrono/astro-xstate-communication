import { createMachine, interpret } from 'xstate';


const counterMachine = 
/** @xstate-layout N4IgpgJg5mDOIC5QGMD2BXAdgFzAJwDoBDZbASwDcwBiMzZPMAWzB0VAAdVYzzVN2IAB6IAtAEYAzAFYCADgDskgCwK5k8QE4lAJgAMygDQgAnmJ3idBHXM0A2PXL3SFey3bsBfT8bRZchCTkVNQQYAzMrNiCXDx8AkjCYsqakgR2cpaZKnr2MtLGZgiiFlY29nqSCvaZ1eLevhg4+MSklDQQZLBEAEYANmAx3Lxk-IIixSpp0pJOMwbKjpo6hWJ2CgT2mpozOtXKNrYNIH7NhJ3d-ZDUrL0DQ3GjCaATJXpWuToOlm7KLkamNYbLY7SR7TQHORHY6YVBheCJU4BVrBQaJWIjMaJV6HAjKOzSHZ6aoKfTifGrYpaTTWWx2SzScr2FzHJEtC53SAPTHPJLFHTaAiOVz4hTKFRyPaUgUEUkC8S5Fw6A7iMWspoBbnxcZiaSq9KZGxSRZ5OyUkpyWRfXIpFQ2aQs7yeIA */
createMachine({
  context: { count: 0 },
  tsTypes: {} as import("./counter.typegen").Typegen0,
  id: "counter",
  initial: "active",
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
    disabled: {
      on: {
        enable: {
          target: "active",
        },
      },
    },
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
