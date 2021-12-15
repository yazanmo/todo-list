import React,{useState, useEffect} from 'react';
import Signup from './Signup';
import Login from './Login';
import TodoList from './TodoList';
import "./Main.css"


function Main(){

	
	const [loginScreen, setLoginScreen] = useState(true);
	const [signupScreen, setSignupScreen] = useState(false);
	const [loginedScreen, setLoginedScreen] = useState(false);




	const afterSignup = (username )=> {
		setSignupScreen(false); 
		setLoginScreen(false);
		setLoginedScreen(true);
        
	}

	const afterLogout=()=>{
		localStorage.removeItem('userlogined');
		setSignupScreen(false); 
		setLoginScreen(true);
		setLoginedScreen(false);
	}

	useEffect(()=>{
		let user=localStorage.getItem('userlogined');
		if(user !== null || user !==''){
			setSignupScreen(true); 
			setLoginScreen(false);
			setLoginedScreen(false);
		}	
	},[]);
	
	return(
		<div className='MainScreen'>
			{signupScreen?<div>
				<Signup afterSignup={afterSignup} />
				<button className="login1" onClick={()=>{setSignupScreen(false); setLoginScreen(true)}}>If you have an account, click here</button>
			</div>:''}

			
			{loginScreen?<div>
				<Login afterLogin={afterSignup} />
				<button className="login1" onClick={()=>{setSignupScreen(true); setLoginScreen(false)}}>If you do not have an account, click here</button>
			</div>:''}

			{loginedScreen?<div>
				<div className="asdasd">
				<h1 className="welcome">Welcome {localStorage.getItem('userlogined')}</h1>
				<img className="exit" src="https://img.icons8.com/ios/50/000000/exit.png" onClick={afterLogout}/>
				</div>
                <TodoList />
                
			</div>:''}
			
		</div>
	);
}


export default Main;