const form = document.querySelector('.js-form')
const logOutButton = document.querySelector('#log-out-user')
const mainContent = document.querySelector('.main')
let captionsList = document.querySelectorAll('.caption-item');
let unitsList = document.querySelectorAll('.unit');
const saveButton = document.querySelector('#save-data')


form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const username = document.querySelector('#js-form-username')
    const password = document.querySelector('#js-form-password')

    if (username.value === '') {
        alert('Lūdzu, ievadiet savu lietotājvārdu!')
        return
    }
    if (password.value === '') {
        alert('Lūdzu, ievadiet savu paroli!')
        return
    }
    
    document.title = 'Grocery store | ' + username.value
    
    username.value = ''
    password.value = ''
    
    form.style.display = 'none'
    logOutButton.style.display = 'block'
    mainContent.style.display = 'flex'
})

logOutButton.addEventListener('click', () => {
    document.title = 'Grocery store | Login'
    form.style.display = 'block'
    logOutButton.style.display = 'none'
    mainContent.style.display = 'none'
})

captionsList.forEach(function (item, index) {
  item.addEventListener('mouseover', function () {
     unitsList[index].classList.add('hovered');
  });
  
  item.addEventListener('mouseout', function () {
     unitsList[index].classList.remove('hovered');
  });
});

saveButton.addEventListener('click', () => {
    if (confirm('Vai tiešām vēlaties saglabāt datus?')) {
        const inputTableFields = document.querySelectorAll('table input')
        inputTableFields.forEach((inputTableField) => {
            let val = inputTableField.value
            if (val !== '') {
                const parentElem = inputTableField.parentElement
                const appendingParagraph = document.createElement('p')
                appendingParagraph.appendChild(document.createTextNode(val))
                parentElem.replaceChild(appendingParagraph, inputTableField)
            }
        })
    }
})