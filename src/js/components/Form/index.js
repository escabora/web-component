import Progress from '../Progress'
import CardPlaceholder from '../CardPlaceholder'
import RenderFields from './RenderFields'
import useStep from './useSteps'

const Form = async (props, shaddow) => {
  const { currentStepFields, state } = await useStep(props, shaddow)

  console.log(currentStepFields)

  return await `
  ${CardPlaceholder()}
  <div class='proposal__container'>
  ${Progress(state)}
  ${
    currentStepFields.fields && currentStepFields.fields.map((field) => RenderFields(field)).join('')
  }
  <div class="sender">
  <button class="ds-button custom sender__previous ds-button--secondary js--back" data-type="previous">Voltar</button>
  <button class="ds-button custom sender__next ds-button--primary js--submit" type="submit" data-type="next">Próximo</button></div>
  </div>`
}

export default Form
