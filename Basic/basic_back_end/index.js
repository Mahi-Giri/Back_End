import express from "express";
import cors from "cors";

const app = express();
const port = 3002;

app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello, world! This is node js express server");
});

app.get("/api/jokes", (req, res) => {
    const jokes = [
        {
            id: 1,
            content: "I love you",
        },
        {
            id: 2,
            content: "I hate you",
        },
        {
            id: 3,
            content: "I am sad",
        },
        {
            id: 4,
            content: "I am happy",
        },
        {
            id: 5,
            content: "I am angry",
        },
    ];

    res.send(jokes);
});

app.listen(process.env.PORT || port, () => {
    console.log(`Server is running on port ${port}`);
});