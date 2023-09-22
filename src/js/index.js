import Blue from './core'

const props = {
  images: [],
  name: 'Component'
};
customElements.define('blue-component', Blue(props))
