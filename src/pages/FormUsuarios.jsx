import { useEffect, useState } from "react"
import LayoutDefault from "../layouts/LayoutDefault"
import Api from '../config/Api'
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
            Formulário de Usuarios
            
            <Formik
                initialValues={{
                    username: '',
                    email: '',
                    password: ''
                }}
                validationSchema={validationSchema}
                onSubmit={(values, form) => {
                    salvarDados(values, form)
                }}
            >   
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