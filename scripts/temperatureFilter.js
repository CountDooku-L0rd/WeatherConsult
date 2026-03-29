import { loadRecomendationsWithDelay, debounce, loadRecomendations } from './utils.js'

export const setTemperatuteFilter = function () {
    const input = document.querySelector('.filters__temperature-input')
    const debouncedLoad = debounce(loadRecomendationsWithDelay, 400)
    input.addEventListener('input', () => {
        debouncedLoad()
    })
}
