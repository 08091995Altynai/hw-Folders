const innInput = document.querySelector('#innInput'),
    submitBtn = document.querySelector ('#submitBtn'),
    innResult = document.querySelector ('#innResult')

const innValid = /^\0123 \d{4}-\d{3}-\d{2}$/

submitBtn.addEventListener('click', () => {
    if(innValid.test(innInput.value)){
          innResult.innerText = 'Right' 
          innResult.style.color = 'green'
    } else {
          innResult.innerText = 'Try again' 
          innResult.style.color = 'red'
        }

})