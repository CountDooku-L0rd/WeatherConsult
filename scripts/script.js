const customSelectButton = document.querySelector('.custom-select__trigger')
const customSelectList = document.querySelector('.custom-select__options')
const arrow = document.querySelector('.custom-select__arrow')
const checkbox = document.querySelector('.filters__precipitation-checkbox')
const input = document.querySelector('.filters__temperature-input')

function showOrHideCustomSelectorList() {
    customSelectList.classList.toggle('custom-select__options-hide')
    customSelectButton.classList.toggle('custom-select__trigger-border-hide')
    arrow.classList.toggle('custom-select__arrow-spin')
}
function checkBox() {
    console.log('Жмяк')
}

function inPut() {
    console.log(input.value)
}
customSelectButton.addEventListener('click', showOrHideCustomSelectorList)
checkbox.addEventListener('change', checkBox)
input.addEventListener('input', inPut)
