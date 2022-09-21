// import './login.css'
import { React, useState } from 'react'
// import ReactDOM from 'react-dom'
// import './App.css'
import './addNewStudent.css'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CHeaderBrand,
  CHeader,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { AppSidebar, AppFooter, AppHeader } from '../../../components/index'
import axios from 'axios'
// import { useNavigate } from 'react-router-dom'
// const navigate = useNavigate()
const AddNewStudent = () => {
  const [name, setName] = useState('')
  const [id, setId] = useState('')
  const [branch, setBranch] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confPassword, setConfPassword] = useState('')

  const handleChange = (e) => {
    setName(e.target.value)
  }

  const handleAgeChange = (e) => {
    setId(e.target.value)
  }

  const handleBranchChange = (e) => {
    setBranch(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleIdChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleConfPasswordChange = (e) => {
    setConfPassword(e.target.value)
  }
  // below function will be called when user
  // click on submit button .
  const handleSubmit = (e) => {
    e.preventDefault()

    // axios.post('http://localhost/apii/users/save', inputs).then(function (response) {
    //   console.log(response.data)
    //   navigate('/Dashboard')
    // })

    if (password != confPassword) {
      alert('password Not Match')
    } else {
      alert(
        'A form was submitted with Name :"' +
          name +
          '" ,Id :"' +
          id +
          '" ,Branch :"' +
          branch +
          '", and Email :"' +
          email +
          '"',
      )
    }
    e.preventDefault()
  }
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div>
          <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
            <CContainer>
              <CRow className="justify-content-center">
                <CCol md={8}>
                  <CCardGroup>
                    <CCard>
                      <CCardBody>
                        <CForm>
                          <h3 className="centerText">Add New Student</h3>
                          <CRow>
                            <CCol md={6}>
                              <CInputGroup className="mb-3">
                                {/* <CInputGroupText>
                                  <CIcon icon={cilUser} />
                                </CInputGroupText> */}
                                <InputGroup.Text>Id</InputGroup.Text>
                                <CFormInput
                                  type="text"
                                  name="id"
                                  placeholder="Id"
                                  autoComplete="Id"
                                  onChange={(e) => setId(e.target.value)}
                                  value={id}
                                />
                              </CInputGroup>
                            </CCol>
                            <CCol>
                              <CInputGroup className="mb-4">
                                {/* <CInputGroupText>
                                  <CIcon icon={cilLockLocked} />
                                </CInputGroupText> */}
                                <InputGroup.Text>Name</InputGroup.Text>
                                <CFormInput
                                  type="text"
                                  name="Name"
                                  placeholder="Name"
                                  autoComplete="name"
                                  onChange={(e) => setName(e.target.value)}
                                  value={name}
                                />
                              </CInputGroup>
                            </CCol>
                          </CRow>
                          <CRow>
                            <CCol md={6}>
                              <CInputGroup className="mb-3">
                                {/* <CInputGroupText>
                                  <CIcon icon={cilUser} />
                                </CInputGroupText> */}
                                <InputGroup.Text>Branch</InputGroup.Text>
                                <CFormInput
                                  type="text"
                                  name="branch"
                                  placeholder="Branch"
                                  autoComplete="branch"
                                  onChange={(e) => setBranch(e.target.value)}
                                  value={branch}
                                />
                              </CInputGroup>
                            </CCol>
                            <CCol>
                              <CInputGroup className="mb-4">
                                {/* <CInputGroupText>
                                  <CIcon icon={cilLockLocked} />
                                </CInputGroupText> */}
                                <InputGroup.Text>Email</InputGroup.Text>
                                <CFormInput
                                  type="email"
                                  name="email"
                                  placeholder="Email"
                                  autoComplete="email"
                                  onChange={(e) => setEmail(e.target.value)}
                                  value={email}
                                />
                              </CInputGroup>
                            </CCol>
                          </CRow>
                          <CRow>
                            <CCol md={6}>
                              <CInputGroup className="mb-3">
                                {/* <CInputGroupText>
                                  <CIcon icon={cilUser} />
                                </CInputGroupText> */}
                                <InputGroup.Text>Password</InputGroup.Text>
                                <CFormInput
                                  type="password"
                                  name="password"
                                  placeholder="Password"
                                  autoComplete="password"
                                  onChange={(e) => setPassword(e.target.value)}
                                  value={password}
                                />
                              </CInputGroup>
                            </CCol>
                            <CCol>
                              <CInputGroup className="mb-4">
                                {/* <CInputGroupText>
                                  <CIcon icon={cilLockLocked} />
                                </CInputGroupText> */}
                                <InputGroup.Text>Confirm Password</InputGroup.Text>
                                <CFormInput
                                  type="password"
                                  name="confpassword"
                                  placeholder="Re-type Password"
                                  autoComplete="confPassword"
                                  onChange={(e) => setConfPassword(e.target.value)}
                                  value={confPassword}
                                />
                              </CInputGroup>
                            </CCol>
                          </CRow>
                          {/* <InputGroup>
                            <InputGroup.Text>With textarea</InputGroup.Text>
                            <Form.Control as="textarea" aria-label="With textarea" />
                          </InputGroup> */}

                          {/* <CCol md={4}>
                            <CInputGroup className="mb-3">
                              <CInputGroupText>
                                <CIcon icon={cilUser} />
                              </CInputGroupText>
                              <CFormInput
                                type="text"
                                name="username"
                                placeholder="Username"
                                autoComplete="username"
                                // onChange={(e) => setUsername(e.target.value)}
                                // value={username}
                              />
                            </CInputGroup>
                            <CInputGroup className="mb-4">
                              <CInputGroupText>
                                <CIcon icon={cilLockLocked} />
                              </CInputGroupText>
                              <CFormInput
                                type="password"
                                name="password"
                                placeholder="Password"
                                autoComplete="current-password"
                                // onChange={(e) => setPassword(e.target.value)}
                                // value={password}
                              />
                            </CInputGroup>
                          </CCol> */}
                          <CRow>
                            <CCol xs={6}>
                              <CButton
                                onClick={handleSubmit}
                                color="primary"
                                className="px-4 text-center button"
                                style={{ backgroundColor: '#1c1c1e' }}
                              >
                                Save
                              </CButton>
                            </CCol>
                            {/* <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol> */}
                          </CRow>
                        </CForm>
                      </CCardBody>
                    </CCard>
                    {/* <CCard className="" style={{ width: '44%' }}> */}
                    {/* <CCardBody className="text-center">
                          <div>
                            <img src={image} height="250px" width="90%" /> */}
                    {/* <h2>Sign up</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>
                        Register Now!
                      </CButton>
                    </Link> */}
                    {/* </div>
                        </CCardBody> */}
                    {/* </CCard> */}
                  </CCardGroup>
                </CCol>
              </CRow>
            </CContainer>
          </div>
          <AppFooter />
        </div>
        {/* <div className="body flex-grow-1 px-3">
          <AppContent />
        </div> */}
        {/* <header className="App-header">
          <form
            onSubmit={(e) => {
              handleSubmit(e)
            }}
          >
            <label>Name:</label>
            <br />
            <input
              type="text"
              value={name}
              required
              onChange={(e) => {
                handleChange(e)
              }}
            />
            <br />
            <label>Id:</label>
            <br />
            <input
              type="text"
              value={id}
              required
              onChange={(e) => {
                handleIdChange(e)
              }}
            />
            <br />
            <label>Branch:</label>
            <br />
            <input
              type="text"
              value={branch}
              required
              onChange={(e) => {
                handleBranchChange(e)
              }}
            />
            <br />
            <label>Email:</label>
            <br />
            <input
              type="email"
              value={email}
              required
              onChange={(e) => {
                handleEmailChange(e)
              }}
            />
            <br />
            <label>Password:</label>
            <br />
            <input
              type="password"
              value={password}
              required
              onChange={(e) => {
                handlePasswordChange(e)
              }}
            />
            <br />
            <label>Confirm Password:</label>
            <br />
            <input
              type="password"
              value={confPassword}
              required
              onChange={(e) => {
                handleConfPasswordChange(e)
              }}
            />
            <br />
            <input type="submit" value="Submit" />
          </form>
        </header> */}
      </div>
    </div>
  )
}

export default AddNewStudent
