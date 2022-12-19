# Test automation with webdriver.io

## Prerequisites
- Java 11+
- Node.js version 14+ with chocolatey (when on Windows)

## Run tests

1. Install dependencies 
In terminal, execute command
```shell
npm install
```
2. Run tests
In terminal, execute command
```shell
npx wdio run ./wdio.conf.js
```
A confirmation window to allow webdriver to control your browser may pop-up when running the tests for the first time. Confirm it to allow.

POZOR: Pokaždé když jsi znovu zapnu VS code tak se mi to překlikne na verzi node 14.21 a v této verzi nefungují asertace a google stránka jen proklikne. Je potřeba vždy pomocí nvm nainstalovat 14.20.0
'nvm use v14.20.0'