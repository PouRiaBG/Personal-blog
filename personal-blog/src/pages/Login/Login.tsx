import React from 'react';
import { MainSection } from '../../styles/elements'
import {Section} from './style'
import {useFormik } from 'formik'
import { useAuthDispatch } from '../../hooks/useAuthDispatch';
import {useHistory} from 'react-router-dom'

interface IninitailValue {
    email? : string ,
    password? : string
}

const Login = ()=>{
    
    const setLogin:any = useAuthDispatch()
    const history = useHistory()
    
    const validate = (values:IninitailValue)=>{
        const errors:IninitailValue = {}

        if (!values.email) {
            errors.email = 'Required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }
        
        if(!values.password){
            errors.password = "Required"
        }else if(values.password.length < 5){
            errors.password = "Password should be bigger than 5"
        }


        return errors;

    }

    const formik = useFormik({
        initialValues : {
            email : '',
            password : ''
        },
        validate,
        onSubmit: values => {
           if(values.email === "admin@gmail.com" || values.password === "admin"){
              setLogin(true)
              history.push("/blog")
           }
        },     
    })


    return (
        <MainSection>
           <Section>
           <form onSubmit={formik.handleSubmit} noValidate>
                <label htmlFor="email">Enter email address</label>
                   <input 
                    type="email"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    id="email"/>
                    {formik.errors.email ? <span>{formik.errors.email}</span> : null}
                <br/>
                <label htmlFor="password">Enter password</label>
                    <input
                    type="password" 
                    id="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    name="password" />
                    {formik.errors.password ? <span>{formik.errors.password}</span> : null}
                    <br/>
                <button type="submit">Submit</button>
             </form>
           </Section>
        </MainSection>
    )
}

export default Login