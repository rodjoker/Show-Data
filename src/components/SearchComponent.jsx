import { useState, useEffect } from "react"

const SerchComponent = () => {
  //configurar los estados
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  //Configurar código para llamar los daos
  const URL = 'https://jsonplaceholder.typicode.com/users';

  const ShowData = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    setUsers(data)
  }
 
  const result = !search ? users : users.filter((dato) => dato.name.toLowerCase().includes(search.toLocaleLowerCase()))

  useEffect( () => {
    ShowData()
  },[])

  const searcher = (e) => {
    setSearch(e.target.value)
  } 

  return (
    <div>
      <input value={search} onChange={searcher} type="text" placeholder="Search" className="form-control" />
      <table className= 'table table-striped table-hover mt-5 shadow-lg'>
        <thead>
          <tr className="bg-curso text-bg-dark p-3 text-white">
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {result.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          )  
          )}

        </tbody>
      </table>
    </div>
  )
}
export default  SerchComponent