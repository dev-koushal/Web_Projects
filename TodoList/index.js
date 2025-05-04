//  blocking inspect
// document.oncontextmenu = () =>{
//     alert("Do not try to right click")
//     return false;
// }

// document.onkeydown = e=>{
//     if (e.key == "F12"){
//         alert("Don't try to inspect element")
//         return false;
//     }
//     if(e.ctrlKey && e.key =="u"){
//         alert("Don't try to copy page element")
//         return false;
//     }
// }

const checkBoxList = document.querySelectorAll('.custom-checkbox')
const inputFields = document.querySelectorAll('.goal-input')
const errorLabel = document.querySelector('.error-label')
const progressBar = document.querySelector('.progress-bar')
const progressValue = document.querySelector('.progress-value')

checkBoxList.forEach((checkbox) => {
  checkbox.addEventListener('click', (e) => {
    const allGoalsAdded = [...inputFields].every(function (input) {
      return input.value
    })

    if (allGoalsAdded) {
      checkbox.parentElement.classList.toggle('completed')
      progressValue.style.width = '33.33%'
    } else {
        progressBar.classList.add('show-error')
    }
  })
})

inputFields.forEach((input) => {
    input.addEventListener('focus', () => {
        progressBar.classList.remove('show-error')
    })
})