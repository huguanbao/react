import React,{Component, Fragment} from 'react'
import Welcome from './Welcome'
import Bye from './Bye'
class Box extends Component{
    render() {
        return(
            <Fragment>
                <h4>这里是高阶组件</h4>
                <Welcome></Welcome>
                <Bye></Bye>
            </Fragment>
        )   
    }
}

export default Box