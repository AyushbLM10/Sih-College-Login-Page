import React from 'react'
import './Signup.css';
function Signup() {
  function OnSubmit(){

  }
  return (
    <div className='main2'>
        <div className='container'>
          
          <div>
            <h1>Sign Up</h1>
            <p className='Sign-up'>Create a new account</p>
            <form className='form'>
            <div class="form-group">
                <label for="name">First Name</label>
                <input type="text" id="name" name="name" required/>
            </div>
            <div class="form-group">
                <label for="name">Last Name</label>
                <input type="text" id="name" name="name" required/>
            </div>
            <div class="form-group">
                <label for="name">Course Name</label>
                <input type="text" id="name" name="name" required/>
            </div>
            <div class="form-group">
                <label for="name">Issuer Name</label>
                <input type="text" id="name" name="name" required/>
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

export default Signup
