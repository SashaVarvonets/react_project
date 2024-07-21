import Alert from "./components/Alert.tsx";
import ListGroup from "./components/ListGroup.tsx";

function App() {
    const items = [
        "New York",
        "Odesa",
        "Brasov",
    ]

    const handleSelectItem = (item: string) => {
        console.log(item);
    }

    return <div>
        <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/>
        <div className="alert alert-dark">
            <Alert>
                <span>ALERT!</span>
            </Alert>
        </div>
    </div>
}

export default App;