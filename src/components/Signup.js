import React,{useState} from 'react';
import "./Signup.css"


function Signup(props){

	const [username, setUsername] = useState('');
	const [age, setAge] = useState('')
	const [email, setEmail] = useState('')
	const [password1, setPassword1] = useState('');
	const [confirm, setConfirm] = useState('');


	var auth = JSON.parse(localStorage.getItem('auth'));
	
	const handleSignup=()=>{
	
		if(password1===confirm){
			
			const same = auth.filter(d=>d.username===username);

			if(same.length===0){
				auth = [...auth,{'username':username,'password':password1}];
				localStorage.setItem('auth',JSON.stringify(auth));
				localStorage.setItem('userlogined',username);
				localStorage.setItem('userlogined',age);
				localStorage.setItem('userlogined',email);
				setUsername('');
				setPassword1('');
				setConfirm('');
				props.afterSignup(username);
			}else{
				alert(username+' exist!')
			}
		}else{
			alert('Passwords are not matching')
		}
	}
	
	return(
        <div id="login-box">
		<div className='form'>
        <h1>Sign up</h1>
			<input type='text' 
			onChange={e=>setUsername(e.target.value)}
			placeholder='User name'/>

            <input type='number' 
			onChange={e=>setAge(e.target.value)}
			placeholder='Age'/>

            <input type='email' 
			onChange={e=>setEmail(e.target.value)}
			placeholder='Email'/>  

			
			<input type='password'
			onChange={e=>setPassword1(e.target.value)}
            placeholder='Password'
		    	    />
			
			<input type='password' 
			onChange={e=>setConfirm(e.target.value)}
            placeholder='Confirm password'
						/>

			<button className="signup" onClick={handleSignup}>signup</button>
			

		</div>
        </div>
	);
}


export default Signup;