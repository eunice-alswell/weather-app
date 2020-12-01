import React from 'react'

const Login = React.lazy(() => import('./LogIn'))
const Signup = React.lazy(() => import('./SignUp'))
const Home = React.lazy(() => import('./Home'))


const Pages = {
    Login,
    Signup,
    Home    
};

export default Pages;
