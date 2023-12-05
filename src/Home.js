import { useState } from "react"



function Home(){
const [testState, setTestState]=useState(false)

return(
    <div>
        <h1>This sucks</h1>
        <h2 onClick={(e)=>{setTestState(true)}}>Todo<input type="checkbox"/></h2>
       {testState?<p>true</p>:<p>false</p>}

    </div>
)


}




export default Home