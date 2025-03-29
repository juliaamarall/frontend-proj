import { useEffect, useState } from "react"
import LayoutDefault from "../layouts/LayoutDefault"
import { Table } from 'react-bootstrap'
import { Link, useNavigate } from "react-router-dom"
import Api from "../config/Api"
const Produtos = () => {
    const navigate = useNavigate();
    const [lista, setLista] = useState([]);

    async function listarProdutos() {
        const response = await fetch('https://fakestoreapi.com/products')
        const dados = await response.json()
        setLista(dados)

        // const response = await Api.get('products')
        // setLista(response.data)
    }

    async function deletarItem(id) {
        const check = confirm("Deseja deletar este produto?")
        try {
            if(check) {
                await response.delete(`products/${id}`)
                alert("Produto Deletado com Sucesso.")
                setLista()
            }
        } catch(error) {
            alert("Erro ao deletar produto. " + error.message)
        }
    }

    useEffect(() => {
        listarProdutos()
    }, []);

    return (
        <LayoutDefault>
             <div className="d-flex justify-content-between">
                <h4>Produtos</h4>
                <button onClick={() => navigate('/produtos/novo')} className="btn btn-success btn-sm">
                    Novo Produto
                </button>
            </div>
            <hr />
            <input type="text" className="form-control" placeholder="Pesquisar" />
            {lista.length === 0 && 'Não há produtos.'}
            <Table hover striped>
                <thead>
                    <tr>
                        <th>ID</th>
                        {/* <th>IMG</th> */}
                        <th>Nome</th>
                        <th>Preço</th>
                        <th>Descrição</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {lista.map((item, indice) => (
                        <tr key={indice}>
                            <td>{item.id}</td>
                            {/* <td>
                                <img src={item.image} alt={item.title} width="50" />
                            </td> */}
                            <td>{item.title}</td>
                            <td>{item.price}</td>
                            <td>{item.description}</td>
                            <td>
                                <button className="btn btn-primary">Editar</button>
                                <button className="btn btn-danger" onClick={() => deletarItem(item.id)}>Remover</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </LayoutDefault>
    )
}

export default Produtos