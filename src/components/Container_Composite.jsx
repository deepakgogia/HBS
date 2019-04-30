import React,{Component} from 'react';
const dvalue={name1:'test1'};
const RC = React.createContext(dvalue);
export default class Container_Composite extends Component{
state={
    name:'Deepak'
}
static XYZ=()=><RC.Consumer>{(data)=><p>{data.name}</p>}</RC.Consumer>;
static XYZ1=()=><RC.Consumer>{(value)=><p>{value.name1}</p>}</RC.Consumer>;

    render(){
        return(
            <>
                <RC.Provider value={this.state}>{this.props.children}</RC.Provider> 
                {this.props.children}
                </>
        );
    }
}