import {useState} from "react";
import {arrOfThousand} from "./constants/constants.js";


export const ListWithoutKey = ({error, setError, deleteFirstElement, shuffleElements, onChangeHandler}) => {
    const [array, setArray] = useState(arrOfThousand);
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
            setArray([inputValue, ...array]);
        } else {
            setError('Значение не может быть пустым')
        }
    }

    const addToEndOfTheList = () => {
        if (inputValue !== "") {
            setArray([...array, inputValue]);
        } else {
            setError('Значение не может быть пустым')
        }
    }

    const updateRandomElement = () => {
        const randomIndex = Math.floor(Math.random() * array.length);
        setArray(array.map((item, index) => index === randomIndex ? inputValue : item));
    }

    return (
        <div className="list">
            <h1>Список без ключей</h1>
            {error && <label htmlFor="input" className='error'>{error}</label>}
            <input type="text" id="input" value={inputValue} onChange={inputHandler}/>
            <button onClick={addToStartOfTheList}>Добавить элемент в начало</button>
            <button onClick={addToEndOfTheList}>Добавить элемент в конец</button>
            <button onClick={deleteFirstHandler}>Удалить первый</button>
            <button onClick={shuffleHandler}>Перемешать список</button>
            <button onClick={updateRandomElement}>Обновить случайный элемент</button>

            <ul className="ul">
                {array.map((item) => {
                    return <li className='liNoKeys'>{item}</li>;
                })}
            </ul>
        </div>
    )
}