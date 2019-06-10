import React from 'react'
import Layout from './Hoc/Layout.js'
import { Switch, Route } from 'react-router-dom'
import SignIn from './Components/signin'
import Home from './Components/home'
import Dashboard from './Components/admin/Dashboard.js'

const Routes = props => {
  return (
    <Layout>
      <Switch>
        <Route exact component={Dashboard} path='/dashboard' />
        <Route exact component={SignIn} path='/sign_in' />
        <Route exact component={Home} path='/' />
      </Switch>
    </Layout>
  )
}

export default Routes
