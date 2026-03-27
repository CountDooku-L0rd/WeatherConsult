const customSelectButton = document.querySelector('.custom-select__trigger')
const customSelectList = document.querySelector('.custom-select__options')
const arrow = document.querySelector('.custom-select__arrow')
const checkbox = document.querySelector('.filters__precipitation-checkbox')
const input = document.querySelector('.filters__temperature-input')
const options = document.querySelectorAll('.custom-select__option')
const buttonText = document.querySelector('.custom-select__text')
const result = document.querySelector('.result')
const loading = document.querySelector('.loading-result')
let preloaderTimer = null

let temperature = input.value
let precipitation = checkbox.checked
let humidity = buttonText.textContent

function preload() {
    if (preloaderTimer) {
        clearTimeout(preloaderTimer)
    }

    result.classList.add('hidden')
    loading.classList.remove('hidden')

    preloaderTimer = setTimeout(() => {
        result.classList.remove('hidden')
        loading.classList.add('hidden')
        preloaderTimer = null
    }, 1000)
}

function showOrHideCustomSelectorList() {
    customSelectList.classList.toggle('custom-select__options-hide')
    customSelectButton.classList.toggle('custom-select__trigger-border-hide')
    arrow.classList.toggle('custom-select__arrow-spin')
}
function checkBox() {
    precipitation = checkbox.checked
    preload()
}

function inPut() {
    temperature = input.value
    preload()
}
function closeCustomSelect() {
    customSelectList.classList.add('custom-select__options-hide')
    customSelectButton.classList.remove('custom-select__trigger-border-hide')
    arrow.classList.remove('custom-select__arrow-spin')
}

document.addEventListener('click', function (event) {
    if (
        !customSelectButton.contains(event.target) &&
        !customSelectList.contains(event.target)
    ) {
        if (!customSelectList.classList.contains('custom-select__options-hide')) {
            closeCustomSelect()
        }
    }
})
customSelectButton.addEventListener('click', showOrHideCustomSelectorList)
checkbox.addEventListener('change', checkBox)
input.addEventListener('input', inPut)
options.forEach((option) => {
    option.addEventListener('click', function () {
        buttonText.textContent = this.textContent
        humidity = buttonText.textContent
        showOrHideCustomSelectorList()
        preload()
    })
})
