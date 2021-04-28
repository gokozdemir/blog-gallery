import express, { urlencoded } from 'express'
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

app.use(express.static(__dirname + '/public'));
app.use(expressEjsLayouts)
app.use(urlencoded({extended: true}))


app.use('/', blogRouter)
app.use('/blog', blogRouter)


app.listen(3000, () => {
    console.log('The server running on 3000 port')
})