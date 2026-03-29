import {showSpinner, debounce, loadRecomendations} from './utils.js'

export const setHumidityFilter = function() {
    const options = document.querySelectorAll('.custom-select__option')
    const customSelectorButtonText = document.querySelector('.custom-select__text')
    const customSelectList = document.querySelector('.custom-select__options')
    const arrow = document.querySelector('.custom-select__arrow')
    const customSelectButton = document.querySelector('.custom-select__trigger')

    customSelectButton.addEventListener('click', ()=>{
        customSelectList.classList.toggle('custom-select__options-hide')
        customSelectButton.classList.toggle('custom-select__trigger-opened')
        arrow.classList.toggle('custom-select__arrow-spin')
    })

    document.addEventListener('click', (event) => {
        if (!event.target.closest('.custom-select')) {
            closeCustomSelectorList()
        }
    })

    function closeCustomSelectorList() {
        customSelectList.classList.add('custom-select__options-hide')
        customSelectButton.classList.remove('custom-select__trigger-opened')
        arrow.classList.remove('custom-select__arrow-spin')
    }

    options.forEach((option) => {
        option.addEventListener('click', function () {
            customSelectorButtonText.textContent = this.textContent
            closeCustomSelectorList()
            showSpinner()
            const debouncedLoad = debounce(loadRecomendations, 1000)
            debouncedLoad()
        })
    })
}