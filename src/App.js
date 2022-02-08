import Header from "./componentes/navBar.js"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { useState } from "react"
import "./estilos/estilo.css"
import CustomeProvider, {Provider} from "./componentes/Contexto"
import ItemListConteiner from "./componentes/ItemListConteiner.js"
import ItemDetailConteiner from "./componentes/ItemDetailConteiner.js"
import Carrito from "./componentes/Carrito.js."
import Footer from "./componentes/Footer.js"

function App () {
    let [show, setShow] = useState(false)
    
    const links = [
        { href: "/productos", name: "productos", id: 1 },
        { href: "/categoria/tinto", name: "Vinos Tintos", id: 2 },
        { href: "/categoria/blanco", name: "Vinos Blancos", id: 3 },
        { href: "/categorias/espumantes", name: "Espumantes", id: 4}
    ]
    
    return(
        <CustomeProvider>
            <BrowserRouter>
                <Header nombre={"Duna"} links={links} />
                <main>
                        <Routes>
                        <Route path="/" element= "Bienvenidos" />
                        <Route path="/productos" element={<ItemListConteiner></ItemListConteiner>} />
                        <Route path="/categoria/:nombre" element={<ItemListConteiner />} />
                        <Route path="/carrito" element={<Carrito />} />
                        <Route path="/producto/:id" element={<ItemDetailConteiner />} />
                        </Routes>     
                </main>
                <Footer/>
            </BrowserRouter>
        </CustomeProvider>
    )}

export default App