document.addEventListener("DOMContentLoaded", () => {
  // your code here
  
  const form = document.querySelector("form")


  const renderElement = description => {
    const todoList = document.getElementById("tasks")

    const descDiv = document.createElement("li")
    const desc = document.createElement("h2")
    const deleteBtn = document.createElement("button")

    desc.textContent = description
    deleteBtn.textContent = "[x]"
    
    todoList.append(descDiv)
    descDiv.appendChild(desc)
    descDiv.appendChild(deleteBtn)

    deleteBtn.addEventListener("click", () => {
      descDiv.remove()
    })

  }

  form.addEventListener("submit", (e)=>{
    e.preventDefault()
    const input = e.target['new-task-description'].value
    
    renderElement(input)



  })
  
  

});
