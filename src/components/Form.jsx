import React,{Component} from 'react';
export default class Form extends Component{

    txtChangeHandler=()=>{
        console.log("event handler");
        
    }
static XYZ=({name,value,...rest})=><>
    <label htmlFor={name}>{name}
    <input style={{color:"red"}} id={name} name={name} value={value} {...rest}/>
    </label>
    </>


    render(){
        return(
        <>        
            test11
            <Form.XYZ name="name" value="val" onChange={(e)=>this.txtChangeHandler()}/>
            <Form.XYZ name="name1" value="val1" onChange={(e)=>this.txtChangeHandler()}/>
        </>
        );
    }
}