document.addEventListener("DOMContentLoaded", () => {

  document.addEventListener('submit', (e) => {
    e.preventDefault()
    change()
    
  })
});



function change() {
  let li = document.createElement('li')
  let description = document.querySelector('#new-task-description')
  li.textContent = description.value
  document.querySelector('#tasks').appendChild(li)

  const text = li.textContent
  console.log(text)
  
  
}