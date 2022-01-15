import AdminSideBar from "../admin-sidebar/admin-sidebar";
import { useEffect, useState } from 'react';
import { APIURL } from '../../../App';
import FormGroup from "../FormGroup";
import sendData from "../admin-utils/sendData";

function UsersAdmin() {
    const USERSAPIURL = `${APIURL}/users.php`;
    // CHECK USERNAME IN SESSION
    let sessionUsername = sessionStorage.getItem("username");
    if(!sessionUsername) window.location.href = "/admin" 

    // FORM VARS
    const [usernameValue, setUsernameValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [updating, setUpdating] = useState(false);
    const [updateId, setUpdateId] = useState(0);
    // GET THE TABLE DATA
    const [tableData, setTableData] = useState([{id:0}]);

    const getAllUsers = async () => {
        const response = await fetch(USERSAPIURL);
        const jsonResponse = await response.json();
        setTableData(jsonResponse);
    }

    const updateItem = async (id, originalUsername, originalPassword) => {
        setUsernameValue(originalUsername);
        setPasswordValue(originalPassword);
        setUpdateId(id);
        setUpdating(true);
    }
    
    const sendUpdate = async () => {
        const data = JSON.stringify({
            id: updateId,
            username: usernameValue,
            password: passwordValue
        });

        const response = await sendData(USERSAPIURL, 'PUT', data);
        getAllUsers()
        setUsernameValue('');
        setPasswordValue('');
        setUpdating(false);
    }

    const sendPost = async () => {
        const data = JSON.stringify({
            username: usernameValue,
            password: passwordValue
        });
        const response = await sendData(USERSAPIURL, 'POST', data);
        setUsernameValue('');
        setPasswordValue('');
        getAllUsers()
    }

    const deleteItem = async (id) => {
        const response = await fetch(USERSAPIURL, {
            method:'DELETE',
            mode: "cors",
            body: JSON.stringify({id: id}) 
        })
        getAllUsers()
    }

    useEffect(() => {
        getAllUsers();
    },[]) 

    return ( 
        <div className="d-flex flex-row">
            <AdminSideBar />
            <div className="container">
                <form className="form">
                    <FormGroup 
                        label="username" 
                        value={usernameValue} 
                        onChangeFunc={val => setUsernameValue(val)}
                    />
                    <FormGroup 
                        label="password" 
                        type="password" 
                        value={passwordValue} 
                        onChangeFunc={val =>setPasswordValue(val)}
                    />
                    <button 
                        type="button" 
                        className={updating?"d-none": "btn btn-primary"} 
                        style={{width: '100%'}}
                        onClick={sendPost}
                    >
                        ADD
                    </button>
                    <button 
                        type="button" 
                        className={updating?"btn btn-success":"d-none"} 
                        style={{width: '100%'}}
                        onClick={sendUpdate}    
                    >
                            UPDATE
                    </button>
                </form>
                <div className="container" style={styles.table}>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">username</th>
                                <th scope="col">password</th>
                                <th scope="col">options</th>
                            </tr>
                        </thead>
                        <tbody>
                        {tableData.map(usersData => (
                            <tr key={usersData.id}>
                                <td>
                                    {usersData.username}
                                </td>
                                <td>
                                    {usersData.password}
                                </td>
                                <td>
                                    <button 
                                        className="btn btn-success" 
                                        value={usersData.id}
                                        onClick={() => updateItem(usersData.id, usersData.username, usersData.password)}
                                    >
                                        update
                                    </button>
                                    <button 
                                        className="btn btn-danger" 
                                        value={usersData.id} 
                                        onClick={() => deleteItem(usersData.id)}
                                    >
                                        delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>     
    );
}

const styles = {
    table: {
        height: "500px",
        overflowY: "scroll"
    }
}

export default UsersAdmin;