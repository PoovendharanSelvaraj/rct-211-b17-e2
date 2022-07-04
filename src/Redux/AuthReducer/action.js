//Create ActionCreator functions here
import * as types from "./actionTypes";
import axios from 'axios';



const getUser = (payload)=>(dispatch)=>{

    dispatch({type: types.LOGIN_REQUEST})

    axios({
        method:"post",
        url:"/api/login",
        baseURL:"https//reqres.in",
        data:payload,
    })
    .then(r=>{dispatch({type:types.LOGIN_SUCCESS,payload:r.data}); console.log(r.data)})
    .catch(e=>dispatch({type: types.LOGIN_FAILURE}))
}

export {getUser};