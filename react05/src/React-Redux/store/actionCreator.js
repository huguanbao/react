import {CHANGE_AGE,CHANGE_NAME} from './actionType'
export default {
    [CHANGE_NAME](){
      return (dispatch)=>{
          setTimeout(()=>{
            let action = {
                type:CHANGE_NAME,
                payload:'小红'
            }
            dispatch(action)
          },1000)
      }
    },
    [CHANGE_AGE](){
        return({
            type:CHANGE_AGE,
            payload:88
        })
    }
}