import React,{Component} from 'react';

const CreateComp = ({data,change}) => 
<>
<div className="mainDiv">
        <p>{data.Channel}</p> 
        <input type="checkbox" />
        </div>
</>

export default class ChannelData extends Component{

change=()=>{
    console.log("")
}
    render(){
        //console.log(this.props.chdata);
        return(
            <>
                {this.props.chdata.map((data)=>{return <CreateComp key={data.Key} data={data} change={(e)=>this.change(e)} bgcolor="grey"/>})}
            </>
        );
    }
}