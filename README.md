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

[![X](https://www.codefactor.io/repository/GitHub/robson/Film-Barcodes-Visualisation/badge?style=flat-square)](https://www.codefactor.io/repository/GitHub/robson/Film-Barcodes-Visualisation)

## Steps

Follow these steps to make your own version of this project with your own set of films.

The steps are currently untested. If you encounter a problem, just create an issue in this repository and I'll help you out.

You will need Visual Studio and very basic C# knowledge.

### Step 1: Get all the films

 * Create the path: *c:\temp\films\*
 * Put all your films in there. The film format can be any of: mp4, mkv, avi, etc...

### Step 2: Other requirements

 * [Get FFmpeg](https://ffmpeg.org/)
 * Put the exe/dlls in *c:\temp\films\* with your films.
 * [Download this repository](https://codeload.github.com/Robson/Film-Barcodes-Visualisation/zip/refs/heads/main). Unzip it somewhere that is **not** *c:\temp\films\*

### Step 3: Get the frames

Repeat this for each film:

 * In *c:\temp\films\* make a folder that has the name of your film.
 * In that new folder, create a file called *name-of-your-film*.bat 
 * In the BAT file, put this line: (make sure to edit the part in the middle)
 > C:\Temp\films\ffmpeg -i *filename-of-your-film* -r 0.1 frame_%%04d.png
 * After that line, put a new line which just has:
 > pause
 * Save the BAT file.
 * Run the BAT file.
 * Wait.

Multiple BAT files can be run at the same time, which will greatly speed up this step.

### Step 4: Convert frames to JSON

 * In your downloaded copy of the repository, open *JsonCreator\JsonCreator.sln* in Visual Studio.
 * Navigate to the code of *FrmMain.cs*
 * In *public FrmDisplay* you will see a few lines starting with *new FrameReader*. For each of your films, you will need one equivalent line like this.
 * For each of your films, create a new line in that format. The first bit of text is the name of the film. The second bit of text is the folder containing the frames for that film.
 * Make sure to delete the three example lines (Frankenstein, Midsommar, Oppenheimer).
 * Run the code.
 * Wait.
 * A window will appear saying "Done".
 
### Step 5: Combine with the webpage.

 * In the folder for your JsonCreator project, navigate to Bin\Debug
 * You will see a *data.js* file. Copy that file.
 * In your downloaded version of the repository, overwrite the *data.js* file with your newly created *data.js* file.
 
### Step 6: Testing

 * In your downloaded version of the repository, open index.html
 * You should see the list of films and the barcode should appear for each film.

