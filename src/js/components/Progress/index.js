const Progress = (props) => {

  const progess = {
    basic: {value: '25%', count: 1},
    person: {value: '50%', count: 2},
    adress: {value: '75%', count: 3},
    customization: {value: '100%', count: 4},
  }


  return `<div class="ds-stepper"><div class="ds-stepper__content" role="text" aria-label="${props.name}, passo ${props.currentStep && progess[props.currentStep].count || '1'} de 4"><p class="ds-stepper__title" aria-hidden="true">${props.name}</p><p class="ds-stepper__state" aria-hidden="true">${props.currentStep && progess[props.currentStep].count || '1'} de 4</p></div><div class="ds-stepper__progress" aria-hidden="true"><div class="ds-stepper__bar" style="width: ${props.currentStep && progess[props.currentStep].value || '25%'};"></div></div></div>`

}

export default Progress