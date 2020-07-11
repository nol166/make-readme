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
        name: 'githubName',
        message: 'What is your github username?',
        validate: string => (string ? true : false),
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
        validate: string => (string ? true : false),
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install dependencies?',
        default: 'npm i',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What command should be run to run tests?',
        default: 'npm test',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repo?',
        default: 'npm start',
    },
    {
        type: 'input',
        name: 'contributing',
        message:
            'What does the user need to know about contributing to the repo?',
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
