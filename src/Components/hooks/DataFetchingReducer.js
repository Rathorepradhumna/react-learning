import React , {useReducer ,useEffect} from 'react';
import axios from 'axios';
const initalState = {
    loading : true,
    error : '',
    posts : []
}
const reducer = (state,action) =>{
    switch(action.type){
        case 'FETCH_SUCCESS':
            return {
                loading : false,
                error : '',
                posts : action.payload,
            }
        case 'FETCH_ERROR' :
                return {
                    loading : false,
                    posts : {},
                    error : 'something went wrong'
                }
        default : return state            
    }
}

const DataFetchingReducer = () =>{
    const [state , dispatch] = useReducer(reducer,initalState)
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(res=>{
            dispatch({type:'FETCH_SUCCESS' , payload :res.data})
        })
        .catch(error=>{
            dispatch({type:'FETCH_ERROR'})
        })
    },[])
    return(
        <div>
            {state.loading?'loading':state.posts.title}
            {state.error? state.error:null}
        </div>
    )
}

export default DataFetchingReducer;