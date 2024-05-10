// Comportement pour le select2
const select2Control = document.querySelector('.select2-control')
const select2Dropdown = select2Control.closest('.select2').querySelector('.select2-dropdown')
const select2Options = select2Control.closest('.select2').querySelectorAll('.select2-option')
const select2Input = select2Control.closest('.select2').querySelector('input')
select2Control.addEventListener('click', function () {
  select2Control.classList.toggle('active')
  select2Dropdown.classList.toggle('show')
})
select2Options.forEach((option) => {
  option.addEventListener('click', function () {
    select2Control.querySelector('.select2-singleValue').innerText = option.innerText
    select2Input.value = option.dataset.value
    select2Control.classList.remove('active')
    select2Dropdown.classList.remove('show')
  })
})
