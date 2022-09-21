import { useRef, useState,useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login1() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    // let [success, setSuccess] = useState(false);
    // const [errMsg, setErrMsg] = useState('');
    // const [inputs, setInputs] = useState([]);

    // const handleChange = (event) => {
    //     const name = event.target.name;
    //     const value = event.target.value;
    //     console.log(name);
    //     console.log(value);
    //     setInputs(values => ({...values, [name]: value}));
    // }
    

    const handleSubmit = (event) => {
        event.preventDefault();
         
        axios.get('http://127.0.0.1/apii/users').then(function(response) {
            const len = response.data.length;
            let i=0;
            // console.log(response.data[i].email);
            // console.log(email);
            while(i!=len){
                if(response.data[i].email==email && response.data[i].mobile==mobile)
                {
                    navigate('/');
                    setSuccess=true;
                    console.log('Logged In');
                }
                i++;
                
                }
            // console.log(response.data);
            // let i=0;
            // console.log(response.data[i].email);
            // console.log(email);
            // console.log(mobile);
            // if(response.data.event== event.target.name )
            // navigate('/');
        });


    // const [users, setUsers] = useState([]);
    // useEffect(() => {
    //     getUsers();
    // }, []);

    // function getUsers() {
    //     axios.get('http://127.0.0.1/apii/users').then(function(response) {
    //         console.log(response.data);
    //         setUsers(response.data);
    //     });
    // }
    //     handleEmailChange = (event) => {
    //         this.setState({ email: event.target.value });
    //         if(this.state.email === response.data.users.email) {
                
    //     }
        
    }
    return (
        <div>
            <h1>Create user</h1>
            <form onSubmit={handleSubmit}>
                <table cellSpacing="10">
                    <tbody>
                        <tr>
                            <th>
                                <label>Email: </label>
                            </th>
                            <td>
                                <input type="text" name="email"   onChange={(e) => setEmail(e.target.value)}
                            value={email} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Mobile: </label>
                            </th>
                            <td>
                                <input type="text" name="mobile"   onChange={(e) => setMobile(e.target.value)}
                            value={mobile} />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2" align ="right">
                                <button>Login</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    )
}