import {showSpinner, loadRecomendations, debounce} from './utils.js'

export const setPrecipitationFilter = function(){
    const checkbox = document.querySelector('.filters__precipitation-checkbox')

    checkbox.addEventListener('change', () => {
        showSpinner()
        const debouncedLoad = debounce(loadRecomendations, 1000)
        debouncedLoad()
    })
}