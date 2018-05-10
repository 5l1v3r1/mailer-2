# Mailer &middot; [![GitHub last commit](https://img.shields.io/github/last-commit/davidc4747/mailer.svg)](https://github.com/davidc4747/mailer) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/davidc4747/mailer/pulls)

Guesses emails like crazy

## Screenshots

<img src="demos/shot1.png" alt="Example1" width="250" style="float: left;">
<img src="demos/shot2.png" alt="Example2" width="250" style="">   

## Installation

```shell
git clone https://github.com/davidc4747/mailer.git
cd mailer/
npm i
npm run pack

# A package of the project will be created inside the "package/" folder
# An executable file for your operating system will be inside

```

## Developing

### Built With
HTML & CSS  
JavaScript  
Electron  
ReactJS  
nodemailer  

### Prerequisites
What is needed to set up the dev environment:  
[Node.js](https://nodejs.org/en/)  
[Git](https://git-scm.com/)  


### Setting up Dev

Here's a brief intro about what a developer must do in order to start developing
the project further:

```shell
git clone https://github.com/davidc4747/mailer.git
cd mailer/
npm i
npm start
```

### Building

If your project needs some additional steps for the developer to build the
project after some code changes, state them here. for example:

```shell
git clone https://github.com/davidc4747/mailer.git
cd mailer/
npm i
npm run build
```

### Deploying / Publishing

How to Deploying: 

```shell
# TODO
```

## Configuration

You need to create a "transporter.config.json" next to the package.json.  
Example transporter.config.json:  

```shell
{
	"service": "Gmail",
	"auth": {
		"user": "example@email.com",
		"pass": "EXAMPLE_KEY"
	}
}
```
