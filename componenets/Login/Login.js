import React,{ useNavigate } from 'react-router-dom'

import './Login.css';

function Login() {
  const navigate = useNavigate();

  const OnSubmit=()=>{
    navigate('/Submit')
  }
  return (
  
    <div className='main2'>
        <div className='container'>
          
          <div>
            <h1>College Login</h1>
            <form className='form'>
            <div class="form-group">
                <label for="name">Username</label>
                <input type="text" id="name" name="name" required/>
            </div>
            <div class="form-group">
                <label for="email">Password</label>
                <input type="password" id="password" name="password" required/>
            </div>
            <div class="form-group">           
              <button onClick={OnSubmit}>Submit</button>
            </div>

            </form>

          </div>
          
        </div>
    </div>
  )
}

export default Login;
