import { useState } from "react";
import { APIURL } from '../../App';

function AdminLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const checkLogin = async (e) => {
        e.preventDefault();
        
        const response = await fetch(`${APIURL}/users.php`, {
            method: 'POST', 
            body: JSON.stringify({
                check: true,
                username: username,
                password: password
            })
        });
        const finalResponse = await response.json();

        if(finalResponse !== null){
            sessionStorage.setItem('username', finalResponse.username);
            sessionStorage.setItem('password', finalResponse.password);
        }
        let sessionUsername = sessionStorage.getItem('username'); 
        if(sessionUsername) window.location.href = "/admin/users";
    }

    return ( 
        <div className="container" style={{marginTop: '150px'}}>
            <h1 className="text-center">ADMIN</h1>
            <form className="form" method="POST" action="admin/users">
                <div className="form-group">
                    <label>username</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="username" 
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>password</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        placeholder="password" 
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <button 
                    className="btn btn-primary btn-block" 
                    style={{width:"100%"}} 
                    type="submit" 
                    onClick={checkLogin}
                >
                    Login
                </button>
            </form>
        </div>
    );
}

export default AdminLogin;