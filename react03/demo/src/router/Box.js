import React,{Component, Fragment} from 'react'
import {HashRouter,BrowserRouter,Switch,Redirect, Link,Route,NavLink} from 'react-router-dom' 
import './style.css'
function Singer(props){
    console.log('歌手',props);
    
    return(
        <div>这是歌手组件</div>
    )
}
function Recommend() {
    return ( 
        <div>这是推荐组件</div>
    )
}
class Box extends Component{
    render(h) {
        return(
            <Fragment>
                <h4>这里是插件路由</h4>
                <HashRouter>
                    {/* <Link to='/singer'>歌手</Link>
                    <Link to='/recommend'>推荐</Link> */}
                    
                    <NavLink to='/singer/:id' activeClassName='selected' className='nav'>歌手</NavLink>
                    <NavLink to ='/recommend' activeClassName='selected' className='nav'>推荐</NavLink>
                    <NavLink to ='/search' activeClassName='selected' className='nav'>搜索</NavLink>
                    <Route path='/singer' component={Singer}></Route>
                    <Redirect from='/' to='/search'></Redirect>
                    <Route path='/recommend' component={Recommend}></Route>
                    <Route path='/search' component={()=>{
                         return(
                             <div>这里是搜索组件</div>
                             
                         )
                        
                     }}></Route>
                     
                </HashRouter>
            </Fragment>
        )
    }
}

export default Box