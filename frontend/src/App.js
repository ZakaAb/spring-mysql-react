import React from 'react'
import axios from 'axios'

function App() {
  const [data, setData] = React.useState({
    users: [],
    id: 0,
    name: '',
    email: '',
    password: '',
  })

  const getData = () => {
    axios.get('http://localhost:8080/api/').then((res) => {
      setData({
        users: res.data,
        id: 0,
        name: '',
        email: '',
        password: '',
      })
    })
  }

  React.useEffect(() => {
    getData()
  }, [])

  const handleSubmit = (e, id) => {
    e.preventDefault()
    if (id === 0) {
      axios
        .post('http://localhost:8080/api/', {
          name: data.name,
          email: data.email,
          password: data.password,
        })
        .then((res) => getData())
    } else {
      axios
        .put(`http://localhost:8080/api/`, {
          id,
          name: data.name,
          email: data.email,
          password: data.password,
        })
        .then((res) => getData())
    }
  }

  const handleEdit = (id) => {
    axios.get(`http://localhost:8080/api/${id}`).then((res) => {
      setData({
        ...data,
        id: res.data.id,
        name: res.data.name,
        email: res.data.email,
        password: res.data.password,
      })
    })
  }

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/api/${id}`).then((res) => {
      getData()
    })
  }

  return (
    <div className="App">
      <div className="container">
        <div className="row" style={{ marginTop: 25 }}>
          <div className="col s6">
            <form onSubmit={(e) => handleSubmit(e, data.id)}>
              <div class="input-field col s12">
                <i class="material-icons prefix">person</i>
                <input
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                  value={data.name}
                  type="text"
                  id="autocomplete-input"
                  class="autocomplete"
                />
                <label for="autocomplete-input">name</label>
              </div>
              <div class="input-field col s12">
                <i class="material-icons prefix">email</i>
                <input
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                  value={data.email}
                  type="email"
                  id="autocomplete-input"
                  class="autocomplete"
                />
                <label for="autocomplete-input">Email</label>
              </div>
              <div class="input-field col s12">
                <i class="material-icons prefix">vpn_key</i>
                <input
                  onChange={(e) =>
                    setData({ ...data, password: e.target.value })
                  }
                  value={data.password}
                  type="password"
                  id="autocomplete-input"
                  class="autocomplete"
                />
                <label for="autocomplete-input">Password</label>
              </div>
              <button
                class="btn waves-effect waves-light right"
                type="submit"
                name="action"
              >
                Submit
                <i class="material-icons right">send</i>
              </button>
            </form>
          </div>
          <div className="col s6">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Password</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>

              <tbody>
                {data.users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                    <td>
                      <button
                        onClick={(e) => handleEdit(user.id)}
                        class="btn waves-effect waves-light"
                        type="submit"
                        name="action"
                      >
                        <i class="material-icons">edit</i>
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={(e) => handleDelete(user.id)}
                        class="btn waves-effect waves-light"
                        type="submit"
                        name="action"
                      >
                        <i class="material-icons">delete</i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
