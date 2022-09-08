import React,{createContext} from 'react'

export const GlobalContext = createContext()
export const GlobalProvider = (props) => {
    return(
        <GlobalContext.Provider value={{
            adi:'Hakan', soyadi:'Binici' }}>
                {props.children}
        </GlobalContext.Provider>
    )
}