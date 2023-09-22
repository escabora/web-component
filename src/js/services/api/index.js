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
      nextPage: 'adress',
      prevPage: 'person',
    })
  }

  const person = async () => {
  return await delay({
    fileds: [],
    titlePage: [],
    nextPage: 'adress',
    prevPage: 'person',
  })
}

const adress = async () => {
  return await delay({
    fileds: [],
    titlePage: [],
    nextPage: 'adress',
    prevPage: 'person',
  })
}

const profession = async () => {
  return await delay({
    fileds: [],
    titlePage: [],
    nextPage: 'adress',
    prevPage: 'person',
  })
}

const customization = async () => {
  return await delay({
    fileds: [],
    titlePage: [],
    nextPage: 'adress',
    prevPage: 'person',
  })
}

export default {
  basic,
  person,
  adress,
  profession,
  customization,
}