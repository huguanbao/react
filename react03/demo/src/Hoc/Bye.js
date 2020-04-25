import React, { Component,Fragment} from 'react'
import Hoc from './hoc'
class Bye extends Component {
   
    render(h) {
        return ( 
        <Fragment>
            <div className = 'bye' >
            再见：{this.props.name} 
                </div> 
        </Fragment>
        )
    }
}

export default Hoc(Bye)