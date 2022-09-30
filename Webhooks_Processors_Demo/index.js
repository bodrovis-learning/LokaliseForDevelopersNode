import express from 'express'
import { router } from "./config/routes.js"

const app = express()
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/', router)

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Express web app on port ${port}`)
})