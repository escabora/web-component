const delay = (data) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data)
    }, 300)
  })

  const basic = async () => {
    return await delay({
      fileds: [],
      titlePage: [],
      nextPage: 'person',
      prevPage: 'basic',
    })
  }

  const person = async () => {
  return await delay({
    fileds: [],
    titlePage: [],
    nextPage: 'adress',
    prevPage: 'basic',
  })
}

const adress = async () => {
  return await delay({
    fileds: [],
    titlePage: [],
    nextPage: 'profession',
    prevPage: 'person',
  })
}

const profession = async () => {
  return await delay({
    fileds: [],
    titlePage: [],
    nextPage: 'adress',
    prevPage: 'customization',
  })
}

const customization = async () => {
  return await delay({
    fileds: [],
    titlePage: [],
    nextPage: 'finished',
    prevPage: 'profession',
  })
}

export default {
  basic,
  person,
  adress,
  profession,
  customization,
}