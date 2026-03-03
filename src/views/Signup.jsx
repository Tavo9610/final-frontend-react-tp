import { useContext, useState } from "react"
import { ChatContext } from "../context/ChatContext"
import { useNavigate } from "react-router-dom"

const Signup = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [nameError, setNameError] = useState("")
  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")

  const { signup, handleUser } = useContext(ChatContext)

  const navigate = useNavigate()

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleChangeName = (e) => {
    setName(e.target.value)
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(validateFields()){
      console.log("Hola")
      
    }else{
      console.log("hola 2")
      const response = signup({ email, password, name})

    if (!response) { 
      return
    }
    handleUser ({"name" : name , "email" : email, "password" : password});
    navigate ('/')
    }
    
  }

  const validateFields = () => {
    let namemsg 
    let emailmsg 
    let passmsg
    
    if(name.length < 1){
      namemsg = "El nombre no puede estar vacio"
      setNameError (namemsg)
    } 
    else if(name.length < 3)
    {
      namemsg = "El nombre debe tener al menos 3 caracteres"
      setNameError("El nombre debe tener al menos 3 caracteres")
    } 
    else(setNameError("")) 
    if(email.length < 1){
        emailmsg = "El email no puede estar vacio"
        setEmailError(emailmsg)
    }
    else(setEmailError(""))
    if(password.length < 1){
      passmsg = "El password no puede estar vacio"
      setPasswordError(passmsg)
    }
    else if(password.length <= 6){
      passmsg = "El password debe tener al menos 6 caracteres"
      setPasswordError("El password debe tener al menos 6 caracteres") 
    }
    else(setPasswordError(""))

    return namemsg && emailmsg && passmsg
    
  }

  return (
    <section>
      <h2 className="title-login">Bienvenido, inicia sesión</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          onChange={handleChangeName}
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          onChange={handleChangeEmail}
        />
        <input
          type="password"
          placeholder="Contraseña"
          onChange={handleChangePassword}
        />
        <button>Registrarse</button>
        
          <p className="error-form">{nameError}</p>
          <p className ="error-form">{emailError}</p>
          <p className="error-form">{passwordError}</p>
                  
        
      </form>
    </section>
  )
}

export { Signup }