import React, { createContext, useState } from 'react'

export const Previdlege = createContext();
export const PrevidlegeProvider = ({children})=>{

    let [logs,setLogs] = useState(false);




    return <Previdlege.Provider 
    value={{
        logs,
        setLogs
    }}
    >{children}</Previdlege.Provider>
}
