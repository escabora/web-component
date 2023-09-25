import Progress from '../Progress'
import CardPlaceholder from '../CardPlaceholder'
import RenderFields from './RenderFields'
import { dispatchevent } from '../../core/reducer'
import useStep from './useSteps'

const Form = async (props, shaddow) => {
  setTimeout(async function () {
    const btnSubmit = shaddow.querySelector('.sender')
    btnSubmit && btnSubmit.addEventListener('click', (ev) => {
      dispatchevent({ steps_data: [{ stepName: 'test' }] }, 'UPDATE_STEPS')
    })
  }, 30)

  const {fields} = await useStep(props)
  console.log('aqi', fields)

  return await `
  ${CardPlaceholder()}
  <div class='proposal__container'>
  ${Progress(props)}
  <form>
  ${['CPF', 'name', 'email', 'phone']
    .map((field) => RenderFields(field))
    .join('')}
  <div class="sender">
  <button class="ds-button custom sender__previous ds-button--secondary" data-type="previous">Voltar</button>
  <button class="ds-button custom sender__next ds-button--primary js--submit" type="submit" data-type="next">Próximo</button></div>
  </form></div>`
}

export default Form
