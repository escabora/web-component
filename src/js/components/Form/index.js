import Progress from '../Progress'
import CardPlaceholder from '../CardPlaceholder'
import RenderFields from './RenderFields'

const Form = (props) => {
  return `
  ${CardPlaceholder()}
  <div class='proposal__container'>
  ${Progress(props)}
  <form>
  ${
    ['CPF', 'name','email', 'phone'].map(field=> RenderFields(field)).join('')
  }
  <div class="sender"><button class="ds-button custom sender__next ds-button--primary ds-button--disabled" type="submit" data-type="next" disabled="">Próximo</button></div>
  </form></div>`
}

export default Form
