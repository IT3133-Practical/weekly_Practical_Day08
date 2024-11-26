import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    
    const aunthenticates = () => {
        navigate('/dash');
    }

    return (
        <div>
            <h1>Login here</h1>
            <button onClick={aunthenticates}>Login</button>
        </div>
    );
}