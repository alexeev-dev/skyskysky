class Screen {
  constructor(store, trigger, input) {
    this.dispatch = store.dispatch
    this.trigger = trigger
    this.input = input
  }
}

export default Screen
