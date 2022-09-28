import React, {createContext, useState} from 'react'

export const GlobalContext = createContext()
export const GlobalProvider = (props) => {
    // j'associe la liste des employés à un "state array" 
    const [userListState,setUserListState] = useState([]) 
    // ?????Componentten gönderilen newItem objesini buradaki userlistState e ekleyip güncelliyor. 
    const changeUser = (newItem) => { 
        // ajoute à userListState le nouvel employé
        userListState.push(newItem)
        // mise à jour du state (de la nouvelle liste des employés).
        setUserListState(userListState)
    }
    // renvoie le tableau de la liste des employés filtrés selon la recherche utilisateur
    const searchUser = (searchTerm) => {
        if(userListState.length > 1){
            const lower = searchTerm.toLowerCase()
            const filtered = []
            if(lower !== ""){
                userListState.map(item => {

                    if(item.firstname.toLowerCase().includes(lower) || item.lastname.toLowerCase().includes(lower) || item.startdate.includes(lower) || item.department.toLowerCase().includes(lower) || item.birthdate.includes(lower) || item.street.toLowerCase().includes(lower) || item.city.toLowerCase().includes(lower) || item.state.toLowerCase().includes(lower) || item.zip.includes(lower)){
                        filtered.push(item)
                    }
                })
            }else{
                return false
            }
            return filtered             
       }       
       
     }
     return(
        // envoie un objet users et les constantes : changeUser et searchUser
         <GlobalContext.Provider value={
            { 
                users:userListState,
                changeUser,
                searchUser 
            }
            }>
            {props.children}
         </GlobalContext.Provider>
     )
 }
 
