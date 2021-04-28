import axios from "axios"
require('dotenv').config()

const getAllArticles = async (req, res) => {

    let pagination = ""
    let activePage = 1

    if (req.query.page) {
        pagination = "page=" + req.query.page
        activePage = req.query.page
    }

    try {
        const blogApi = await axios.get(process.env.BLOG_API + '?per_page=20&' + pagination)
        // res.json(blogApi.data)
        res.render('./articles/index', { articles: blogApi.data, pagination: blogApi.headers, activePage })
    } catch (err) {
        console.log(err.response.data)
        console.log(err.response.status)
        console.log(err.response.header)
        res.json({
            message: 'Error occurred : ' + err.response.data
        })
    }

    // res.render('./articles/index.ejs')
}

const getOneArticle = async (req, res) => {
    const articleID = req.params.id

    try {
        const oneArticle = await axios.get(process.env.BLOG_API + articleID)
        res.render('./articles/oneArticle', { article: oneArticle.data })

        // res.json({
        //     data: oneArticle.data
        // })
    } catch (err) {
        console.log(err.response.data)
        console.log(err.response.status)
        console.log(err.response.header)
        res.json({
            message: 'Error occurred : ' + err.response.data
        })
    }
}

const search = async (req, res) => {
    
    let wordToSearch = req.body.search
    let combinig = /[\u0300-\u036F]/g

    wordToSearch = wordToSearch.normalize('NFKD').replace(combinig, '')

    let pagination = ""
    let activePage = 1

    if (req.query.page) {
        pagination = "page=" + req.query.page
        activePage = req.query.page
    }

    try {
        const blogApi = await axios.get(process.env.BLOG_API + '?search=' + wordToSearch)
        res.render('./articles/index', { articles: blogApi.data, pagination: blogApi.headers, activePage })
    } catch (err) {
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
    getOneArticle,
    search
}