import {React,  useContext, useEffect } from "react"
import { ProfileContext } from '../hoc/Contexts';

const Home=()=>{
const {setTitle,setHeaderClass}=useContext(ProfileContext);
useEffect(() => {
    setTitle(" اصلی")
setHeaderClass("card-primary")
  }, []);

return <div>
    صفحه اصلی
</div>

}

export default Home