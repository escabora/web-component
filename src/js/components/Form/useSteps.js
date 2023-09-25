import services from '../../services/api'
import { dispatchevent } from '../../core/reducer'

const useStep = async (state, shaddow) => {
  const getFieldsCurrentStep = async (stepName) => {
    if (state.steps_data.length) {
      const hasStepInPersiste = state.steps_data.find(item=> item == stepName)
      if (hasStepInPersiste) {
        return hasStepInPersiste
      }

      //get last step
      return state.steps_data.pop()
    } else {
      const basic = await services.basic()
      return basic
    }
  }

  setTimeout(function () {
    const next = shaddow.querySelector('.js--submit')
    const prev = shaddow.querySelector('.js--back')
    
    next && next.addEventListener('click', (ev) => {
      dispatchevent({ 
        steps_data: [
          getFieldsCurrentStep(state.nextStep)
        ] }, 'UPDATE_STEPS')
      
    })

    prev && prev.addEventListener('click', (ev) => {
      // dispatchevent({ steps_data: [{ stepName: 'test' }] }, 'UPDATE_STEPS')
      getFieldsCurrentStep(state.prevStep)
    })
  }, 1000)

  return {
   state,
   currentStepFields:  await getFieldsCurrentStep(state.currentStep || 'basic') 
  //  state.steps_data.find(item=> item == state.currentStep)
  }
}

export default useStep
