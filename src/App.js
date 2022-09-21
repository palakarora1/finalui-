import React, { Component, Suspense } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './scss/style.scss'
import Dashboard from './views/dashboard/Dashboard'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const AddNewStudent = React.lazy(() => import('./views/pages/addNewStudent/addNewStudent'))
const Report = React.lazy(() => import('./views/pages/report/report'))
// const Register = React.lazy(() => import('./views/pages/register/Register'))
// const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
// const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route index element={<Login />} />
            <Route exact path="/dashbard" name="Dashboard" element={<Dashboard />} />
            {/* <Route exact path="/login" name="Login Page" element={<Login />} />  */}
            <Route exact path="/addNewStudent" name="Add New Student" element={<AddNewStudent />} />
            <Route exact path="/report" name="Report" element={<Report />} />
            <Route exact path="/logout" name="Logout" element={<Login />} />
            {/* <Route exact path="/register" name="Register Page" element={<Register />} />
            {/* <Route exact path="/404" name="Page 404" element={<Page404 />} />
            <Route exact path="/500" name="Page 500" element={<Page500 />} /> */}
            <Route path="*" name="Home" element={<DefaultLayout />} />
          </Routes>
        </Suspense>
      </HashRouter>
    )
  }
}

export default App
