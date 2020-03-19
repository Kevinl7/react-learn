import React, { createContext, useState } from 'react'

const AppContext = createContext()

const { Provider } = AppContext

export function AppProvider(props) {
  const [list, setList] = useState([
    {
      name: 'AAA'
    },
    {
      name: 'BBB'
    }
  ])

  return <Provider value={{list, setList}}>{props.children}</Provider>
}

export default AppContext