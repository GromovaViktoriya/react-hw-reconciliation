import './App.css'
import {ListWithoutKey} from "./components/ListWithoutKey.jsx";
import {ListWithKey} from "./components/ListWithKey.jsx";
import {useState} from "react";


function App() {
    const [listName, setListName] = useState("ListWithKey");
    const [error, setError] = useState(null)


    const onClickHandler = (event) => {
        event.target.name === 'withKeys' ? setListName('ListWithKey') : setListName('ListWithoutKey');
    }

    const onChangeHandler = (event, setInputValue) => {
        setError(null)
        setInputValue(event.target.value)
    }

    const deleteFirstElement = (array, setArray) => {
        setArray(array.filter((element, index) => index !== 0))
    }

    const shuffleElements = (array, setArray) => {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        setArray(newArray);
    }

    return (
        <div className="App">
            <div onClick={onClickHandler} className="switch">
                <button name='withKeys' className={listName === "ListWithKey" ? 'active' : ''}>Список с ключами</button>
                <button name='withoutKeys' className={listName === "ListWithoutKey" ? 'active' : ''}>Список без ключей
                </button>
            </div>
            {listName === "ListWithKey"
                ? <ListWithKey error={error} setError={setError}
                               onChangeHandler={(event, setInputValue) => onChangeHandler(event, setInputValue)}
                               deleteFirstElement={(array, setArray) => deleteFirstElement(array, setArray)}
                               shuffleElements={(array, setArray) => shuffleElements(array, setArray)}
                />
                : <ListWithoutKey error={error}
                                  setError={setError}
                                  onChangeHandler={(event, setInputValue) => onChangeHandler(event, setInputValue)}
                                  deleteFirstElement={(array, setArray) => deleteFirstElement(array, setArray)}
                                  shuffleElements={(array, setArray) => shuffleElements(array, setArray)}
                />}

        </div>
    )
}

export default App
