import { Route, Routes } from "react-router-dom"
import SignUp from "./pages/auth/sign-up/SignUp"
import SignIn from "./pages/auth/sign-in/SignIn"


const App: React.FC = () => {

  return (

    <Routes>

      {/* AUTH Section*/}
        <Route index path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />


      {/* ROOT Section */}
    </Routes>
  )
}

export default App
