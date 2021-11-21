import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation, useHistory } from 'react-router';
import useAuth from '../../hooks/useAuth';
import googleIcon from '../../images/google1.png'

const Login = () => {
   const {setUser, error, setError, setIsLoading, signInWithGoogle, signInWithEmail, getEmail, getPassword} = useAuth()
   const location = useLocation()
   const history = useHistory()
   const redirectUrl = location.state?.from || '/'

   const handleGoogleSignIn = () => {
      setIsLoading(true)
      signInWithGoogle()
      .then(res => {
         setUser(res.user)
         setError('');
         history.push(redirectUrl)
      })
      .finally(() => setIsLoading(false))
      .catch(err => {
         setError(err.message);
         // console.log(err.message);
      });
   }

   const handleSignIn = (e) => {
      e.preventDefault();

      signInWithEmail()
      .then(res => {
         setUser(res.user)
         setError('');
         history.push(redirectUrl)
      })
      .catch(err => {
         setError(err.message);
         // console.log(err.message);
      });
   }

   return (
      <div className="login">
         <div className="container">
            <div className="row">
               <div className="col">
                  <div className="login-box shadow">
                     <h3>Log in to Yatra</h3>
                     <form onSubmit={handleSignIn}>
                        <div className="form-group">
                           <input onBlur={getEmail} type="email" className="form-control shadow-sm" id="email" aria-describedby="emailHelp" placeholder="Email" required />
                        </div>
                        <div className="form-group">
                           <input onBlur={getPassword} type="password" className="form-control shadow-sm" id="password"  placeholder="Password" required />
                        </div>
                        <button type="submit" className="btn-yatra shadow-sm">Submit</button>
                     </form>
                     <hr />
                     <div className="text-center">
                        <p className="firebase-error">{error}</p>
                        <button onClick={handleGoogleSignIn} className="btn-yatra google-btn shadow-sm"><img src={googleIcon} alt="" /> Login With Google</button>
                        <p className="switcher">New user? <Link className="link" to="/register">Register</Link></p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Login;