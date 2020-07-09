const { generateMd } = require('./utils/generateMarkdown')
const questions = require('./src/questions.js')
const { prompt } = require('inquirer')

// array of questions for user
const ask = questions => {
    prompt(questions)
        .then(answers => {
            console.log(answers)
        })
        .catch(error => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else when wrong
            }
        })
}

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
const init = () => ask(questions)

// function call to initialize program
init()
