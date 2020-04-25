import React ,{Component} from 'react'
import './model.css'
import {withRouter} from 'react-router-dom'
class model extends Component{
    render(h) {
        return(
                <div className="modal">
                     <div className='content'>
                        <p>登录状态丢失请重新登录</p>
                        <button onClick={()=>{
                            this.props.history.replace('/login')
                        }}>滚去登录</button>
                     </div>   
                </div>
            
        )
    }
}

export default withRouter(model)