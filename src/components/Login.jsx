import React from 'react'
import '../styles/Login.css'
import myImage from '../assets/react.png'

function Login() {
  return (
    <div className='login_page'>

        <p className='text-center text-success display-5 pt-5'>
         <img src={myImage} width='30px' className='mb-2' />   React Seed
        </p>
        <form className='login_form'>
            <p className='text-center text-success'>Acceso</p>
            <input type='text' className='form-control mb-1' placeholder='Usuario' />
            <input type='password' className='form-control mb-2' placeholder='Contraseña' />
            <button type='submit' className='btn btn-outline-success form-control'>ACCEDER</button>
        </form>
    </div>
  )
}

export default Login