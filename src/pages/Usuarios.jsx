import { useEffect, useState } from "react"
import LayoutDefault from "../layouts/LayoutDefault"
<<<<<<< HEAD
import Api from '../config/Api'
import { Link, useNavigate } from "react-router-dom"
const Usuarios = () => {

    const[lista, setLista] = useState([])
    const navigate = useNavigate()
    
    async function getLista() {
        // const response = await fetch('https://fakestoreapi.com/users')
        // const dados = await response.json()
        // setLista(dados)

        const response = await Api.get('users')
        setLista(response.data)
    }

    async function deletarItem(id) {
        const check = confirm("Deseja deletar este usuário?")
        try {
            if(check) {
                await Api.delete(`users/${id}`)
                alert("Usuário Deletado com Sucesso.")
                getLista()
            }
        } catch(error) {
            alert("Erro ao deletar usuário. " + error.message)
        }
    }

    useEffect(() => {
       getLista() 
    }, []);

    return (
        <LayoutDefault>
            
            <div className="d-flex justify-content-between">
                <h4>Usuarios</h4>
                <button onClick={() => navigate('/usuarios/novo')} className="btn btn-success btn-sm">
                    Novo Usuário
                </button>
            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Endereço</th>
                        <th>
                            Ações
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {lista.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td>
                                {item.adress && item.address.street}, 
                                {item.adress && item.address.suite}, 
                                {item.adress && item.address.city}, 
                                {item.adress && item.address.zipcode}
                            </td>
                            <td>
                                <button type="button" className="btn btn-primary" onClick={() => navigate(`/usuarios/editar/${item.id}`)}>Editar</button>
                                <button type="button" className="btn btn-danger" onClick={() => deletarItem(item.id)}>Excluir</button>
=======
import { Table } from 'react-bootstrap'
import axios from  'axios'
import Api from "../config/Api"
import { useNavigate, useNavigation } from "react-router-dom"


const Usuarios = () => {
    const navigate = useNavigate();
     const [users, setUsers] = useState([
            
        ]);
    
        async function listarUsers() {
            // const response = await fetch('https://fakestoreapi.com/users')
            // const dados = await response.json()
            // setUsers(dados)

            const response = await Api.get('users')
            setUsers(response.data)

        }
        
        // -------------- DELETAR USUARIOS --------------------
        async function deletarItem(id) {
            const check = confirm("DESEJA DELETAR ESTE USUÁRIO? ")
            try {
                if(check === true){
                    await Api.delete(`users/${id}`)
                    alert("USUÁRIO DELETADO COM SUCESSO.")
                    listarUsers()
                }
              
            } catch (error) {
                alert("Erro ao deletar usuário" + error.message)
            }
        }
    
        useEffect(() => {
            listarUsers()
        }, []);
        console.log(users)
    return (
        <LayoutDefault>
            <div className="d-flex justify-content-between">
            <h4>Usuários</h4> 
            <button className="btn btn-success" onClick={() => navigate('/usuarios/novo')}>
                Novo Usuário
                </button>  
            </div>
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
                        {/* <th>CIDADE</th> */}
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
                            {/* <td>{item.address.city}</td> */}
                            <td>
                                <button className="btn btn-primary" onclick={() => navigate(`/usuarios/editar/${item.id}`)}>Editar</button>
                                <button className="btn btn-danger" onClick={() =>  deletarItem(item.id)}>Remover</button>
>>>>>>> c22f80b79929722e048cbceade859ccc5cc1c0c0
                            </td>
                        </tr>
                    ))}
                </tbody>
<<<<<<< HEAD
            </table>
=======
            </Table>
>>>>>>> c22f80b79929722e048cbceade859ccc5cc1c0c0
        </LayoutDefault>
    )
}

export default Usuarios