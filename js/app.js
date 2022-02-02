// console.log(`DANGER!!! This is not a test.`)

const txtBx = document.getElementById('text-box')
// console.log(txtBx)
const subBtn = document.getElementById('submit-button')
// console.log(subBtn)
const list = document.getElementById('todo-list')
// console.log(list)

subBtn.addEventListener('click', function(evt){
  const newLi = document.createElement('li')
  if(txtBx.value !== ""){
  newLi.textContent = txtBx.value
  list.appendChild(newLi)
  txtBx.value = ""
  }
})