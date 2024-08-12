import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [ctime, setCtime] = useState(new Date().toLocaleTimeString());
  useEffect(()=>{
    const timer = setInterval(() => {
      setCtime(new Date().toLocaleTimeString());
    }, 1000)
    return () => clearInterval(timer);  // clean up function to clear the timer when component unmounts  // eslint-disable-next-line
  },[])
  return (
    <div >
     {ctime}</div>
  )
}

export default Timer