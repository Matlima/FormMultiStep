import React from 'react'

const UserForm = () => {
  return (
    <div>
        <div className="form-control">
            <label htmlFor="name">Nome:</label>
            <input type="text" name="name" placeholder="Digite o seu nome" required/>
        </div>
        <div className="form-control">
            <label htmlFor="email">E-mail:</label>
            <input type="text" name="email" placeholder="Digite o seu e-mail" required/>
        </div>
    </div>
  )
}

export default UserForm