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

function toggleCustomSelectorList() {
    customSelectList.classList.toggle('custom-select__options-hide')
    customSelectButton.classList.toggle('custom-select__trigger-opened')
    arrow.classList.toggle('custom-select__arrow-spin')
}

function closeCustomSelect() {
    customSelectList.classList.add('custom-select__options-hide')
    customSelectButton.classList.remove('custom-select__trigger-opened')
    arrow.classList.remove('custom-select__arrow-spin')
}

document.addEventListener('click', (event) => {
    if (!event.target.closest('.custom-select')) {
        closeCustomSelect()
    }
})
customSelectButton.addEventListener('click', toggleCustomSelectorList)
checkbox.addEventListener('change', () => {
    preload()
})
input.addEventListener('input', () => {
    preload()
})
options.forEach((option) => {
    option.addEventListener('click', function () {
        buttonText.textContent = this.textContent
        toggleCustomSelectorList()
        preload()
    })
})
