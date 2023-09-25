import Progress from '../Progress'
import CardPlaceholder from '../CardPlaceholder'
import RenderFields from './renderFields'
import useStep from './useSteps'

const Form = async (props, shaddow) => {
  const { currentStepFields, state } = await useStep(props, shaddow)

  return await `
  ${CardPlaceholder()}
  <div class='proposal__container'>
  ${Progress(state)}
  ${currentStepFields.fields.map((field) => RenderFields(field)).join('')}
  <div class="sender">
  <button class="ds-button custom sender__previous ds-button--secondary js--back" data-type="previous">Voltar</button>
  <button class="ds-button custom sender__next ds-button--primary js--submit" type="submit" data-type="next">Próximo</button></div>
  </div>`
}

export default Form
