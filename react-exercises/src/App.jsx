import {useState} from "react";

const App = () => {
    const [username,setUsername] = useState("Brenda");
    const [password, setPassword] =  useState("000000");

    function handleUsername(event) {
        setUsername(event.target.value);

        console.log(username);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        console.log(password);

    }

    function handleLogin() {

    }

    return (
        <div>
            <form onSubmit={handleLogin}>

                <div>
                    <label htmlFor={"name"}>Username</label>
                    <input type={"text"} id={"name"} value={username}
                           onChange={(e) => handleUsername(e)}/>
                </div>

                <div>
                    <label htmlFor={"password"}>Password</label>
                    <input type={"password"} id={"password"} value={password}
                           onChange={(e) => handlePassword(e)}/>
                </div>

                <button type={"submit"} >Login</button>

            </form>
        </div>
    );
};

export default App;




