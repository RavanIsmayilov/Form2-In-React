import './App.css';
import { useState } from 'react';
import image from "./assets/Auto Layout Horizontal.png"
import { validate } from './helpers';


function App() {

    const [profileDatas,setProfileDatas] = useState({
      email: "",
      password: "",
      AgeRange: "",
      terms: false,
      birthday: "",
      gender: ""
    })

    const [errors,setErrors] = useState({
      email: "",
      password: "",
      AgeRange: "",
      terms: false,
      birthday: "",
      gender: ""
    })

    const handleChange = (e) => {
      e.preventDefault()    

      const {name, type, checked, value} = e.target;

      setProfileDatas({
        ...profileDatas,
        [name]: type === "checkbox" ? checked : value 
      })

      const error = validate(name,value)
      setErrors({
        ...errors,
        [name]: error
      })

    }

    const handleSubmit = (e) =>{
      e.preventDefault()

      let formIsValid = true;

      Object.keys(profileDatas).forEach((name) => {
        const value = profileDatas[name];
        const error = validate(name, value);
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: error,
        }));
    
        if (error) {
          formIsValid = false;
        }
      });
      
      if(
      profileDatas.email.length > 0 &&
      profileDatas.password.length > 8 &&
      profileDatas.terms === true &&
      profileDatas.birthday.length > 0 &&
      profileDatas.gender !== ''
      
      ) {
        formIsValid = true;
      }
    
      if (formIsValid) {
        console.log("Form is valid:", profileDatas);
      } else {
        console.log("Form is invalid");
      }
    };    


  return (
    <form className="form" onSubmit={handleSubmit}>
    <div className='form_into'>

    <div>
      <img className='images' src={image} alt='' />
    </div>

    <div className='inputs'>  
    <div className='section_email'>
      <label htmlFor="email">Email</label>  
      <input className="email" 
      name = "email" type = "text" 
      onChange={handleChange} 
      defaultValue={profileDatas.email} /> 
      {errors.email && <span style={{color:"red", fontWeight:"500"}}>{errors.email}</span>}
   
    </div>



    <div className='section_password'> 
      <label htmlFor="password">Password</label> 
      <input className="password" 
      name = "password" type = "password"
      onChange={handleChange} 
      defaultValue={profileDatas.password} /> 
      {errors.password && <span style={{color:"red", fontWeight:"500"}}>{errors.password}</span>}

    </div>


    <div className='section_birthday'>
      <label htmlFor="birthday">Birthday</label> 
      <input type="date" className="birthday" name="birthday" value={profileDatas.birthday} onChange={handleChange} />
      {errors.birthday && <span style={{color:"red", fontWeight:"500"}}>{errors.birthday}</span>}



    </div>

    <div className='section_terms'>
      <input type="checkbox" className="terms" name="terms" value={profileDatas.terms} onChange={handleChange} />
      <label htmlFor="terms">I agree to Terms</label>
      {errors.terms && <span style={{color:"red", fontWeight:"500", margin:"0 0 0 25px"}}>{errors.terms}</span>}
    </div>  

      <div className='section_gender'>
      <input type="radio" name="gender" onChange={handleChange}/> Male
      <input type="radio" name="gender" onChange={handleChange}/> Female 
      {errors.gender && <span style={{color:"red", fontWeight:"500",margin:"0 0 0 25px"}}>{errors.gender}</span>}

  
  
    </div>
    </div>
      <button className="btn" type='submit'>Create account</button>

    </div>

    </form>
  );
}

export default App;
