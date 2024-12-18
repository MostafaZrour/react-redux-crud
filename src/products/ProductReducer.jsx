import { FETCH_REQUEST , FETCH_SUCCESS , FETCH_ERROR } from "./ActionTypes";

const initialeState = {
    loading : false ,
    products : [],
    error : false ,
}

export const productReducer = (state = initialeState , action) => {
    switch(action.type){
        case FETCH_REQUEST :
            return {...state , loading : true };
        case FETCH_SUCCESS :
            return {...state , loading : false , products : action.payload };
        case FETCH_ERROR :
            return {...state , loading : false , error : true };
        default :
            return state ;
    }
};
