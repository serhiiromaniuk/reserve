
import React, { Component } from "react"
import InputAdornment from "@mui/material/InputAdornment"

import Paper from "@mui/material/Paper"
import { FormControl, Input, InputLabel, Button } from "@mui/material"
import Snackbar from "@mui/material/Snackbar"
import SnackbarContent from "@mui/material/SnackbarContent"
import IconButton from "@mui/material/IconButton"
import axios from 'axios'

// import { api, opt, makeLogin } from '../../../Utils'
// import { CustomParagraph } from '../../../Styles'
import { NavLink } from "react-router-dom"

class Login extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      email: "",
      password: "",
      passwordConfrim: "",
      hidePassword: true,
      hidePasswordConfirm: true,
      error: null,
      errorOpen: false
    }
    // this.delta = this.delta.bind(this)
    this.submitLogin = this.submitLogin.bind(this)
  }


  errorClose = e => {
    this.setState({
      errorOpen: false
    })
  }

  handleChange = name => e => {
    this.setState({
      [name]: e.target.value
    })
  }

  passwordMatch = () => this.state.password === this.state.passwordConfrim

  showPassword = () => {
    this.setState(prevState => ({ hidePassword: !prevState.hidePassword }))
  }

  showPasswordConfirm = () => {
    this.setState(prevState => ({ hidePasswordConfirm: !prevState.hidePasswordConfirm }))
  }

  isValid = () => {
    if (this.state.email === "" || this.state.password === "" || this.state.passwordConfrim === "") {
      return false
    }
    return true
  }

  isValidRegister = () => {
    return true
  }

  submitLogin = (e) => {
    e.preventDefault()
    if (!this.passwordMatch()) {
      this.setState({
        errorOpen: true,
        error: "Password are not equal"
      })
    } else {
      if (this.state.password.length <= 6) {
        this.setState({
          errorOpen: true,
          error: "Incorrect password"
        })
      } else {
        // const url = api.post.auth.user.login
        const data = {
            email:    this.state.email,
            password: this.state.password
        }
        let externalState = this
    
        // eslint-disable-next-line no-undef
        axios.post(url, data, opt)
          .then(
            function(res) {
            //   makeLogin(res.data.ok)
            }
          ).catch(
            function(err) {
              if (!!err.response.data.failed) {
                externalState.setState({
                  errorOpen: true,
                  error: err.response.data.failed
                })
              }
            }
          )
      }
    }

  }

  render() {

    return (
      <>
        <Paper >

          <form
            onSubmit={() => this.submitLogin}
          >
            <div>
              <p>Login into Service App</p>
            </div>
            <FormControl required fullWidth margin="normal">
              <InputLabel htmlFor="email" >
                Email Address
              </InputLabel>
              <Input
                name="email"
                type="email"
                autoComplete="email"

                disableUnderline={true}
                onChange={this.handleChange("email")}
              />
            </FormControl>

            <FormControl required fullWidth margin="normal">
              <InputLabel htmlFor="password">
                Password
              </InputLabel>
              <Input
                name="password"
                autoComplete="password"
                disableUnderline={true}
                onChange={this.handleChange("password")}
                type={this.state.hidePassword ? "password" : "input"}
                endAdornment={
                  this.state.hidePassword ? (
                    <InputAdornment position="end">
                      {/* <VisibilityOffTwoToneIcon
                        fontSize="default"
                        className={classes.passwordEye}
                        onClick={this.showPassword}
                      /> */}
                    </InputAdornment>
                  ) : (
                    <InputAdornment position="end">
                      {/* <VisibilityTwoToneIcon
                        fontSize="default"
                        className={classes.passwordEye}
                        onClick={this.showPassword}
                      /> */}
                    </InputAdornment>
                  )
                }
              />
            </FormControl>

            <FormControl required fullWidth margin="normal">
              <InputLabel htmlFor="passwordConfrim">
                Confrim Password
              </InputLabel>
              <Input
                name="passwordConfrim"
                autoComplete="passwordConfrim"
                disableUnderline={true}
                onClick={this.state.showPassword}
                onChange={this.handleChange("passwordConfrim")}
                type={this.state.hidePasswordConfirm ? "password" : "input"}
                endAdornment={
                  this.state.hidePasswordConfirm ? (
                    <InputAdornment position="end">
                      {/* <VisibilityOffTwoToneIcon
                        fontSize="default"
                        className={classes.passwordEye}
                        onClick={this.showPasswordConfirm}
                      /> */}
                    </InputAdornment>
                  ) : (
                    <InputAdornment position="end">
                      {/* <VisibilityTwoToneIcon
                        fontSize="default"
                        className={classes.passwordEye}
                        onClick={this.showPasswordConfirm}
                      /> */}
                    </InputAdornment>
                  )
                }
              />
            </FormControl>
            <Button
              disabled={!this.isValid()}
              disableRipple
              fullWidth
              variant="outlined"
              type="submit"
              onClick={this.submitLogin}
            >
              Login
            </Button>

            <NavLink to='/register'>
              <Button
              // disabled={!this.isValidRegister()}
              disableRipple
              fullWidth
              variant="outlined"
              type="button"
              >
              Register
              </Button>
            </NavLink>

          </form>

          {this.state.error ? (
            <Snackbar
              variant="error"
              key={this.state.error}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center"
              }}
              open={this.state.errorOpen}
              onClose={this.errorClose}
              autoHideDuration={10000}
            >
              <SnackbarContent
                message={
                  <div>
                    <span style={{ marginRight: "8px" }}>
                      {/* <ErrorIcon fontSize="large" color="error" /> */}
                    </span>
                    <span> {this.state.error} </span>
                  </div>
                }
                action={[
                  <IconButton
                    key="close"
                    aria-label="close"
                    onClick={this.errorClose}
                  >
                    {/* <CloseIcon color="error" /> */}
                  </IconButton>
                ]}
              />
            </Snackbar>
          ) : null}
        </Paper>
      </>
    )
  }
}

export default Login

const defaults = {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '26px',
    border: '3px solid #FF002E'
}

const InputField = {
    position: 'absolute',
    width: '500px',
    left: '124px',
    top: '481px',
    ...defaults
}


const Icon = () => <div style={{backgroundImage: 'url(/images/search_button.svg)'}}></div>

// export default function Search() {
//     return (
//         <div>
//             <TextField label="Search" style={InputField}/>
//         </div>
//     )
// }
