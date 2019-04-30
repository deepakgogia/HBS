const getData=()=>{
    return fetch("channelJson.json",{method:"GET"})
    .then(res=>res.json())
    .then(data=> data)
}

const getChannelType=()=>{
    return getData().then(data=>[...new Set(data.map(z=>z.Channel))])
}

const filters=[]
const getMultiFilter=()=>{
    return getData().then(data=>data);
}
export {getChannelType}