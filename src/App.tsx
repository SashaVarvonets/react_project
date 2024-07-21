import Alert from "./components/Alert.tsx";
import Button from "./components/Button.tsx";
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
        <Button onClick={() => console.log("click")} color="secondary">Click</Button>
        <div className="alert alert-dark">
            <Alert>
                <span>ALERT!</span>
            </Alert>
        </div>
    </div>
}

export default App;