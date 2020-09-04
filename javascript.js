class App {
  constructor() {}

  /**
   * Init sets up the listener on the input field.
   */
  init = () => {
    document
      .getElementById('user-input')
      .addEventListener('input', this.handler)
  }

  handler = (event) => {
    const text = event.target.value

    console.log('the text:', text)
  }
}

;(function () {
  const app = new App()
  app.init()
})()
