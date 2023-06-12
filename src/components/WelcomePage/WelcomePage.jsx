import { useHistory } from 'react-router-dom';

function WelcomePage() {
    const history = useHistory();

    const registerPage = () => {
        history.push('/registration');
    }

    const loginPage = () => {
        history.push('/login');
    }
    return (
        <>
        <h2>Welcome to CoachLink</h2>
        <button onClick = {registerPage}>Register</button>
        <button onClick = {loginPage}>Login</button>
        </>
    )
}

export default  WelcomePage;