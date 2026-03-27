const customSelectButton = document.querySelector('.custom-select__trigger')
const customSelectList = document.querySelector('.custom-select__options')
const arrow = document.querySelector('.custom-select__arrow')
const checkbox = document.querySelector('.filters__precipitation-checkbox')
const input = document.querySelector('.filters__temperature-input')
const options = document.querySelectorAll('.custom-select__option')
const buttonText = document.querySelector('.custom-select__text')

function showOrHideCustomSelectorList() {
    customSelectList.classList.toggle('custom-select__options-hide')
    customSelectButton.classList.toggle('custom-select__trigger-border-hide')
    arrow.classList.toggle('custom-select__arrow-spin')
}
function checkBox() {}

function inPut() {}
customSelectButton.addEventListener('click', showOrHideCustomSelectorList)
checkbox.addEventListener('change', checkBox)
input.addEventListener('input', inPut)
options.forEach((option) => {
    option.addEventListener('click', function () {
        options.forEach((opt) => opt.classList.remove('custom-select__option-selected'))
        this.classList.add('custom-select__option-selected')
        buttonText.textContent = this.textContent
        showOrHideCustomSelectorList()
    })
})
