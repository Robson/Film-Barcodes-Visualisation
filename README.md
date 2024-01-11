# Film Barcodes Visualisation

## Table of Contents

 * [Demo](#demo)
 * [Explanation](#explanation)
 * [Live Version](#live-version)
 * [Compatibility](#compatibility)
 * [Testing](#testing) 
 * [File Descriptions](#file-descriptions)
 * [Technologies](#technologies)
 * [Validation](#validation)
 * [Steps (Incomplete)](#steps-incomplete)

## Demo

![Demo](https://raw.githubusercontent.com/Robson/Film-Barcodes-Visualisation/master/Demo.gif)

## Explanation

Each line in the animation above is the average colour at ten-second intervals for the selected film.

This project is a webpage that allows you to view that for a variety of films.

## Live Version

http://robson.plus/film-barcodes/

## Compatibility

The output for this project is designed for desktop and mobile.

| Platform | OS      | Browser          | Version | Status  |
| :------- | :------ | :--------------- | :------ | :------ |
| Desktop  | Windows | Firefox          | 85      | Working |
| Desktop  | Windows | Opera            | 74      | Working |
| Desktop  | Windows | Chrome           | 88      | Working |
| Desktop  | Windows | Edge             | 88      | Working |
| Mobile   | Android | Chrome           | 85      | Working |

Last tested on 17th February 2021.

## Testing

To run this on your computer:
 * [Download the repository](https://github.com/Robson/Film-Barcodes-Visualisation/archive/master.zip).
 * Unzip anywhere.
 * Open *index.html* in your browser.

## File Descriptions

### data.js

This is the JSON data with one line per film. Each film has an array of hex colour codes.

### index.html + page.js

This is the webpage to show the barcodes and the JavaScript that generates the barcodes at run time.

### normal.css + widescreen

These are the stylesheets that format each of the views. The user can switch between these at any time.
 
## Technologies

This is built using:
 * HTML
 * CSS
 * JavaScript
   * <a href="https://github.com/jquery/jquery">jQuery</a>

## Validation
   
<a href="https://validator.w3.org/nu/?doc=https%3A%2F%2Frobson.plus%2Ffilm-barcodes%2F"><img src="https://www.w3.org/Icons/valid-html401-blue" alt="Valid HTML" /></a>

<a href="http://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Frobson.plus%2Ffilm-barcodes%2Fwidescreen.css&profile=css3svg&usermedium=all&warning=1"><img src="https://jigsaw.w3.org/css-validator/images/vcss-blue" alt="Valid CSS" /></a>

[![X](https://www.codefactor.io/repository/github/robson/Film-Barcodes-Visualisation/badge?style=flat-square)](https://www.codefactor.io/repository/github/robson/Film-Barcodes-Visualisation)

## Steps (Incomplete)

To add a film to the page:

### Step 1: Export the Frames

* [Get FFmpeg](https://ffmpeg.org/) and put the exe/dlls in a folder.
* Get the film. Put it in the same folder. Can be mp4, mkv, avi, etc...
* Make a file called export.bat in the same folder.
* In the BAT file, put this line:
> ffmpeg -i _filename-of-your-film_ -r 0.1 frame_%%04d.png
* Change the filename to match your film.
* Save the BAT file.
* Run the BAT file.
* Wait.

### Step 2

*To-do*

### Step 3

*To-do*