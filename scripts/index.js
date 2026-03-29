import {setHumidityFilter}from './humidityFilter.js'
import {setTemperatuteFilter} from './temperatureFilter.js'
import {setPrecipitationFilter} from './precipitationFilter.js'
import { loadRecomendationsWithDelay } from './utils.js'

setHumidityFilter()
setTemperatuteFilter()
setPrecipitationFilter()
loadRecomendationsWithDelay()
