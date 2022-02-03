// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const fileGenerator = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter your name.',
            validate: name => {
                if (name) {
                    return true;
                } else {
                    console.log('You must enter a name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter your github username.',
            validate: github => {
                if (github) {
                    return true;
                } else {
                    console.log('You must enter a github username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address.',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('You must enter an email address!');
                    return false;
                }
            }
        },
        {
    }
}