import { useEffect, useState } from "react"
import LayoutDefault from "../layouts/LayoutDefault"
import Api from '../config/Api'
<<<<<<< HEAD
import { useNavigate, useParams } from "react-router-dom"
import { Form, Formik, ErrorMessage, Field } from "formik"
import * as Yup from 'yup'

const FormUsuarios = () => {
    
    const navigate = useNavigate();
    const params = useParams();

    const [data, setData] = useState({
            username: '',
            email: '',
            password: ''
    })

    async function salvarDados(values, form) {
        if(params.id) {
            // Editar
            await Api.put(`users/${params.id}`, values);
            alert("Usuário Atualizado com Sucesso.")
            form.resetForm()
        } else {
            // Salvar
            await Api.post('users', values);
            alert("Usuário Salvo com Sucesso.")
            form.resetForm()
        }
        navigate('/usuarios')
    }

    async function getData() {
        if(params.id) {
            const response = await Api.get(`users/${params.id}`);
            setData(response.data)
        }
    }

=======
import { useNavigate } from "react-router-dom"
import { Form, Formik, ErrorMessage } from "formik"
import * as Yup from 'yup'
const FormUsuarios = () => {
    const navigate = useNavigate();
    
    async function salvarDados(values, form) {
        await Api.post('users', values);
        alert("Usuário Salvo com Sucesso.")
        form.resetForm()
    }
    
>>>>>>> c22f80b79929722e048cbceade859ccc5cc1c0c0
    const validationSchema = Yup.object().shape({
        username: Yup.string().required('Campo Obrigatório'),
        email: Yup.string().email('E-mail inválido').required('Campo Obrigatório'),
        password: Yup.string().required('Campo Obrigatório')
        .min(6, 'Informe pelo menos 6 caracteres.')
        .max(10, 'Informe no máximo 10 caractere')
    })

    useEffect(() => {
<<<<<<< HEAD
        getData();
    }, []);

    console.log(data)
    return (
        <LayoutDefault>
            Formulário de Usuarios
            <Formik
                enableReinitialize
                initialValues={data}
=======
    }, []);

    return (
        <LayoutDefault>
            Formulário de Usuarios
            
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
                            <label htmlFor="">Nome</label>
                            <Field 
                                type="text" 
                                className="form-control" 
                                name="username" 
                            />
=======
                {({ handleChange }) => (
                    <Form>
                        <div>
                            <label htmlFor="">Nome</label>
                            <input type="text" className="form-control" name="username" onChange={handleChange} />
>>>>>>> c22f80b79929722e048cbceade859ccc5cc1c0c0
                            <div className="error">
                                <ErrorMessage name="username" />
                            </div>
                        </div>
                        <div className="mt-3">
                            <label htmlFor="">E-mail</label>
<<<<<<< HEAD
                            <input 
                                type="text" 
                                className="form-control" 
                                name="email" 
                                value={values.email}
                                onChange={handleChange} 
                            />
=======
                            <input type="text" className="form-control" name="email" onChange={handleChange} />
>>>>>>> c22f80b79929722e048cbceade859ccc5cc1c0c0
                            <div className="error">
                                <ErrorMessage name="email" />
                            </div>
                        </div>
                        <div className="mt-3">
                            <label htmlFor="">Senha</label>
<<<<<<< HEAD
                            <input 
                                type="password" 
                                className="form-control" 
                                name="password" 
                                value={values.password}
                                onChange={handleChange} 
                            />
=======
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
                                onClick={() => navigate('/usuarios')}>
                                Cancelar
                            </button>
                        </div>

                    </Form>
                )}
            </Formik>


          
        </LayoutDefault>
    )
}
export default FormUsuarios