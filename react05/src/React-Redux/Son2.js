import React, {
    Component
} from 'react'
import {connect} from 'react-redux'
import actionCreator  from './store/actionCreator'
import {bindActionCreators} from 'redux'
class Son2 extends Component {
    render(h) {
        let {name,age} = this.props
        return(
            <div>
                这是组件2<br/>
                姓名：{name}<br/>
                年龄：{age}<br/>
                <button onClick={()=>{
                    this.props.CHANGE_AGE()
                }}>改年龄</button>
            </div>
        )   
    }
}

export default connect(state=>state,(dispatch)=>{
    return bindActionCreators(actionCreator,dispatch)
})(Son2)