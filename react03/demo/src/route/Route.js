import React,{Component, Fragment} from 'react'

class Route extends Component{
    constructor(){
        super()
        this.state = {
            hashPath:'/recommend'
        }
    }
    //监听地址栏的变化
    cd = ()=>{
        let hash = window.location.hash.split('#')[1]
        console.log('hash改变了',hash);
        this.setState({hashPath:hash})
    }
    componentDidMount(){
        window.addEventListener('hashchange',this.cd)
    }
    render() {
        console.log(this);
        //path 就是地址栏路径，component是singer和recommend函数组件
        let {path,component} = this.props
        
        return(
            <Fragment>
                {this.state.hashPath===path&&component()}
            </Fragment>
        )
    }
    componentWillUnmount(){
        window.removeEventListener('hashchange', this.cd)
    }
}

export default Route