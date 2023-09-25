import Layout from '../layout/index'
import { slylePage } from './configure/styled'
import configureFonts from './configure/fonts'
import useReducer from './reducer'

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

      this.initialState = {
        steps_data: [],
        info_page: '',
        ...props,
      }

      document.addEventListener('UPDATE_STATE', ({detail}) => {
        const newState = useReducer(detail.action, this.initialState, detail.state, props)
          console.log('newState', newState)
          
          window.removeEventListener("UPDATE_STATE", false);
          this.render(shaddow, newState)
      })

      this.render(shaddow, this.initialState)
    }

    render(shaddow, state) {

      console.log('render', state)
      if(shaddow.querySelector('.proposal')) shaddow.querySelector('.proposal').remove()
      const section = document.createElement('section')
      section.setAttribute('class', 'proposal')
      section.innerHTML = Layout(state, shaddow)
      shaddow.appendChild(section)
    }
  }
}
