import Progress from '../Progress'
const Form = (props) => {
  return `
  ${Progress(props)}
  <div class=''>
  <form><div class="col-desktop-12 col-tablet-12 col-mobile-12 form-field__wrapper"><div class="ds-input"><label class="ds-input__label" for="ds-field-cpf" id="ds-label-cpf" aria-label="CPF" aria-hidden="true">CPF</label><div class="ds-input__field"><input id="ds-field-cpf" type="text" aria-labelledby="ds-label-cpf" aria-required="true" aria-invalid="false" autocomplete="on" placeholder="000.000.000-00" inputmode="numeric" pattern="[0-9.-]*" name="cpf" value="429.144.368-40"><div class="ds-input__icon ds-input__icon--right" aria-hidden="true"></div></div></div></div></form>
  ${props.name}
  </div>`
}

export default Form
