import { useHistory } from 'react-router-dom';
function LegalPage() {

    const history = useHistory();

    const forwardButton = () => {
        history.push('/user');

    }
    return(
        <>
        <h2>Legal Page</h2>
        <button onClick = {forwardButton}>Continue</button>
        </>
    )
}

export default LegalPage;