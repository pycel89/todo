import axios from 'axios';
const ApiSrc ="https://"

export const getToDo = async()=>
{
    const data = await axios.get(ApiSrc)
    return data.data;
}
export const newToDo = async (data) => {

    const otvet=await axios.post(ApiSrc, data)
    return otvet.data;
}
export const delToDo = async (data) => {
    const otvet=await axios.delete(ApiSrc+"/"+data )
    return otvet.data;
}
export const pathToDo = async (data) => {
    const otvet=await axios.patch(ApiSrc,data)
    return otvet.data;
}