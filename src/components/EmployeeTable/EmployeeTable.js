// ----------COMPONENT: EMPLOYEE LIST TABLE
import React, { useContext, useEffect, useState } from "react";
import "./employeetable.css";
import preloader from "../../images/preloader.jpeg";
import { GlobalContext } from "../../context/GlobalContext";

export default function EmployeeTable() {
  //en:I get users(which contains the updated list of employees) from the context API.
  //fr: je récupère users(qui contient la liste actualisée des employés) depuis l'API context.
  const { users, searchUser } = useContext(GlobalContext);
  // en:allows the selection of the display of employees by 10, 20,...'
  // fr:permet la sélection de l'affichage des employés par 10, 20,...'
  const [showCounter, setShowCounter] = useState(10);
  //en: after an unsuccessful search, the value false keeps the table of employees as is 
  // fr:après une recherche infructueuse, la valeur false permet la conservation du tableau des employés en l'état   
  const [filteredUsers, setFilteredUsers] = useState(false);
  const [firstNameSort, setFirstNameSort] = useState("none");
  const [lastNameSort, setLastnameSort] = useState("none");
  const [depSort, setDepSort] = useState("none");
  // start date
  const [sdateSort, setsDateSort] = useState("none");
  const [dateBirthsort, setBirthSort] = useState("none");
  const [sortStreet, setSortStreet] = useState("none");
  const [sortCity, setSortCity] = useState("none");
  const [sortState, setSortState] = useState("none");
  const [sortZip, setSortZip] = useState("none");

  const updateCounter = (e) => {
    const newCounter = e.target.value;
    setShowCounter(newCounter);
  };
// en:At each event (release of the keyboard key, specified below: onKeyUp={(e) => searchInList(e)}).
// fr:A chaque evenement(relachement de la touche du clavier, précisé plus bas: onKeyUp={(e) => searchInList(e)}).
//en:I associate searchInList with this event
//fr:J'associe searchInList à cet évènement 
  const searchInList = (e) => {
    //en: searchTerm retrieves the value of the input by the user
    //fr:searchTerm  récupère la valeur de la saisi par l'utilisateur
    const searchTerm = e.target.value;
    // en:setFilteredUsers takes as parameter the search for employees according to the keys entered in the search field
    //fr:setFilteredUsers prend pour paramètre la recherche des employés selon les touches saisies dans le champ de recherche
    setFilteredUsers(searchUser(searchTerm));
  };
// ---------------------------------------------------
// ----------sort by name-----------
  const sortNames = () => {
    if (firstNameSort === "none") {
      setFirstNameSort("asc");
     
      users.sort(function (user1, user2) {
        if (user1.firstname > user2.firstname) return -1;
        if (user1.firstname < user2.firstname) return 1;
      });
    } else if (firstNameSort === "asc") {
      setFirstNameSort("desc");
      users.sort(function (user1, user2) {
        if (user1.firstname > user2.firstname) return 1;
        if (user1.firstname < user2.firstname) return -1;
      });
    } else {
      setFirstNameSort("asc");
      users.sort();
    }
  };
// ----------sort by surname-----------
  const sortSurnames = () => {
    if (lastNameSort === "none") {
      setLastnameSort("asc");
      users.sort(function (user1, user2) {
        if (user1.lastname > user2.lastname) return -1;
        if (user1.lastname < user2.lastname) return 1;
      });
    } else if (lastNameSort === "asc") {
      setLastnameSort("desc");
      users.sort(function (user1, user2) {
        if (user1.lastname > user2.lastname) return 1;
        if (user1.lastname < user2.lastname) return -1;
      });
    } else {
      setLastnameSort("asc");
      users.sort();
    }
  };
// ----------sort by department-----------
  const sortDepartment = () => {
    if (depSort === "none") {
      setDepSort("asc");
      users.sort(function (user1, user2) {
        if (user1.department > user2.department) return -1;
        if (user1.department < user2.department) return 1;
      });
    } else if (depSort === "asc") {
      setDepSort("desc");
      users.sort(function (user1, user2) {
        if (user1.department > user2.department) return 1;
        if (user1.department < user2.department) return -1;
      });
    } else {
      setDepSort("asc");
      users.sort();
    }
  };
// ----------sort by start date-----------
  const sortSDate = () => {
    if (sdateSort === "none") {
      setsDateSort("asc");
      users.sort(function (user1, user2) {
        if (user1.startdate > user2.startdate) return -1;
        if (user1.startdate < user2.startdate) return 1;
      });
    } else if (sdateSort === "asc") {
      setsDateSort("desc");
      users.sort(function (user1, user2) {
        if (user1.startdate > user2.startdate) return 1;
        if (user1.startdate < user2.startdate) return -1;
      });
    } else {
      setsDateSort("asc");
      users.sort();
    }
  };
  // ----------sort by birthdate-----------
  const sortBirthDate = () => {
    if (dateBirthsort === "none") {
      setBirthSort("asc");
      users.sort(function (user1, user2) {
        if (user1.birthdate > user2.birthdate) return -1;
        if (user1.birthdate < user2.birthdate) return 1;
      });
    } else if (dateBirthsort === "asc") {
      setBirthSort("desc");
      users.sort(function (user1, user2) {
        if (user1.birthdate > user2.birthdate) return 1;
        if (user1.birthdate < user2.birthdate) return -1;
      });
    } else {
      setBirthSort("asc");
      users.sort();
    }
  };
// ----------sort by street-----------
  const sortStreetF = () => {
    if (sortStreet === "none") {
      setSortStreet("asc");
      users.sort(function (user1, user2) {
        if (user1.street > user2.street) return -1;
        if (user1.street < user2.street) return 1;
      });
    } else if (sortStreet === "asc") {
      setSortStreet("desc");
      users.sort(function (user1, user2) {
        if (user1.street > user2.street) return 1;
        if (user1.street < user2.street) return -1;
      });
    } else {
      setSortStreet("asc");
      users.sort();
    }
  };
// ----------sort by city-----------
  const sortCityF = () => {
    if (sortCity === "none") {
      setSortCity("asc");
      users.sort(function (user1, user2) {
        if (user1.city > user2.city) return -1;
        if (user1.city < user2.city) return 1;
      });
    } else if (sortCity === "asc") {
      setSortCity("desc");
      users.sort(function (user1, user2) {
        if (user1.city > user2.city) return 1;
        if (user1.city < user2.city) return -1;
      });
    } else {
      setSortCity("asc");
      users.sort();
    }
  };
// ----------sort by State-----------
  const sortStateF = () => {
    if (sortState === "none") {
      setSortState("asc");
      users.sort(function (user1, user2) {
        if (user1.state > user2.state) return -1;
        if (user1.state < user2.state) return 1;
      });
    } else if (sortState === "asc") {
      setSortState("desc");
      users.sort(function (user1, user2) {
        if (user1.state > user2.state) return 1;
        if (user1.state < user2.state) return -1;
      });
    } else {
      setSortState("asc");
      users.sort();
    }
  };
// ----------sort by zip code-----------
  const sortZipCode = () => {
    if (sortZip === "none") {
      setSortZip("asc");
      users.sort(function (user1, user2) {
        if (user1.zip > user2.zip) return -1;
        if (user1.zip < user2.zip) return 1;
      });
    } else if (sortZip === "asc") {
      setSortZip("desc");
      users.sort(function (user1, user2) {
        if (user1.zip > user2.zip) return 1;
        if (user1.zip < user2.zip) return -1;
      });
    } else {
      setSortZip("asc");
      users.sort();
    }
  };
// en: useEffect applies to every update
//fr: useEffet s'applique à chaque mise à jour
  useEffect(() => {
    setTimeout(function () {
      document.querySelector(".preloader-parent").style.display = "flex";
      document.querySelector(".preloader-parent").style.alignItems = "center";
      document.querySelector(".preloader-parent").style.justifyContent = "center";
    }, 0);
    setTimeout(function () {
      document.querySelector(".preloader-parent").style.display = "none";
    }, 1000);
  });
 
  return (
    <div className="employee-table-parent">
      <div className="data-table">
        <div className="table-header">
          <div>
            Show
            <select className="group-number" onChange={(e) => updateCounter(e)}>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
            entries
          </div>
          <div>
            <div className="search-group">
              <span>Search: </span>
              <input
                name="q"
                id="search-input"
                // en:onKeyUp works when a keyboard key is released
                // fr:onKeyUp fonctionne qd une touche du clavier est relaché
                onKeyUp={(e) => searchInList(e)}
              />
            </div>
          </div>
        </div>
        <table>
          <thead>
          <tr>
          <th>
              <div onClick={sortNames}>
                <span>First Name</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-chevron-up"
                >
                  <polyline points="18 15 12 9 6 15" />
                </svg>
              </div>
            </th>
            <th>
              <div onClick={sortSurnames}>
                <span>Last Name</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-chevron-up"
                >
                  <polyline points="18 15 12 9 6 15" />
                </svg>
              </div>
            </th>
            <th>
              <div onClick={sortSDate}>
                <span>Start Date</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-chevron-up"
                >
                  <polyline points="18 15 12 9 6 15" />
                </svg>
              </div>
            </th>
            <th>
              <div onClick={sortDepartment}>
                <span>Department</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-chevron-up"
                >
                  <polyline points="18 15 12 9 6 15" />
                </svg>
              </div>
            </th>
            <th>
              <div onClick={sortBirthDate}>
                <span>Date of Birth</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-chevron-up"
                >
                  <polyline points="18 15 12 9 6 15" />
                </svg>
              </div>
            </th>
            <th>
              <div onClick={sortStreetF}>
                <span>Street</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-chevron-up"
                >
                  <polyline points="18 15 12 9 6 15" />
                </svg>
              </div>
            </th>
            <th>
              <div onClick={sortCityF}>
                <span>City</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-chevron-up"
                >
                  <polyline points="18 15 12 9 6 15" />
                </svg>
              </div>
            </th>
            <th>
              <div onClick={sortStateF}>
                <span>State</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-chevron-up"
                >
                  <polyline points="18 15 12 9 6 15" />
                </svg>
              </div>
            </th>
            <th>
              <div onClick={sortZipCode}>
                <span>Zip Code</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-chevron-up"
                >
                  <polyline points="18 15 12 9 6 15" />
                </svg>
              </div>
            </th>
          </tr>
          </thead>
          <tbody>
            {!filteredUsers ? ( 
              filteredUsers.length === 0 ? (
                <tr>
                  <td className="nodata-cell" colSpan={9}>
                    No data available in table
                  </td>
                </tr>
              ) : (
                // renvoie le tableau des employés non filtré.
                users.map((data, index) => {
                  return (
                    <tr key={index}>
                      <td>{data.firstname}</td>
                      <td>{data.lastname}</td>
                      <td>{data.startdate}</td>
                      <td>{data.department}</td>
                      <td>{data.birthdate}</td>
                      <td>{data.street}</td>
                      <td>{data.city}</td>
                      <td>{data.state}</td>
                      <td>{data.zip}</td>
                    </tr>
                  );
                })
              )
            ) : (
      // en:returns the filtered array of employees whose data matches the string in the search field.
      // fr:renvoie le tableau filtré des employés dont les datas correspondent à la chaine de caractères dans le champ de recherche. 
              filteredUsers.map((data, index) => {
                return (
                  <tr key={index}>
                    <td>{data.firstname}</td>
                    <td>{data.lastname}</td>
                    <td>{data.startdate}</td>
                    <td>{data.department}</td>
                    <td>{data.birthdate}</td>
                    <td>{data.street}</td>
                    <td>{data.city}</td>
                    <td>{data.state}</td>
                    <td>{data.zip}</td>
                  </tr>
                );
              })
            )}
            
          </tbody>
        </table>
        <div className="preloader-parent">
              <img src={preloader} className="preloader" />
        </div>
        <div className="table-footer">
          <div className="table-footer-content">
            <div>
              Showing 1 to {showCounter} of {users ? users.length : 0} entries
            </div>
            <div>
              <button className="pagination-prev">Prev</button>
              <button className="pagination-next">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
