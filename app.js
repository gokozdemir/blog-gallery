import express from 'express'
import ejs from 'ejs'
import expressEjsLayouts from 'express-ejs-layouts'
import path from 'path'
import {blogRouter} from './src/routers/blogRouter'

const app = express()

app.set('view engine', 'ejs')

//views yolu değiştirme
app.set('views', path.resolve(__dirname, './src/views'))

//Layout yolu değiştirme
// app.set('layout', path.resolve(__dirname, './src/views/layout/index1.ejs'))
app.use(expressEjsLayouts)


app.use('/', blogRouter)


app.listen(3000, () => {
    console.log('The server running on 3000 port')
})