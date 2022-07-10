const PORT = 8000
const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')

const app = express()

const url = "https://www.formula1.com/"

axios(url)
    .then(response => {
        const html = response.data /* literally just gives me all of the html of a website lol*/
        const $ = cheerio.load(html)
        const articles = []
        $('.f1--s', html).each(function () { /* gets all the classes called f1--s (can be whatever class on the website)*/
            const something = $(this).text()
            articles.push({
                something
            })
        })
        console.log(articles)
    }).catch(err => console.log(err))

app.listen(PORT, () => console.log('server running on PORT ' + PORT))