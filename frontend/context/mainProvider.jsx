import { createContext } from 'react'
export const mainContext = createContext()

const MainProvider = ({children}) => {

return (
    <mainContext.Provider>
    {children}
    </mainContext.Provider>
)
}

export default MainProvider