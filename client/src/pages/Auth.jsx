import { useState } from 'react'
import axios from 'axios'

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import { NavLink, useNavigate } from 'react-router-dom'

const initialFormData = {
  email: '',
  password: ''
}

function Auth({ isLogin, setUser }) {
  const [formData, setFormData] = useState(initialFormData)
  const navigate = useNavigate()
  const [errorMessage, setErrorMessage] = useState('')

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const route = isLogin ? 'login' : 'register'

      const res = await axios.post(`/auth/${route}`, formData)

      setFormData({ ...initialFormData })

      setUser(res.data)
      setErrorMessage('')
      navigate('/')
    } catch (error) {
      setErrorMessage(error.response.data.message)
    }
  }

  return (
    <Form onSubmit={handleSubmit} className="pt-5">
      <h2 className="text-center">{isLogin ? 'Log In' : 'Register'}</h2>

      {errorMessage && <p className="text-center text-danger mt-3">{errorMessage}</p>}

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          type="email"
          placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          type="password"
          placeholder="Password" />
      </Form.Group>

      <div className="d-flex auth-controls mb-3">
        <NavLink to="/register">Register</NavLink>
        <span>/</span>
        <NavLink to="/login">Login</NavLink>
      </div>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default Auth