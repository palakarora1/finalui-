import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppFooter } from '../../../components/index'
import './Login.css'
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
import image from './image.jpg'
import axios from 'axios'
const Login = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    axios.get('http://127.0.0.1/apii/users').then(function (response) {
      console.log(response.data)
      const len = response.data.length
      let i = 0
      while (i != len) {
        if (response.data[i].email == username && response.data[i].mobile == password) {
          navigate('/dashboard')
          console.log('Logged In')
        }
        i++
      }
    })
  }
  return (
    <div>
      <div>
        <CHeader position="sticky">
          <CHeaderBrand className="mx-auto" to="/">
            {/* <CIcon icon={logo} height={48} alt="Logo" /> */}
            <strong>Attendance System</strong>
          </CHeaderBrand>
        </CHeader>
        <div className="wrapper d-flex flex-column min-vh-100 bg-light">
          <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
            <CContainer>
              <CRow className="justify-content-center">
                <CCol md={8}>
                  <CCardGroup>
                    <CCard className="p-4">
                      <CCardBody>
                        <CForm>
                          <h1>Admin Login</h1>
                          <p className="text-medium-emphasis">Sign In to your account</p>
                          <CInputGroup className="mb-3">
                            <CInputGroupText>
                              <CIcon icon={cilUser} />
                            </CInputGroupText>
                            <CFormInput
                              type="text"
                              name="username"
                              placeholder="Username"
                              autoComplete="username"
                              onChange={(e) => setUsername(e.target.value)}
                              value={username}
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
                              onChange={(e) => setPassword(e.target.value)}
                              value={password}
                            />
                          </CInputGroup>
                          <CRow>
                            <CCol xs={6}>
                              <CButton
                                onClick={handleSubmit}
                                color="primary"
                                className="px-4 text-center"
                                style={{ backgroundColor: '#1c1c1e' }}
                              >
                                Login
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
                    <CCard className="py-5" style={{ width: '44%' }}>
                      <CCardBody className="text-center">
                        <div>
                          <img src={image} height="250px" width="90%" />
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
                        </div>
                      </CCardBody>
                    </CCard>
                  </CCardGroup>
                </CCol>
              </CRow>
            </CContainer>
          </div>
          <AppFooter />
        </div>
      </div>
    </div>
  )
}

export default Login

// import React from 'react'
// import { Link } from 'react-router-dom'
// import './Login.css'
// import './image.jpg'
// import {
//   CButton,
//   CCard,
//   CCardBody,
//   CCardGroup,
//   CCol,
//   CContainer,
//   CForm,
//   CFormInput,
//   CInputGroup,
//   CInputGroupText,
//   CRow,
//   CCardImage,
// } from '@coreui/react'
// import CIcon from '@coreui/icons-react'
// import { cilLockLocked, cilUser } from '@coreui/icons'

// const Login = () => {
//   return (
//     <CCardGroup>
//       <div className="container bg-light min-vh-100 d-flex flex-row align-items-center">
//         <CContainer>
//           <CRow className="justify-content-center">
//             <CCol md={8}>
//               <CCardGroup>
//                 <div className="myform">
//                   <CCard className="p-4 size">
//                     <CCardGroup>
//                       <CCardBody>
//                         <CForm>
//                           <h2>Admin Login</h2>
//                           <p className="text-medium-emphasis">Sign In to your account</p>
//                           <CInputGroup className="mb-3">
//                             <CInputGroupText>
//                               <span>
//                                 <CIcon icon={cilUser} />
//                               </span>
//                             </CInputGroupText>
//                             <CFormInput placeholder="Username" autoComplete="username" />
//                           </CInputGroup>
//                           <CInputGroup className="mb-4">
//                             <CInputGroupText>
//                               <CIcon icon={cilLockLocked} />
//                             </CInputGroupText>
//                             <CFormInput
//                               type="password"
//                               placeholder="Password"
//                               autoComplete="current-password"
//                             />
//                           </CInputGroup>
//                           <CRow>
//                             <CCol xs={6}>
//                               <CButton color="primary" className="px-4">
//                                 Login
//                               </CButton>
//                             </CCol>
//                             <CCol xs={6} className="text-right">
//                               <CButton color="link" className="px-0">
//                                 Forgot password?
//                               </CButton>
//                             </CCol>
//                           </CRow>
//                         </CForm>
//                       </CCardBody>
//                     </CCardGroup>
//                   </CCard>
//                   {/* <CCardGroup>

//                 </CCardGroup> */}
//                 </div>

//                 {/* <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
//                 <CCardBody className="text-center">
//                   <div>
//                     <h2>Sign up</h2>
//                     <p>
//                       Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
//                       tempor incididunt ut labore et dolore magna aliqua.
//                     </p>
//                     <Link to="/register">
//                       <CButton color="primary" className="mt-3" active tabIndex={-1}>
//                         Register Now!
//                       </CButton>
//                     </Link>
//                   </div>
//                 </CCardBody>
//               </CCard> */}
//               </CCardGroup>
//             </CCol>
//           </CRow>
//         </CContainer>
//       </div>
//     </CCardGroup>
//   )
// }

// export default Login

// /* <CCardGroup>
//   <CCard>
//     <CCardImage orientation="top" src="/images/react.jpg" />
//     <CCardBody>
//       <CCardTitle>Card title</CCardTitle>
//       <CCardText>
//         This is a wider card with supporting text below as a natural lead-in to additional content.
//         This content is a little bit longer.
//       </CCardText>
//       <CCardText>
//         <small className="text-medium-emphasis">Last updated 3 mins ago</small>
//       </CCardText>
//     </CCardBody>
//   </CCard>
//   <CCard>
//     <CCardImage orientation="top" src="/images/react.jpg" />
//     <CCardBody>
//       <CCardTitle>Card title</CCardTitle>
//       <CCardText>
//         This card has supporting text below as a natural lead-in to additional content.
//       </CCardText>
//       <CCardText>
//         <small className="text-medium-emphasis">Last updated 3 mins ago</small>
//       </CCardText>
//     </CCardBody>
//   </CCard>
//   <CCard>
//     <CCardImage orientation="top" src="/images/react.jpg" />
//     <CCardBody>
//       <CCardTitle>Card title</CCardTitle>
//       <CCardText>
//         This is a wider card with supporting text below as a natural lead-in to additional content.
//         This card has even longer content than the first to show that equal height action.
//       </CCardText>
//       <CCardText>
//         <small className="text-medium-emphasis">Last updated 3 mins ago</small>
//       </CCardText>
//     </CCardBody>
//   </CCard>
// </CCardGroup> */
