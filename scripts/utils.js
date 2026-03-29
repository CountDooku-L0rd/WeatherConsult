const customSelectList = document.querySelector('.custom-select__options')
const arrow = document.querySelector('.custom-select__arrow')
const customSelectButton = document.querySelector('.custom-select__trigger')
const result = document.querySelector('.result')
const loading = document.querySelector('.loading-result')

customSelectButton.addEventListener('click', toggleCustomSelectorList)
document.addEventListener('click', (event) => {
    if (!event.target.closest('.custom-select')) {
        closeCustomSelect()
    }
})

export function toggleCustomSelectorList() {
    customSelectList.classList.toggle('custom-select__options-hide')
    customSelectButton.classList.toggle('custom-select__trigger-opened')
    arrow.classList.toggle('custom-select__arrow-spin')
}

export function closeCustomSelect() {
    customSelectList.classList.add('custom-select__options-hide')
    customSelectButton.classList.remove('custom-select__trigger-opened')
    arrow.classList.remove('custom-select__arrow-spin')
}

export function debounce(func, ms){
    let timeout;
    return function() {
        clearTimeout(timeout)
        timeout = setTimeout(() => func.apply(this, arguments), ms)
    }
}

export function preload() {
    result.classList.add('hidden')
    loading.classList.remove('hidden')
}

export function loadRecomendations(){
    let temperature = document.querySelector('.filters__temperature-input').value
    let humidity = customSelectButton.textContent
    let precipitation = document.querySelector('.filters__precipitation-checkbox').checked

    
    
    result.classList.remove('hidden')
    loading.classList.add('hidden')
}
