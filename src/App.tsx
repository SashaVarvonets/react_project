import Alert from "./components/Alert.tsx";
import Button from "./components/Button.tsx";
import ListGroup from "./components/ListGroup.tsx";
import {useState} from "react";

function App() {
    const items = [
        "New York",
        "Odesa",
        "Brasov",
    ]

    const handleSelectItem = (item: string) => {
        console.log(item);
    }

    const [alertVisible, setAlertVisible] = useState(false)

    return <div>
        {alertVisible && (
            <div className="alert alert-dark">
                <Alert onClose={() => setAlertVisible(false)}>
                    <span>ALERT!</span>
                </Alert>
            </div>
        )}

        <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/>
        <Button onClick={() => setAlertVisible(true)} color="primary">Click</Button>
    </div>
}

export default App;