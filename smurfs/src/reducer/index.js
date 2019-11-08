import { SUBMIT_FORM, START_FETCHING, FETCH_ERROR, FETCH_SUCCESS } from "../actions";

const initialState = {
    isFetching: false,
    error: " ",
    smurfs: []
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        
        case START_FETCHING:
            return {
                ...state,
                isFetching: true,
                error: ""
            };
            
        case FETCH_SUCCESS:
            return {
                ...state,
                isfetching: false,
                error: "",
                smurfs: [...action.payload]
            };
            
        case FETCH_ERROR:
            return {
                ...state,
                isfetching: false,
                error: action.payload,
                smurfs: [...state.smurfs]
            };
            
        case SUBMIT_FORM:
            return {
                ...state,
                smurfs: [
                    ...state.smurfs,
                    {
                        name: action.payload.name.value,
                        age: action.payload.age.value,
                        height: action.payload.height.value,
                        id: Date.now()
                    }
                ]
            };    
    }

}

export default reducer;