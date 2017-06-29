# FICK
*Fucking Incredible Command line King. Add CLI flavour to any website you like to.*

![crown_logo](https://user-images.githubusercontent.com/10194510/27681846-c9e86654-5cc0-11e7-8aca-b63739fbc398.png)


> FICK is highly under development and is for now only available for www.wg-gesucht.de. Checkout the roadmap and feel free to contribute.


## Pre-requirements

You will need `node` and `yarn` installed already on your machine. Further reading for installing *node.js* and *yarn* click here:

- [Install *node.js* on Ubuntu](https://wiki.ubuntuusers.de/Node.js/)
- [Install *node.js* on any other operating system (OS)](https://nodejs.org/en/download/package-manager/)
- [Install *yarn* on any OS](https://yarnpkg.com/lang/en/docs/install/)

Both are required to use `FICK`. *node.js* is the so to speak paradigma for server-side JavaScript (JS) implementation. *yarn* is the better node package manger (npm) for dependency management.

## Installation

```bash
[sudo] yarn global add fick # use sudo only, if you recieve a permission error
```

You can also use *npm* for installation, if *yarn* is not installed yet:

```bash
[sudo] npm install -g fick # use sudo only, if you recieve a permission error
```

## Usage

```bash
fick [Stuttgart|Ludwigsburg|Esslingen] # parameters are contingent
```

## Contribution

Fork that repository, install dependencies with *yarn* or *npm* and use the following commands to test functionality:

```bash
yarn test # run jest test suite and watch file change
yarn start # run FICK main module
```
Please stick to semver versioning. Add an issue and add a merge request on GitHub.

## Licence

Yeah, it is GPL v2. Feel free to use that piece to code!

## Author

I am Michael Czechowski ([www.dailysh.it](http://www.dailysh.it)) web developer from Stuttgart in the deep southern part of Germany. Do not hesitate to contact me: mail@dailysh.it
