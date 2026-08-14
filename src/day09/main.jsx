// import React, { useEffect } from 'react'

// const Main = () => {

//     useEffect(()=>{
//           alert("wait some time")
//     })

//   return (
//     <div>
//          <h1>Chetan</h1>
//     </div>
//   )
// }

// export default Main


// import React, { useState  } from 'react'

// const [count , setCount]=useState(0)

// const Main = () => {
//   return (
//     <div>
//       <h1>{count}</h1>
//     </div>
//   )
// }

// export default Main
import React, { useEffect, useState } from 'react'



const Main = () => {
    const [count , setCount]=useState(0);

    useEffect(()=>{
        alert("Count Changed : "+count)
    })
  return (
    <div>
         <h1>Count : {count}</h1>

         <button onClick={()=> setCount(count+1)} >
            increment
         </button>
    </div>
  )
}

export default Main