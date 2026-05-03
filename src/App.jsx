import { useState } from 'react'


function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");

  const [info, setInfo] = useState([]);


  function handleInput(e){
    setName(e.target.value);
    setEmail(e.target.value);
    setPassword(e.target.value);
    setMobile(e.target.value);
  }

  function add(){
    if(name.length > 0 && email.length > 0 && password.length > 0 && mobile.length > 0){
      setInfo(prev => [...prev, name, email, password, mobile ]);
      setName("");
      setEmail("");
      setPassword("");
      setMobile("");
    }
    console.log(setInfo);
  }
  

  return (
    <div className='main-container'>
      <div className='form-container'>
        <div className='profile'>
          <div></div>
        </div>
        <form className='form'>
          <label htmlFor='userName' htmlFor='userEmail' className='label'>Basic Information</label><br/>
          <input id='userName' className='userInfo' type='text' placeholder='Full Name' value={name} onChange={e => setName(e.target.value)} name='userName' autoComplete='name'/><br/>
          <input id='userEmail' className='userInfo' type='email' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} name='userEmail' autoComplete='email'/><br/>
          <label htmlFor='userPass' htmlFor='userMobile' className='label'>Password and Mobile Number</label><br/>
          <input id='userPass' className='userInfo' type='password' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} name='userPassword' autoComplete='new-password'/><br/>
          <input id='userMobile' className='userInfo' type='text' placeholder='Mobile' value={mobile} onChange={e => setMobile(e.target.value)} name='userMobile' autoComplete='tel'/><br/>
        </form>
        <button type='button' onClick={add}>Sing-up</button>
        <p>Already have an account <span>?</span></p>
      </div>
      <div className='info'>
        <ol>
          {info.map((element, index) =>
            <li key={index}>{element}</li>
          )}
        </ol>
      </div>
    </div>
  );
}

export default App
