import {composeWithDevTools} from 'redux-devtools-extension'
import {createStore} from 'redux'
import 'es6-promise/auto'

import Skyscrapper from './skyscrapper'
import rootReducer from './reducers'

const store = createStore(rootReducer, composeWithDevTools())
const skyscrapper = new Skyscrapper(store)

skyscrapper.init()
