export default function Blue(props) {
  return class extends HTMLElement {
    constructor() {
      super();
      const shaddow = this.attachShadow({mode: 'open'})
      this.render(shaddow, props)
    }

    render(shaddow, props) {
      const section = document.createElement('section');
      section.innerHTML = `<div class='my-component'>
      ${props.name}
      </div>`;
      shaddow.appendChild(section)
    }
  }
}


const props = {
  images: [],
  name: 'Component'
};
customElements.define('blue-component', Blue(props))
