import { Formik, Form, Field, ErrorMessage } from 'formik'

function Formulario(){


    const enviarDatos = (formValues, {resetForm}) =>{
        console.log(formValues);
        resetForm();
    }


    return(
        <>
            <Formik
                initialValues={{
                    name:"",
                    email:"",
                    phone:"",
                    address:"",
                    pass:"",
                }}
                onSubmit={enviarDatos}
            >

                <Form>

                    <label > Ingrese su nombre </label>
                    <Field name="name" type="text"/>

                    <label > Ingrese su email </label>
                    <Field name="email" type="email"/>

                    <label > Ingrese su teléfono </label>
                    <Field name="phone" type="text"/>

                    <label > Ingrese su dirección </label>
                    <Field name="address" type="text"/>

                    <label > Ingrese su contraseña </label>
                    <Field name="pass" type="password"/>


                    <button type='submit'> Registrar </button>

                </Form>


            </Formik>
        </>
    )
}

export default Formulario;