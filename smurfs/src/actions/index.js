import axios from "axios";

export const SUBMIT_FORM = "SUBMIT_FORM";
export const START_FETCHING = "START_FETCHING";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";

export const submitForm = e => dispatch {
    e.preventdefault()
    dispatch({type: SUBMIT_FORM, payload: e.target})
    axios.post("http://localhost:3333/smurfs", {
        name: e.target.name.value,
        age: e.target.age.value,
        height: e.target.height.value,
        id: Date.now()
    })
    .then (res => console.log(res));
    .catch(err => console.log(err));
}

