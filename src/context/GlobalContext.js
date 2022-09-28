import React, {createContext, useState} from 'react'

export const GlobalContext = createContext()
export const GlobalProvider = (props) => {
    // en: I associate the list of employees with a "state"
    // fr: j'associe la liste des employés à un "state" 
    const [userListState,setUserListState] = useState([]) 
    // en: I associate changeUser with a new employee
    //fr:  j'associe changeUser à un nouvel employé 
    const changeUser = (newItem) => { 
        // en: I add to userListState the new employee
        // fr:j'ajoute à userListState le nouvel employé
        userListState.push(newItem)
        // en: I update the status of the new list of employees
        // fr: j'actualise le statut de la nouvelle liste des employés
        setUserListState(userListState)
    }
    // en :returns array of list of employees filtered by user search or nothing
    // fr: renvoie le tableau de la liste des employés filtrés selon la recherche utilisateur ou rien 
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
        // en: sends a users object and the constants: changeUser and searchUser
        // fr :envoie un objet users et les constantes : changeUser et searchUser
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
 
