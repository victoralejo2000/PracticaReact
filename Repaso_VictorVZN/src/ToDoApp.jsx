import { useState, useEffect } from "react"

function App() {
  // const [loading, setLoading] = useState(false)
  const [input, setInput] = useState('')
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "comida",
      completed: false
    },
    {
      id: "2",
      title: "futbol",
      completed: true
    },
    {
      id: "3",
      title: "estudiar",
      completed: false
    }
  ])

  const fetchTodos = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts'
    const response = await fetch(url)
    const data = await response.json()

    const newData = data.map(task => {
      return { ...task, completed: false }
    })

    setTasks(newData)
  }

  useEffect(() => {
    fetchTodos()
  }, [])

  const handleChange = (event) => {
    // console.log('estoy escribiendo')
    // console.log(event.target.value)
    const value = event.target.value
    setInput(value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Agregando tarea!!!')
    console.log(crypto.randomUUID())

    // setLoading(true)

    const newTodo = {
      id: crypto.randomUUID(),
      title: input,
      completed: false
    }

    console.log(newTodo)

    setTasks([...tasks, newTodo])

    setInput('')

    // setTimeout(() => {
    //   setLoading(false)
    // }, 2000)
  }

  const handleRemoveTask = (id) => {
    console.log('eliminando tarea', id)

    const newTasks = tasks.filter(task => task.id !== id)

    console.log(newTasks)

    setTasks(newTasks)

    // ['😜','😍','🤩'].filter(emoti => emoti !== '😍')
  }

  const handleCompleted = () => {
    console.log('Completado ....');
    const isCheck = event.target.checked
    const idSelected = event.target.dataset.id

    console.log(isCheck, idSelected)
    

    const newTasks = tasks.map(task =>{
      console.log("Task ID: ",task.id)
      console.log("ID Select: ",idSelected)
      if(task.id===idSelected){
        return {... task, completed: isCheck}
      }
      return task
    })
    setTasks(newTasks)
  }

  return (
    <>
      <main>
        <h1>TODO APP</h1>

        {/* {input} */}

        {/* {JSON.stringify(tasks)} */}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="¿Qué deseas hacer hoy?"
            required
            value={input}
            onChange={handleChange}
          />
          {/* <input type="submit" value={loading ? 'Agregando' : 'ADD'} /> */}
          <input type="submit" value="ADD" />
        </form>

        <section>
          <ul>
            {tasks.map((task) => {
              return (
                <li key={task.id}>
                  <input
                    type="checkbox"
                    checked={task.completed}
                    data-id={task.id}
                    onChange={handleCompleted}
                  />
                  <span
                    style={{
                      color: task.completed ? 'red': 'black',
                      textDecoration: task.completed ? 'line-through' : 'none',
                      textDecorationThickness: task.completed ? '4px' : '0px'
                    }}
                  >
                    {task.title}
                  </span>
                  <button onClick={() => handleRemoveTask(task.id)}>❌</button>
                </li>
              )
            })}
          </ul>
        </section>
      </main>
    </>
  )
}

export default App