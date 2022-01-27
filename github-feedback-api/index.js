const express = require("express");
const app = express();
const cors = require("cors");
console.log(process.env)
const port = process.env.API_PORT || 3000;
const host = process.env.API_HOST || "localhost";
const FeedbackService = require("./services/feedback");
const APPROVED_ORIGINS = new Set(["https://github.com","http://localhost:8080"]);

app.use(express.json());
app.use(cors({
    origin: (origin, callback) => {
        let allowed = APPROVED_ORIGINS.has(origin);

        callback(allowed ? null : new Error("not an allowed origin"), allowed);
    },
    optionsSuccessStatus: 200
}));

app.post("/feedback", (req, res) => {
    let service = new FeedbackService();
    return service.saveFeedback(req.body).then(result => res.send(result));
});

app.listen(port, host, () => {
    console.log(`listening to ${host} on port ${port}`);
});