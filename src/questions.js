const questions = [
    {
        type: 'input',
        name: 'project_name',
        message: 'What is the name of your project/app?',
        validate: string => (string ? true : false),
    },
    {
        type: 'input',
        name: 'description',
        message: 'Tell us what your project is about?',
        validate: string => (string ? true : false),
    },
    {
        type: 'input',
        name: 'description',
        message: 'Tell us what your project is about?',
        validate: string => (string ? true : false),
    },
    {
        type: 'checkbox',
        message: 'Select technologies used',
        name: 'toppings',
        choices: [
            {
                name: 'HTML',
            },
            {
                name: 'CSS',
            },
            {
                name: 'Javascript',
                checked: true,
            },
            {
                name: 'Typescript',
            },
            {
                name: 'Go',
            },
            {
                name: 'Node',
            },
            {
                name: 'Bootstrap',
            },
            {
                name: 'Tailwind',
            },
            {
                name: 'Materialize',
            },
            {
                name: 'MongoDB',
            },
            {
                name: 'Postgres',
            },
            {
                name: 'Mysql',
            },
            {
                name: 'Inquirer',
            },
            {
                name: 'Express',
            },
            {
                name: 'Axios',
            },
        ],
        validate: answer => {
            if (answer.length <= 0) {
                console.log('You must provide one piece of tech')
                return false
            }
            return true
        },
    },
]

module.exports = questions
