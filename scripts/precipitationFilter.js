import * as utils from './utils.js'

const checkbox = document.querySelector('.filters__precipitation-checkbox')

checkbox.addEventListener('change', () => {
    utils.preload()
    const debouncedLoad = utils.debounce(utils.loadRecomendations, 1000)
    debouncedLoad()
})