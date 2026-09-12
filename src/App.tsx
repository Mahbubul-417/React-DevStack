import { ToastContainer } from "react-toastify"
import Banner from "./components/Banner"
import Nav from "./components/Nav"
import Technologies from "./components/technologies/technologies"
import Footer from "./components/Footer";

function App() {
  

  return (
    <>
     
    <Nav></Nav>
    <Banner></Banner>
    <Technologies></Technologies>
    <ToastContainer></ToastContainer>
    <Footer></Footer>

     

    </>
  )
}

export default App
