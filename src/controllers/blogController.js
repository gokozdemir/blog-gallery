import axios from "axios"
require('dotenv').config()

const getAllArticles = async (req, res) => {
    

    try{
        const blogApi = await axios.get(process.env.BLOG_API)
        // console.log(blogApi.data)
    }catch(err){
        console.log(err.response.data)
        console.log(err.response.status)
        console.log(err.response.header)
        res.json({
            message: 'Error occurred : ' + err.response.data
        })
    }
    
    res.render('./articles/index.ejs')
}

const getOneArticle = async (req, res) => {
    const articleID = req.params.id

    try{
        const oneArticle = await axios.get(process.env.BLOG_API + articleID)
        res.render('./articles/oneArticle')
        
        // res.json({
        //     data: oneArticle.data
        // })
    }catch(err){
        console.log(err.response.data)
        console.log(err.response.status)
        console.log(err.response.header)
        res.json({
            message: 'Error occurred : ' + err.response.data
        })
    }
}

export {
    getAllArticles,
    getOneArticle
}