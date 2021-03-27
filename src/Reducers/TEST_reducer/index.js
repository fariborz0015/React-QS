
const initialState={
    text:"hellooooooo"
}
function TEST_reducer(state=initialState,action) {

    switch (action.type) {
        case "TEST":
            
           return {
               ...state,
               text: action.text
           }
    
        default:
            return state
    }
}

export default TEST_reducer