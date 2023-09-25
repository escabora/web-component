import services from '../../services/api'

const useStep = async (state) => {
  const getFieldsCurrentStep = async (stepName) => {
    if (state.steps_data.length) {
      const hasStepInPersiste = state.steps_data.find(item=> item == stepName)
      if (hasStepInPersiste) {
        console.log('aqui')
        return hasStepInPersiste
      }

      //get last step
      return state.steps_data.pop()
    } else {
      const basic = await services.basic()
      console.log(basic)
      return basic
    }
  }

  const next = (next_step) => {
    getFieldsCurrentStep(state.nextStep)
  }

  const prev = (prev_step) => {
    getFieldsCurrentStep(state.prevStep)
  }

  return {
    fields: await getFieldsCurrentStep('basic'),
  }
}

export default useStep
