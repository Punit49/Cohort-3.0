import app from "./app/app.js";
import connectDB from "./config/db.config.js";
import config from "./config/dotenv.config.js";

await connectDB();
const PORT = config.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server is on running on PORT -", PORT);
})
