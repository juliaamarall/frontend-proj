import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Painel from '../pages/Painel';
import Produtos from '../pages/Produtos';
import Usuarios from '../pages/Usuarios';
import FormUsuarios from '../pages/FormUsuarios';
import FormProdutos from '../pages/FormProdutos';
<<<<<<< HEAD
import VitrinePage from '../pages/Vitrine';
import HomePage from '../pages/Home';
=======
>>>>>>> c22f80b79929722e048cbceade859ccc5cc1c0c0
function AppRoutes() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/home' element={<HomePage />} />
                    <Route path='/vitrine' element={<VitrinePage />} />
                    {/* <Route path='/login' element={<Login />} /> */}
                    <Route path='/' element={<Painel />} />
                    <Route path='/produtos' element={<Produtos />} />
                    <Route path='/produtos/novo' element={<FormProdutos />} />
                    <Route path='/usuarios' element={<Usuarios />} />
                    <Route path='/usuarios/novo' element={<FormUsuarios />} />
                    <Route path='/usuarios/editar/:id' element={<FormUsuarios />} />
<<<<<<< HEAD
=======
                    
>>>>>>> c22f80b79929722e048cbceade859ccc5cc1c0c0
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRoutes;