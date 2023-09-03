import React, { useContext } from "react"
import { ProfileContext } from "../Layout/Layout"

const Home=()=>{
const {settitle,setHeaderClass}=useContext(ProfileContext);

settitle(" اصلی")
setHeaderClass("card-primary")
return <div>
    صفحه اصلی
</div>

}

export default Home