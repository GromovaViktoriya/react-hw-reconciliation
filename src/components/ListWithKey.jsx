import {useState} from "react";
import {arrWithKey} from "./constants/constants.js";


export const ListWithKey = ({error, setError, onChangeHandler, shuffleElements, deleteFirstElement}) => {
    const [array, setArray] = useState(arrWithKey);
    const [inputValue, setInputValue] = useState('')


    const inputHandler = (event) => {
        onChangeHandler(event, setInputValue)
    }

    const deleteFirstHandler = () => {
        deleteFirstElement(array, setArray)
    }

    const shuffleHandler = () => {
        shuffleElements(array, setArray)
    }

    const addToStartOfTheList = () => {
        if (inputValue !== "") {
            setArray([{item: inputValue, id: crypto.randomUUID()}, ...array]);
        } else {
            setError('Значение не может быть пустым')
        }
    }

    const addToEndOfTheList = () => {
        if (inputValue !== "") {
            setArray([...array, {item: inputValue, id: crypto.randomUUID + array.length}]);
        } else {
            setError('Значение не может быть пустым')
        }
    }

    const updateRandomElement = () => {
        const randomIndex = Math.floor(Math.random() * array.length);
        setArray(array.map((item, index) => index === randomIndex ? {...item, item: inputValue} : item));
    }

    return (
        <div className="list">
            <h1>Список с ключами</h1>
            {error && <label htmlFor="input" className='error'>{error}</label>}
            <input type="text" id='input' value={inputValue} onChange={inputHandler}/>
            <button onClick={addToStartOfTheList}>Добавить элемент в начало</button>
            <button onClick={addToEndOfTheList}>Добавить элемент в конец</button>
            <button onClick={deleteFirstHandler}>Удалить первый</button>
            <button onClick={shuffleHandler}>Перемешать список</button>
            <button onClick={updateRandomElement}>Обновить случайный элемент</button>

            <ul className="ul">
                {array.map((num) => {
                    return <li key={num.id} className='liWithKeys'>{num.item}</li>;
                })}
            </ul>
        </div>
    )
}