const delay = (data) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data)
    }, 300)
  })

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

export default {
  person,
  adress,
}