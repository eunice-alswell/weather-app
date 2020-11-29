import React from 'react'

const Login = React.lazy(() => import('./LogIn'))
const Signup = React.lazy(() => import('./SignUp'))
const home = React.lazy(() => import('./Home'))


const Pages = {
    Login,
    Signup,
    home    
}

export default Pages;
