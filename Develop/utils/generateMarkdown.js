// function to generate markdown for README
const generateMarkdown = (data) => {
  return `# ${data.title}
  
  ## Description 
  ${data.description}
  ## Table of Contents
  * [Title](#title)
  * [Description](#description)
  * [Usage](#usage)
  * [Installation](#installation)
  * [Credits](#credits)
  * [License](#license)
  
  ## Usage 
  ${data.usage}
  
  ## Installation 
  ${data.install}

  ## Credits
  ${data.credits}

  ## License 
  ${data.license}
`;
};

// use for importing Markdown in index
module.exports = generateMarkdown;
