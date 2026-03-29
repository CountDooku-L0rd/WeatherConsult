import { suggests } from './suggests.js'

const customSelectButton = document.querySelector('.custom-select__trigger')
const result = document.querySelector('.result')
const loading = document.querySelector('.loading-result')
const badResult = document.querySelector('.bad-result')

export function debounce(func, ms) {
    let timeout
    return function () {
        clearTimeout(timeout)
        timeout = setTimeout(() => func.apply(this, arguments), ms)
    }
}

export function loadRecomendationsWithDelay() {
    showSpinner()
    setTimeout(() => {
        loadRecomendations()
    }, 1000)
}

export function showSpinner() {
    result.classList.add('hidden')
    badResult.classList.add('hidden')
    loading.classList.remove('hidden')
}

function hideSpinner() {
    loading.classList.add('hidden')
}

export function loadRecomendations() {
    let temperature = parseInt(
        document.querySelector('.filters__temperature-input').value
    )
    let humidity = customSelectButton.textContent.trim()
    let precipitation = document.querySelector('.filters__precipitation-checkbox').checked

    if (temperature > -50 && temperature < 50) {
        let recomendations = buildRecomendation(temperature, humidity, precipitation)
        document.querySelector('.result__clothes-describe').textContent =
            recomendations.clothes
        document.querySelector('.result__shoes-describe').textContent =
            recomendations.shoes
        document.querySelector('.result__accessories-describe').textContent =
            recomendations.accessories
        document.querySelector('.result__img').src = recomendations.picture
        result.classList.remove('hidden')
    } else {
        badResult.classList.remove('hidden')
    }
    hideSpinner()
}

function buildRecomendation(temperature, humidity, precepitation) {
    return suggests[mapTemperature(temperature)][mapHumidity(humidity)][
        mapPrecipitation(precepitation)
    ]
}

function mapTemperature(temperature) {
    if (temperature < -20) {
        return 'cold'
    } else if (temperature < 0) {
        return 'cool'
    } else if (temperature < 20) {
        return 'warm'
    } else if (temperature < 50) {
        return 'hot'
    }
}

function mapHumidity(humidity) {
    if (humidity === 'средняя') {
        return 'mediumHumidity'
    } else if (humidity === 'низкая') {
        return 'lowHumidity'
    } else {
        return 'highHumidity'
    }
}

function mapPrecipitation(precipitation) {
    if (precipitation) {
        return 'precipitation'
    } else {
        return 'noPrecipitation'
    }
}
