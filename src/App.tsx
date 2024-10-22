import { Route, Routes } from "react-router-dom"
import SignIn from "./pages/auth/sign-in/SignIn"


const App: React.FC = () => {

  return (

    <Routes>

      {/* AUTH Section*/}
        <Route path="/sign-in" element={<SignIn />} />


      {/* ROOT Section */}
    </Routes>
  )
}

export default App
