import React, { Component } from 'react';
import {connect} from 'react-redux'
import actionCreator from './store/actionCreator'
import {bindActionCreators} from 'redux'
class Son1 extends Component {

  render() { 
    let {name,age,CHANGE_NAME} = this.props
    return ( 
      <div>
        {name}{age}
        <button onClick={CHANGE_NAME}>改名</button>
      </div>
     );
  }
}
export default connect(state=>state,(dispatch)=>{
  return bindActionCreators(actionCreator,dispatch)
})(Son1)
