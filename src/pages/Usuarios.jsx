import { useEffect, useState } from "react"
import LayoutDefault from "../layouts/LayoutDefault"
import { Table } from 'react-bootstrap'
import axios from  'axios'
import Api from "../config/Api"


const Usuarios = () => {
     const [users, setUsers] = useState([
            
        ]);
    
        async function listarUsers() {
            // const response = await fetch('https://fakestoreapi.com/users')
            // const dados = await response.json()
            // setUsers(dados)

            const response = await Api.get('users')
            setUsers(response.data)

        }
    
        useEffect(() => {
            listarUsers()
        }, []);
        console.log(users)
    return (
        <LayoutDefault>
            <h4>Usuários</h4>
            <hr />
            <input type="text" className="form-control" placeholder="Pesquisar" />
            {users.length === 0 && 'Não há usuários.'}
            <Table hover striped>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>EMAIL</th>
                        <th>USUÁRIO</th>
                        <th>SENHA</th>
                        <th>TELEFONE</th>
                        <th>CIDADE</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((item, indice) => (
                        <tr>
                            <td>{item.id}</td>
                            
                            <td>{item.email}</td>
                            <td>{item.username}</td>
                            <td>{item.password}</td>
                            <td>{item.phone}</td>
                            <td>{item.address.city}</td>
                            <td>
                                <button className="btn btn-primary">Editar</button>
                                <button className="btn btn-danger">Remover</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </LayoutDefault>
    )
}

export default Usuarios