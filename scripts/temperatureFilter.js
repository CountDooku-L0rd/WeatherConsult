import * as utils from './utils.js'

const input = document.querySelector('.filters__temperature-input')

input.addEventListener('input', () => {
    utils.preload()
    const debouncedLoad = utils.debounce(utils.loadRecomendations, 1000)
    debouncedLoad()
})