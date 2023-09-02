import React, { useContext } from "react"
import { ProfileContext } from "../Layout/Layout"
import { b64e,b64d } from "../Helper/hashHelper";

const Home=()=>{
const {settitle,setHeaderClass}=useContext(ProfileContext);
const _hashValue=b64e("salam");
localStorage.setItem("v1",_hashValue)
localStorage.setItem("v2",b64d(_hashValue))
settitle(" اصلی")
setHeaderClass("card-primary")
return <div>
    صفحه اصلی
</div>

}

export default Home