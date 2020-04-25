import React, {
    Component
} from 'react'
import {connect} from 'react-redux'
import actionCteator from './store/actionCreator'
import {bindActionCreators} from 'redux'

class Son1 extends Component {
    render(h) {
        return(
            <div>
                这是组件1<br/>
                姓名：{this.props.name}<br/>
                年龄：{this.props.age}<br/>
                <button onClick = {()=>{
                    this.props.CHANGE_NAME()
                }}>改名</button>
                <hr/>
            </div>
        )
    }
}

export default connect(state=>state,(dispatch)=>{
    return bindActionCreators(actionCteator,dispatch)
})(Son1)