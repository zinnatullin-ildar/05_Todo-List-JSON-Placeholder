// 1. Реализовать приложение на базе Create React App - страницу со списком дел (Todo list):
// содержание одного дела - небольшой текст;
// использовать JSON Placeholder с ручкой (endpoint) «todos»;
// реализовать только вывод списка;
// дизайн на усмотрение разработчика (но должен быть аккуратный, приятный на вид).

import { useState, useEffect } from "react";
import styles from "./toDoList.module.css";

export const ToDoListJsonPlaceholder = () => {
    const [todos, setTodos] = useState([]);
    const [isLoading, setIsLoading] = useState(false); // флаг индикатора загрузки
    // console.log(todos);

    useEffect(() => {
        setIsLoading(true);

        setTimeout(() => {
            fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
                .then((loadedData) => loadedData.json())
                .then((todos) => {
                    setTodos(todos);
                })
                .finally(() => setIsLoading(false));
        }, 1500);
    }, []);

    return (
        <div className={styles.app}>
            <h2>Список дел</h2>
            {isLoading ? (
                <div className={styles.loader}></div>
            ) : (
                todos.map(({ number, id, title }) => (
                    <div
                        key={id}
                        className={styles.todo}
                    >
                        {number}. {title}
                    </div>
                ))
            )}
        </div>
    );
};
