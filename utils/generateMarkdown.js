// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  # Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Tests](#tests)
  - [Questions](#questions)

  # Description
  ${data.description}

  # Installation
  Installation instructions: ${data.installation}
 
  # Usage
  Usage information: ${data.usage}

  # Contribution
  Contribution guidelines: ${data.contribution}

  # Tests
  Test Instructions: ${data.tests}

  # Questions
  Any questions? Contact through <a href='https://github.com/${data.github}'>GitHub</a> or ${data.email}
`;
}
module.exports = generateMarkdown;
