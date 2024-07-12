# Console Application Project

## Table of Contents
1. [Introduction](#introduction)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Configuration](#configuration)
5. [Examples](#examples)

## Introduction
This project is a console application built with Node.js and TypeScript. It uses the `yargs` library to parse command-line arguments (`argv`). Based on these arguments, it creates a `yargs` object that allows manipulation of the program's flow. The application can generate a multiplication table for a given base number, with an optional limit (default is 10). Additionally, it provides options to display the result in the console and to customize the filename and path where the result will be saved, with default parameters available.

## Installation
Install the project dependencies using npm:
```
npm install
```
## Usage
Run the application from the command line with the following options:
```
npx ts-node src/app.ts --base 9 --limit 5 --show
```
* --base` or `b`: The base number for the multiplication table.
* --limit` or `l`: The limit up to which the table will be generated (default is 10).
* `--show` or `-s`: Boolean flag to display the table in the console.

Alternatively, you can use the following script configuration:
```
npm run dev
```
## Configuration
You can configure the application using the command-line options:
* `--base` or `b` (required): The base number for the multiplication table.
* `--limit` or `l`: The limit up to which the table will be generated (default: 10).
* `--show` or `s`: Show the table in the console (default: false).
* `--name` or `n`: Specify the output file name (default: `multiplication-table`).
* `--destination` or `d`: Specify the path where the file will be saved (default: `./outputs`, creates the directory if it doesn't exist).

## Examples
Generate a multiplication table for the number 5 up to 12 and show it in the console:
```
npx ts-node src/app.ts --base 5 --limit 12 --show
```
Generate a multiplication table for the number 8 and show the result in the console with the default limit:
```
npx ts-node src/app.ts --base 8 
```
Generate a multiplication table for the number 8 and save it to a custom path with a custom filename:
```
npx ts-node src/app.ts -b 8 -n table-n -d exits
```

---

Note:

* `argv`: Short for "argument vector", refers to an array containing the command-line arguments passed to the program when it is executed.
