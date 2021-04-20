import {Router}  from 'express'
import {getAllArticles} from '../controllers/blogController'


const blogRouter = Router()

blogRouter.get('/', getAllArticles)


export {
    blogRouter
}
