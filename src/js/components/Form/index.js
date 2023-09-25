import Progress from "../Progress"
const Form = (props) => {
  return `
  ${Progress(props)}
  <div class=''>
  <form><input /></form>
  ${props.name}
  </div>`
}

export default Form
