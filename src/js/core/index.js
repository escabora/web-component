import Layout from '../layout/index'
import { slylePage } from './styled'
export default function Blue(props) {
  return class extends HTMLElement {
    constructor() {
      super()
      const shaddow = this.attachShadow({ mode: 'open' })
      const styleHead = document.createElement('style')
      styleHead.textContent = slylePage
      shaddow.appendChild(styleHead)
      this.render(shaddow, props)
    }

    render(shaddow, props) {
      const section = document.createElement('section')
      section.setAttribute('class', 'proposal')
      section.innerHTML = Layout(props)
      shaddow.appendChild(section)
    }
  }
}
