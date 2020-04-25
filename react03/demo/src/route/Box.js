import React,{ Component, Fragment } from "react"
import Route from './Route'
import Link from './Link'
function Singer(){
    return(
        <div>这里是Singer组件</div>
    )
}
function Recommend(){
    return (
        <div>这里是Recommend组件</div>
    )
}
 class Box extends Component{
    render() {
        return(
            <Fragment>
                <h4>这是手写路由</h4>
                 <Link to='/singer'>歌手</Link>
                 <Link to='/recommend'>推荐</Link>
                 <Route path='/singer' component={Singer}></Route>
                 <Route path='/recommend' component={Recommend}></Route>
            </Fragment>
        )
    }

 }

 export default Box