import { useState, useEffect } from "react"

const SerchComponent = () => {
  //configurar los estados
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
 

 
  const URL = 'http://localhost:3000/api';

  const ShowData = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    setUsers(data)
  }
 
  const result = !search ? users : users.filter((user) => user.message_text.toLowerCase().includes(search.toLocaleLowerCase()))

  useEffect( () => {
    ShowData()
  },[])

  const searcher = (e) => {
    setSearch(e.target.value)
  } 

  return (
    <div>
      <input value={search} onChange={searcher} type="text" placeholder="Search message text" className="form-control" />
      <table className= 'table table-striped table-hover mt-5 shadow-lg'>
        <thead>
          <tr className="bg-curso text-bg-dark p-3 text-white">
            <th>message text</th>
            <th>sender name</th>
            <th>message date</th>
            <th>sender number</th>
            <th>received number</th>
          </tr>
        </thead>
        <tbody>
          {result.map((user) => (
            <tr key={user.id}>
              <td>{user.message_text}</td>
              <td>{user.sender_name}</td>
              <td>{user.message_date}</td>
              <td>{user.sender_number}</td>
              <td>{user.received_number}</td>
            </tr>
          )  
          )}

        </tbody>
      </table>
    </div>
  )
}
export default  SerchComponent