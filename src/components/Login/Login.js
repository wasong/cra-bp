import React from 'react'
import { Link } from 'react-router'
import RaisedButton from 'material-ui/RaisedButton'

const Login = (props) => {
  const { auth } = props.route
  return (
    <div>
      <RaisedButton label="Login" onClick={auth.login} />
      <p><Link to="/">Back</Link></p>
    </div>
  )
}

export default Login
