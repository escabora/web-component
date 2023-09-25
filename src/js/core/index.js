import Layout from '../layout/index'
import { slylePage } from './configure/styled'
import configureFonts from './configure/fonts'

export default function Blue(props) {
  return class extends HTMLElement {
    constructor() {
      super()
      const shaddow = this.attachShadow({ mode: 'open' })
      const styleHead = document.createElement('style')
      styleHead.textContent = slylePage
      shaddow.appendChild(styleHead)
      configureFonts({
        fonts: {
          ItauText: [300, 400, 700, 900],
          ItauDisplay: [300, 700, 900],
        },
        fontDisplay: 'auto',
      })

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
