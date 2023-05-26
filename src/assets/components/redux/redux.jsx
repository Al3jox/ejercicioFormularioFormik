
import {createStore} from 'redux'


// Reducer
const counterReducer = (state = 0, action) => {
    switch(action.type){
        case '@counter/incremented':
            return state + 1;
        case '@counter/decremented':
            return state - 1;
        case '@counter/reseted':
            return 0;
        default:
          throw new Error('Esta acción no está soportada')
    
    }
}

// Storage: Tiene la responsabilidad de contaner el estado de la aplicación. leer el estado de la aplicación, actualizar el estado de la aplicación 
const store = createStore(counterReducer)



// Acciones
const actionIncremented = {
    type: '@counter/incremented'
}

const actionDecremented = {
    type: '@counter/decremented'
}

const actionReseted = {
    type: '@counter/reseted'
}


// const newState = counterReducer(0, actionIncremented)
// counterReducer(newState, actionIncremented)
// counterReducer(newState, actionIncremented)


//Dispatch
store.dispatch(actionIncremented)
store.dispatch({type:'@counter/incremented'})

// Obtenemos el estado actual con getState
store.getState()

// Obtenemos el estado actual por suscripción
store.subsribe(() =>{

    console.log(store.getState())
    document.body.innerHTML = store.getState()

})