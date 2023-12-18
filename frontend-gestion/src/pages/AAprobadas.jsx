import {useForm} from "react-hook-form"
import styled from "styled-components";
//const { createProxyMiddleware } = require('http-proxy-middleware');

export function Aprobadas() {
  const {register, formState:{ errors }, watch, handleSubmit} = useForm({
      defaultValues: {
        nombre: "alberto san martin",
        nombreAsignatura: "Calculo 3",
      }
  });

  const onSubmit = (data) => {
    console.log(data);    
  }
  return (
  <Container>
    <div>
      <center>
        <h2>Asignaturas Aprobadas Formulario</h2>
      </center><br/><br/>
      <p>Nombre: {watch('nombre')}</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Nombre asignatura</label>
          <input type="text" {...register('nombreAsignatura', {required:true, maxLength:15})}></input><br/>
          {errors.nombreAsignatura && errors.nombreAsignatura.type === "required" && <span>Este campo es requerido</span>}
          {errors.nombreAsignatura && errors.nombreAsignatura.type === "maxLength" && <span>Maximo 15 caracteres</span>}
        </div>
        <input type="submit" value="Enviar"></input>
      </form>
    </div>
  </Container>);
}
const Container =styled.div`
   height:100vh;
`