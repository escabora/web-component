import services from '../../services/api'
import { dispatchevent } from '../../core/reducer'

const useStep = async (state, shaddow) => {

  const getFields = async (stepName) => {
    if (state.steps_data.length) {
      const hasStepInPersiste = state.steps_data.find(
        (item) => item == stepName
      )
      if (hasStepInPersiste) {
        return hasStepInPersiste
      }

      //get step name
      return state.steps_data.pop()
    }
    
    if(stepName) {
      return await services[stepName]()
    }

      const basic = await services.basic()
      return basic
  }

  const currentStepFields = await getFields(state.currentStep || 'basic')
  // if(state.currentStep != 'basic') {
  //   // dispatchevent({
  //   //   steps_data: [
  //   //     currentStepFields
  //   //   ],
  //   //   nextStep: currentStepFields.nextStep,
  //   //   prevStep: currentStepFields.prevStep,
  //   //   currentStep: currentStepFields.currentStep
  //   // }, 'UPDATE_STEPS')
  // }
  
  console.log('fields', state)

  setTimeout(function () {
    const next = shaddow.querySelector('.js--submit')
    const prev = shaddow.querySelector('.js--back')

    next &&
      next.addEventListener('click', async (ev) => {
        const fields = await getFields(state.nextStep)
        await dispatchevent(
          {
            steps_data: [ 
              ...state.steps_data,
              // ...currentStepFields.fields.reduce((acc, item) => {
              //   acc.push({
              //     ...item,
              //     value: shaddow.querySelector(`input[name="${item.name}"]`).value
              //   })
              //   return acc
              // }, []),
              fields
            ],
            nextStep: fields.nextStep,
            prevStep: fields.prevStep,
            currentStep: fields.currentStep
          },
          'UPDATE_STEPS'
        )
      })

    prev &&
      prev.addEventListener('click', async (ev) => {
        const fields = await getFields(state.prevStep)
        await dispatchevent(
          {
            steps_data: [ 
              ...state.steps_data,
              fields
            ],
            nextStep: fields.nextStep,
            prevStep: fields.prevStep,
            currentStep: fields.currentStep
          },
          'UPDATE_STEPS'
        )
      })
  }, 1000)

  return {
    state,
    currentStepFields,
  }
}

export default useStep
