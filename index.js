const { generateMd, writeToFile } = require('./utils/generateMarkdown')
const questions = require('./src/questions.js')
const { prompt } = require('inquirer')

const ask = q => {
    prompt(q)
        .then(a => writeToFile('README.md', generateMd(a)))
        .catch(e => {
            throw new Error(e)
        })
}

const init = () => ask(questions)

init()
