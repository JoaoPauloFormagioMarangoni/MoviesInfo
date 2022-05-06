import { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../../context/AuthContext'
import { Loading } from '../Loading'
import { Form, RememberInfos, LabelCheckbox } from './styles'

export function FormComponent() {
  const { loading, authenticated, handleLogin } = useAuthContext()
  const navigate = useNavigate()

  function handleSubmitForm(event: FormEvent) {
    event.preventDefault()
    handleLogin()

    if (authenticated) {
      navigate('/home')
    }
  }

  return (
    <Form onSubmit={handleSubmitForm}>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" />
      <RememberInfos>
        <LabelCheckbox htmlFor="checkbox">
          <input type="checkbox" id="checkbox" />
          <span></span>
          <label htmlFor="checkbox">Remember Credentials</label>
        </LabelCheckbox>
        <a href="#">Forgot password?</a>
      </RememberInfos>
      <LabelCheckbox htmlFor="checkboxConditions">
        <input type="checkbox" id="checkboxConditions" />
        <span></span>
        <label htmlFor="checkboxConditions" id="labelConditions">
          I hereby confirm that I have read all the Terms &amp; Conditions
          carefully and I agree with the same.
        </label>
      </LabelCheckbox>
      {loading ? <Loading /> : <input type="submit" value="Login" />}
      <div className="createAccount">
        Don't have account? <a href="#">Create account</a>
      </div>
    </Form>
  )
}
