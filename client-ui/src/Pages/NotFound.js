
import React, { useContext, useEffect } from 'react'
import { ProfileContext } from '../Helper/Contexts';

export default function NotFound() {
  const {setTitle}=useContext(ProfileContext);
  const {setHeaderClass}=useContext(ProfileContext);
  useEffect(() => {
    setTitle(" اصلی")
setHeaderClass("card-primary")
  }, []);

  return (<div>NotFound</div>)
}
