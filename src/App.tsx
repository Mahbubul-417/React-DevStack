import { ToastContainer } from "react-toastify"
import Banner from "./components/Banner"
import Nav from "./components/Nav"
import Technologies from "./components/technologies/technologies"


function App() {
  

  return (
    <>
     
    <Nav></Nav>
    <Banner></Banner>
    <Technologies></Technologies>
    <ToastContainer></ToastContainer>

     

    </>
  )
}

export default App
