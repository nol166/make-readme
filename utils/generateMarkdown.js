const { writeFileSync } = require('fs')
const path = require('path')

const renderLicenseBadge = license =>
    license !== 'None'
        ? `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
        : ''

const renderLicenseLink = license =>
    license === 'None' ? `\n* [License](#license)\n` : ''

const renderLicenseSection = license => {
    if (license === 'None') {
        return `## License
        
        This project is licensed under the ${license} license.`
    } else {
        return ''
    }
}

const writeToFile = (fileName, data) =>
    writeFileSync(path.join(process.cwd(), fileName), data)

const makeMd = data => {
    return `# ${data.project_name}
  ${renderLicenseBadge(data.license)}
  
  ## Description
  
  ${data.description}
  
  ## Table of Contents 
  
  * [Installation](#installation)
  
  * [Usage](#usage)
  ${renderLicenseLink(data.license)}
  * [Contributing](#contributing)
  
  * [Tests](#tests)
  
  * [Questions](#questions)
  
  ## Installation
  
  To install necessary dependencies, run the following command:
  
  \`\`\`
  ${data.installation}
  \`\`\`
  
  ## Usage
  
  ${data.usage}
  
  ${renderLicenseSection(data.license)}
    
  ## Contributing
  
  ${data.contributing}
  
  ## Tests
  
  To run tests, run the following command:
  
  \`\`\`
  ${data.test}
  \`\`\`
  
  ## Questions
  
  If you have any questions about the repo, open an issue or contact me directly at ${
      data.email
  }. You can find more of my work at [${data.github}](https://github.com/${
        data.github
    }/).
  
  `
}

module.exports = { makeMd, writeToFile }
