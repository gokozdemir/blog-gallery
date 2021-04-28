import {Router}  from 'express'
import {getAllArticles, getOneArticle, search} from '../controllers/blogController'


const blogRouter = Router()

blogRouter.post('/', search)
blogRouter.get('/', getAllArticles)
blogRouter.get('/blog/:id', getOneArticle)


export {
    blogRouter
}
