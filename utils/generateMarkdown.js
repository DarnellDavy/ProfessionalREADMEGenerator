// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = "";

  switch (license) {
    case 'Apache_2.0':
      licenseBadge = 'https://img.shields.io/badge/License-Apache_2.0-blue.svg';
      break;
    case 'MIT':
      licenseBadge = 'https://img.shields.io/npm/l/starwars-names.svg?style=flat-square';
      break;
    case 'NPM':
      licenseBadge = 'https://img.shields.io/npm/v/16';
      break;
    case 'None':
      licenseBadge = '';
      break;
  }
  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = "";

  switch (license) {
    case 'Apache_2.0':
      licenseLink = 'https://www.apache.org/licenses/LICENSE-2.0';
      break;
    case 'MIT':
      licenseLink = 'https://www.mit.edu/~amini/LICENSE.md';
      break;
    case 'NPM':
      licenseLink = 'https://docs.npmjs.com/policies/npm-license';
      break;
    case 'None':
      licenseLink = 'None';
      break;
  }

  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  let licenseLink = renderLicenseLink(data.license);
  let licenseSection =
    `## License 
  Licensed Under: ${data.license}  
  License Link: ${licenseLink}
  `
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  let licenseSection = renderLicenseSection(data);
  let licenseBadge = renderLicenseBadge(data.license);

  let fileData =
  `# ${data.title}
![alt text](${licenseBadge})
