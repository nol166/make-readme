class generateMd {
    renderLicenseBadge = license =>
        license !== 'none'
            ? `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
            : ''

    renderLicenseLink = license =>
        license === 'none' ? `\n* [License](#license)\n` : ''

    renderLicenseSection = license =>
        license === 'none'
            ? `## License
  
  This project is licensed under the ${license} license.`
            : ''
}

const writeToFile = (fileName, data) =>
    fs.writeFileSync(path.join(process.cwd(), fileName), data)

module.exports = { generateMd, writeToFile }
