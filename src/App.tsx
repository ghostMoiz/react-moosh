import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import DisAlert from "./components/DisAlert";
import DisButton from "./components/DisButton";
import { useState } from "react";

let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
const handleSelectItem = (item: string) => {
  console.log(item);
};

const handleButton = () => {
  console.log("Button clicked pro max");
};

function App() {
  let [alertVisible, setAlertVisibility] = useState(false);
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
      {alertVisible && (
        <DisAlert
          onClick={() => {
            setAlertVisibility(false);
          }}
        >
          {" "}
          My Alert{" "}
        </DisAlert>
      )}
      <DisButton
        onClick={() => {
          setAlertVisibility(true);
        }}
      />
    </div>
  );
}

export default App;
