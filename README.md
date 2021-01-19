# Virtual Pet

A JavaScript virtual pet built as a project as part of the Manchester Codes Software Engineer Fasttrack course.


## Contents
* [General info](#general-info)
* [Areas covered](#areas-covered)
* [Technologies & languages](#technologies-and-languages)
* [Features](#features)
* [Status](#status)

## General info

The idea of this virtual pet game is to look after your pet by feeding and exercising it regularly.

As your pet ages it needs to be fed and exercised and it will tell you what it wants at any time.

Make sure you pay attention to its needs because if you don't ... it will die.


## Areas covered

At stages throughout this project I:

* Used Node.js and Node Package Manager (npm) to install required packages
* Learned the importance of a .gitignore file
* Built the whole project using the principles of Test Driven Development (TDD)
* Used the Jest testing package to run the tests
* Used Node to run JavaScript code in the terminal 
* Got familiar with Node exports and require
* Learned about factoring out "magic numbers" into variables
* Had plenty of practice refactoring code at every stage of the build
* Became much more familiar with Object Oriented Programming (OOP) principles in general
* Learned about exceptions and how to throw them and test for them
* Learned about dependency injection so that the pet can adopt a child
* Rewound git and created a new branch
* Implemented a different way to create a child from within an existing Pet instance on that new branch


## Technologies and languages

* JavaScript
* Node & npm
* Jest
* Git & GitHub


## Features

* The pet is born with an age of 0
* Start values for hunger and fitness can be configured in the constants at the top of the file. Current value are 0 and 10
* As the pet ages, its hunger and fitness values change at different rates, again these are configured in constants at the top.
* Feeding reduces hunger by an amount defined in the constants
* Walking increases fitness, also by an amount defined in the constants
* Triggers are set for hunger and fitness at which point the pet will ask for food, a walk, or both
* If the pet gets too hungry or too unfit it will die (Triggers are configured)
* The pet will die when it gets to a maximum age that can be configured (default = 30)


## Status
* This project is complete
* I also built a rudimentary GUI: https://matt-j-e.github.io/virtual-pet-gui/
