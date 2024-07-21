import ListGroup from "./components/ListGroup.tsx";

function App() {
    let items = [
        "New York",
        "Odesa",
        "Brasov",
    ]

    const handleSelectItem = (item: string) => {
        console.log(item);
    }

    return <div><ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/></div>
}

export default App;