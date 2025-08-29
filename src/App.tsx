import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";

let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
const handleSelectItem = (item: string) => {
  console.log(item);
};

const handleButton = () => {
  console.log("Button clicked pro max");
};

function App() {
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <Alert>
        <span>Yoo Alert | Woo hooo</span>
      </Alert>
      <Button color="primary" onClick={handleButton}>
        Push me
      </Button>
    </div>
  );
}

export default App;
