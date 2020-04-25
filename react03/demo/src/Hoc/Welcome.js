import React,{Component, Fragment} from 'react'
import Hoc from './hoc'
class Welcome extends Component{
    
    render(h) {
        return(
            <Fragment>
                <div className='welcome'>
                    欢迎：{this.props.name}
                </div>
            </Fragment>
        )   
    }
}

export default Hoc(Welcome)