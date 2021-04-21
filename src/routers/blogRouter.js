import {Router}  from 'express'
import {getAllArticles, getOneArticle} from '../controllers/blogController'


const blogRouter = Router()

blogRouter.get('/', getAllArticles)
blogRouter.get('/:id', getOneArticle)


export {
    blogRouter
}
