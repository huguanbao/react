import React,{Component, Fragment} from 'react'

export default (Navcomponent)=>{
        class hehe extends Component{
             constructor() {
                 super()
                 this.state = {
                     name: '数据加载中'
                 }
             }
             componentDidMount() {
                 setTimeout(() => {
                     let name = localStorage.getItem('name')
                     this.setState({
                         name
                     })
                 }, 1000)
             }
             render(h) {
                 return(
                     <Fragment>
                    <Navcomponent name={this.state.name}></Navcomponent>
                    </Fragment>
                 )
             }
        } 
    return hehe
}