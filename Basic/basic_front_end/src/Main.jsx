import { useEffect, useState } from "react";
import axios from "axios";

const Main = () => {
    const [jokes, setJokes] = useState([]);

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API}jokes`)
            .then((res) => {
                setJokes(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    });

    return (
        <div>
            <p>Jokes: {jokes.length}</p>
            {jokes.map((joke) => (
                <div key={joke.id}>
                    <p>{joke.content}</p>
                </div>
            ))}
        </div>
    );
};

export default Main;
