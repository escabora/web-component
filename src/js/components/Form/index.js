import Progress from '../Progress'
import CardPlaceholder from '../CardPlaceholder'
import RenderFields from './RenderFields'
import { dispatchvent } from '../../core/reducer'

const Form = (props, shaddow) => {
  setTimeout(function () {
    const btnSubmit = shaddow.querySelector('.sender')
    btnSubmit.addEventListener('click', (ev) => {
      console.log('here click')
      dispatchvent({ steps_data: [{ stepName: 'test' }] }, 'UPDATE_STEPS')
    })
    shaddow.querySelector('.sender').click()
  }, 80)

  return `
  ${CardPlaceholder()}
  <div class='proposal__container'>
  ${Progress(props)}
  <form>
  ${['CPF', 'name', 'email', 'phone']
    .map((field) => RenderFields(field))
    .join('')}
  <div class="sender"><button class="ds-button custom sender__next ds-button--primary js--submit" type="submit" data-type="next" disabled="">Próximo</button></div>
  </form></div>`
}

export default Form
