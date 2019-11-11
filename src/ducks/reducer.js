const initialState = {
    name: '',
    address: '',
    city: '',
    state: '',
    zipcode: 0,
    houseImg: '',
    mortgage: 0,
    rent: 0
}

const UPDATE_STEP1 = "UPDATE_STEP1"
const UPDATE_STEP2 = "UPDATE_STEP2"
const UPDATE_STEP3 = "UPDATE_STEP3"
const CANCEL_ALL = "CANCEL_ALL"

function reducer(state = initialState, action) {
    console.log("REDUCER HIT: Action ->", action);
    switch(action.type) {
        case UPDATE_STEP1:
            return {
                ...state,
                name: action.payload,
                address: action.payload,
                city: action.payload,
                state: action.payload,
                zipcode: action.payload
            }
        case UPDATE_STEP2:
            return {
                ...state,
                houseImg: action.payload
            }
        case UPDATE_STEP3:
            return {
                ...state,
                mortgage: action.payload,
                rent: action.payload
            }
        case CANCEL_ALL:
            return {
                name: '',
                address: '',
                city: '',
                state: '',
                zipcode: 0,
                houseImg: '',
                mortgage: 0,
                rent: 0
            }
        default: return state;
    }
}

export function updateStep1(name, address, city, state, zipcode){
    return {
        type: UPDATE_STEP1,
        payload: {name, address, city, state, zipcode}
    }
}

export function updateStep2(houseImg) {
    return {
        type: UPDATE_STEP2,
        payload: houseImg
    }
}

export function updateStep3(mortgage, rent) {
    return {
        type: UPDATE_STEP3,
        payload: {mortgage, rent}
    }
}

export function cancelAll(initialState) {
    return {
        type: CANCEL_ALL,
        payload: initialState
    }
}

export default reducer;