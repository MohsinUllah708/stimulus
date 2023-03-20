import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
   static targets=["output"]
   static values={number: Number}
  connect() {
    this.outputTarget.textContent ='hello, stimulus'
  }
}
