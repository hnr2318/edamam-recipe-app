import express from "express"
import axios from "axios"
import cors from "cors"
import "dotenv/config"

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())

app.get('/recipes/:query', async (req, res) => {
	console.log(req.params);
    const response = await axios.get(
        `https://api.edamam.com/search?q=${req.params.query}&app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}&diet=high-protein`//&diet=high-protein
    )
    // console.log(response.data.hits)
	// `https://api.edamam.com/search?app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}&excluded=${req.params.query}` //&diet=high-protein
    res.json(response.data.hits)
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
}) 
