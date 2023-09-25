const delay = (data) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data)
    }, 300)
  })

const basic = async () => {
  return await delay({
    fileds: [
      { name: 'CPF', value: '' },
      { name: 'name', value: '' },
      { name: 'email', value: '' },
      { name: 'phone', value: '' },
    ],
    titlePage: 'Vamos lá?',
    nextStep: 'person',
    prevStep: 'basic',
    currentStep: 'basic',
  })
}

const person = async () => {
  return await delay({
    fileds: [
      { name: 'CPF', value: '' },
      { name: 'name', value: '' },
      { name: 'email', value: '' },
      { name: 'phone', value: '' },
    ],
    titlePage: [],
    nextStep: 'adress',
    prevStep: 'basic',
    currentStep: 'person',
  })
}

const adress = async () => {
  return await delay({
    fileds: [
      { name: 'CPF', value: '' },
      { name: 'name', value: '' },
      { name: 'email', value: '' },
      { name: 'phone', value: '' },
    ],
    titlePage: [],
    nextStep: 'profession',
    prevStep: 'person',
    currentStep: 'adress',
  })
}

const customization = async () => {
  return await delay({
    fileds: [
      { name: 'CPF', value: '' },
      { name: 'name', value: '' },
      { name: 'email', value: '' },
      { name: 'phone', value: '' },
    ],
    titlePage: [],
    nextStep: 'finished',
    prevStep: 'profession',
    currentStep: 'customization',
  })
}

export default {
  basic,
  person,
  adress,
  customization,
}
