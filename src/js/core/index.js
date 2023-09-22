import Form from '../components/Form'
export default function Blue(props) {
  return class extends HTMLElement {
    constructor() {
      super();
      const shaddow = this.attachShadow({mode: 'open'})
      this.render(shaddow, props)
    }

    render(shaddow, props) {
      const section = document.createElement('section');
      section.innerHTML = Form(props);
      shaddow.appendChild(section)
    }
  }
}
