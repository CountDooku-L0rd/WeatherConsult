import * as utils from './utils.js'
const options = document.querySelectorAll('.custom-select__option')
const buttonText = document.querySelector('.custom-select__text')

options.forEach((option) => {
    option.addEventListener('click', function () {
        buttonText.textContent = this.textContent
        utils.toggleCustomSelectorList()
        utils.preload()
        const debouncedLoad = utils.debounce(utils.loadRecomendations, 1000)
        debouncedLoad()
    })
})