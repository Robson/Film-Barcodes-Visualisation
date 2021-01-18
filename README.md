# Film Barcodes Visualisation

## Explanation

<img src="http://robson.plus/images/film-barcodes.png" />

Each line in the image above is the average colour at ten-second intervals for the film Exam.

This project is a webpage that allows you to view that for a variety of films.

## Live Version

http://robson.plus/film-barcodes/

## Technologies

This is built using:
 * HTML
 * CSS
 * JavaScript.

<a href="https://validator.w3.org/nu/?doc=https%3A%2F%2Frobson.plus%2Ffilm-barcodes%2F"><img src="https://www.w3.org/Icons/valid-html401-blue" alt="Valid HTML" /></a>
<a href="http://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Frobson.plus%2Ffilm-barcodes%2Fwidescreen.css&profile=css3svg&usermedium=all&warning=1"><img src="https://jigsaw.w3.org/css-validator/images/vcss-blue" alt="Valid CSS" /></a>

## Steps (Incomplete)

To add a film to the page:

### Step 1

*Export the frames using VLC.*

* Get the film.
* Make a folder to save the frames.
* Make a file called export.bat
* In the BAT file, put this line:
> "C:\Program Files (x86)\VideoLAN\VLC\vlc.exe" "C:\Temp\Films\Mean Girls.mp4" --rate=1 --video-filter=scene --vout=dummy --aout=dummy --start-time=0 --scene-format=png --scene-ratio=240 --scene-prefix=snap --scene-path=C:\Temp\Films\mg\ vlc://quit
* Change the Mean Girls path+filename to be a link to your own film.
* Change the --scene-path to be the path to your folder.
* You may need to change the path to VLC.
* Save the BAT file.
* Run the BAT file.
* Wait.

### Step 2

*To-do*

### Step 3

*To-do*