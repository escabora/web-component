const RenderFields = (field) => {
  switch (field) {
    case (field = 'CPF'):
      return `<div class="col-desktop-12 col-tablet-12 col-mobile-12 form-field__wrapper"><div class="ds-input"><label class="ds-input__label" for="ds-field-cpf" id="ds-label-cpf" aria-label="CPF" aria-hidden="true">CPF</label><div class="ds-input__field"><input id="ds-field-cpf" type="text" aria-labelledby="ds-label-cpf" aria-required="true" aria-invalid="false" autocomplete="on" placeholder="000.000.000-00" inputmode="numeric" pattern="[0-9.-]*" name="cpf" value="${field.value || ''}"><div class="ds-input__icon ds-input__icon--right" aria-hidden="true"></div></div></div></div>`
      break
    case (field = 'name'):
      return `<div class="col-desktop-12 col-tablet-12 col-mobile-12 form-field__wrapper"><div class="ds-input"><label class="ds-input__label" for="ds-field-lead_name" id="ds-label-lead_name" aria-label="Nome completo" aria-hidden="true">Nome completo</label><div class="ds-input__field"><input id="ds-field-lead_name" type="text" aria-labelledby="ds-label-lead_name" aria-required="true" aria-invalid="false" autocomplete="on" placeholder="Antonio Coutinho" name="lead_name" value="${field.value || ''}"><div class="ds-input__icon ds-input__icon--right" aria-hidden="true"></div></div></div></div>`
      break
    case (field = 'email'):
      return `<div class="col-desktop-12 col-tablet-12 col-mobile-12 form-field__wrapper"><div class="ds-email"><div class="ds-email__field"><div class="ds-input"><label class="ds-input__label" for="ds-field-email" id="ds-label-email" aria-label="Email" aria-hidden="true">Email</label><div class="ds-input__field"><input id="ds-field-email" type="email" aria-labelledby="ds-label-email" aria-required="true" aria-invalid="false" autocomplete="off" name="email" control="[object Object]" placeholder="Coloque seu email aqui" required="" validators="[object Object]" spellcheck="false" value="${field.value || ''}"><div class="ds-input__icon ds-input__icon--right" aria-hidden="true"></div></div></div></div></div></div>`
      break

    case (field = 'phone'):
      return `<div class="col-desktop-12 col-tablet-12 col-mobile-12 form-field__wrapper"><div class="ds-input"><label class="ds-input__label" for="ds-field-cellphone_number" id="ds-label-cellphone_number" aria-label="Celular" aria-hidden="true">Celular</label><div class="ds-input__field"><input id="ds-field-cellphone_number" type="tel" aria-labelledby="ds-label-cellphone_number" aria-required="true" aria-invalid="false" autocomplete="mobile tel-national" name="cellphone_number" placeholder="(00) 00000 0000" value="${field.value || ''}"><div class="ds-input__icon ds-input__icon--right" aria-hidden="true"></div></div></div></div>`
      break
  }
}

export default RenderFields
