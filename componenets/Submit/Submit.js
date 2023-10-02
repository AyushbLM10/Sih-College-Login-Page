import React,{useNavigate} from 'react-router-dom'
import './Submit.css';
function Submit() {
  const navigate = useNavigate();
  function onSignin(){
    navigate('/Submit/Signin');
  }
  function onSignup(){
    navigate('/Submit/Signup');
  }
  return (
    <div className='main'>
      <div className='container2'>
        <div className='button'>      
          <button onClick={onSignin }>Sign In</button>
          <button onClick={onSignup}>Sign Up</button>
        </div>
        <div className='para'>
          <p>Already have an account </p>
          <p>Create a new account</p>
        </div>
      
      </div>
      
    </div>
  )
}

export default Submit
