const Progress = (props) => {

  return `<div class="ds-stepper"><div class="ds-stepper__content" role="text" aria-label="${props.name}, passo 1 de 4"><p class="ds-stepper__title" aria-hidden="true">${props.name}</p><p class="ds-stepper__state" aria-hidden="true">1 de 4</p></div><div class="ds-stepper__progress" aria-hidden="true"><div class="ds-stepper__bar" style="width: 25%;"></div></div></div>`

}

export default Progress