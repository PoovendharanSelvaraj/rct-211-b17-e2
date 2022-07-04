//Create ActionCreator functions here
import axios from "axios";
import * as types from "./actionTypes";

const getShoes = () => (dispatch) => {
  
    dispatch({type: types.GET_SHOES_DATA_REQUEST})
 
    axios.get("/shoes")
    .then(r=>dispatch({type: types.GET_SHOES_DATA_SUCCESS,payload:r.data}))
    .catch(e=>dispatch({type: types.GET_SHOES_DATA_FAILURE}))
 
 }

 export {getShoes};