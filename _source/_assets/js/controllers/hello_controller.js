// src/controllers/hello_controller.js
import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "output" ]

  set greeting(message) {
    this.outputTarget.textContent = message
  }

  get currentHour() {
    return (
      (new Date()).getHours()
    )
  }

  connect() {
    this.greet()
  }

  greet() {
    if (this.currentHour >= 0 && this.currentHour < 12) {
      this.greeting = 'morning'
      return
    }

    if (this.currentHour >= 12 && this.currentHour < 17) {
      this.greeting = 'afternoon'
      return
    }

    this.greeting = 'evening'
  }
}
