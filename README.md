# Mailer &middot; [![GitHub last commit](https://img.shields.io/github/last-commit/davidc4747/mailer.svg)](https://github.com/davidc4747/mailer) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/davidc4747/mailer/pulls)

Guesses emails like crazy

## Installing / Getting started


```shell
git clone https://github.com/davidc4747/mailer.git
cd mailer/
```

## Developing

### Built With
HTML & CSS  
JavaScript  
Electron  
ReactJS  

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

How to Build: 

```shell
# TODO
```

## Versioning

We can maybe use [SemVer](http://semver.org/) for versioning. For the versions available, see the [link to tags on this repository](/tags).


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
