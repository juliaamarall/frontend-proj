import { useEffect, useState } from "react"
import LayoutDefault from "../layouts/LayoutDefault"
import Api from '../config/Api'
<<<<<<< HEAD
import { useNavigate, useParams } from "react-router-dom"
import { Form, Formik, ErrorMessage, Field } from "formik"
import * as Yup from 'yup'

const FormProdutos = () => {
    
    const navigate = useNavigate();
    const params = useParams();

    const [data, setData] = useState({
            title: '',
            price: '',
            description: ''

    })

    async function salvarDados(values, form) {
        if(params.id) {
            // Editar
            await Api.put(`users/${params.id}`, values);
            alert("Produto Atualizado com Sucesso.")
            form.resetForm()
        } else {
            // Salvar
            await Api.post('users', values);
            alert("Produto Salvo com Sucesso.")
            form.resetForm()
        }
        navigate('/produtos')
    }

    async function getData() {
        if(params.id) {
            const response = await Api.get(`users/${params.id}`);
            setData(response.data)
        }
    }

    const validationSchema = Yup.object().shape({
        title: Yup.string().required('Campo Obrigatório'),
        price: Yup.string().required('Campo Obrigatório'),
        description: Yup.string().required('Campo Obrigatório')
        .min(6, 'Informe pelo menos 6 caracteres.')
        .max(200, 'Informe no máximo 200 caractere')
    })

    useEffect(() => {
        getData();
    }, []);

    console.log(data)
    return (
        <LayoutDefault>
            Formulário de Produtos
            <Formik
                enableReinitialize
                initialValues={data}
=======
import { useNavigate } from "react-router-dom"
import { Form, Formik, ErrorMessage } from "formik"
import * as Yup from 'yup'
const FormProdutos = () => {
    const navigate = useNavigate();
    
    async function salvarDados(values, form) {
        await Api.post('users', values);
        alert("Produto Salvo com Sucesso.")
        form.resetForm()
    }
    
    const validationSchema = Yup.object().shape({
        username: Yup.string().required('Campo Obrigatório'),
        email: Yup.string().email('E-mail inválido').required('Campo Obrigatório'),
        password: Yup.string().required('Campo Obrigatório')
        .min(6, 'Informe pelo menos 6 caracteres.')
        .max(10, 'Informe no máximo 10 caractere')
    })

    useEffect(() => {
    }, []);

    return (
        <LayoutDefault>
            Formulário de Produtos
            
            <Formik
                initialValues={{
                    username: '',
                    email: '',
                    password: ''
                }}
>>>>>>> c22f80b79929722e048cbceade859ccc5cc1c0c0
                validationSchema={validationSchema}
                onSubmit={(values, form) => {
                    salvarDados(values, form)
                }}
            >   
<<<<<<< HEAD
                {({ handleChange, values }) => (
                    <Form>
                        <div>
                            <label htmlFor="">Título</label>
                            <Field 
                                type="text" 
                                className="form-control" 
                                name="title" 
                            />
                            <div className="error">
                                <ErrorMessage name="title" />
                            </div>
                        </div>
                        <div className="mt-3">
                            <label htmlFor="">Preço</label>
                            <input 
                                type="number" 
                                className="form-control" 
                                name="price" 
                                value={values.price}
                                onChange={handleChange} 
                            />
                            <div className="error">
                                <ErrorMessage name="price" />
                            </div>
                        </div>
                        <div className="mt-3">
                            <label htmlFor="">Descrição</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="description" 
                                value={values.description}
                                onChange={handleChange} 
                            />
=======
                {({ handleChange }) => (
                    <Form>
                        <div>
                            <label htmlFor="">Nome</label>
                            <input type="text" className="form-control" name="username" onChange={handleChange} />
                            <div className="error">
                                <ErrorMessage name="username" />
                            </div>
                        </div>
                        <div className="mt-3">
                            <label htmlFor="">E-mail</label>
                            <input type="text" className="form-control" name="email" onChange={handleChange} />
                            <div className="error">
                                <ErrorMessage name="email" />
                            </div>
                        </div>
                        <div className="mt-3">
                            <label htmlFor="">Senha</label>
                            <input type="password" className="form-control" name="password" onChange={handleChange} />
>>>>>>> c22f80b79929722e048cbceade859ccc5cc1c0c0
                            <div className="error">
                                <ErrorMessage name="password" />
                            </div>
                        </div>

                        <div className="mt-3 d-flex justify-content-end">
                            <button className="btn btn-success btn-sm">Salvar</button>
                            &nbsp;
                            <button 
                                type="button"
                                className="btn btn-warning btn-sm"
                                onClick={() => navigate('/produtos')}>
                                Cancelar
                            </button>
                        </div>

                    </Form>
                )}
            </Formik>


          
        </LayoutDefault>
    )
}
<<<<<<< HEAD
export default FormProdutos;
=======
export default FormProdutos
>>>>>>> c22f80b79929722e048cbceade859ccc5cc1c0c0
