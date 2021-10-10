function hideExplanation() {
	$('#box').css('display', 'none');
}

function showExplanation() {
	$('#box').css('display', 'block');			
}

function normalScreenVersion() {		
	var links = document.getElementsByTagName("link");
	for (var i = 0; i < links.length; i++ ) {
		if (links[i].title == "widescreen") {
			links[i].disabled = true;
		}
		if (links[i].title == "normal") {
			links[i].disabled = false;
		}
	}
}

function wideScreenVersion() {		
	var links = document.getElementsByTagName("link");
	for (var i = 0; i < links.length; i++ ) {
		if (links[i].title == "widescreen") {
			links[i].disabled = false;
		}
		if (links[i].title == "normal") {
			links[i].disabled = true;
		}
	}
}						

function changeFilm() {
	var filmIndex = document.getElementById("film_selector").selectedIndex;
	$('#barcode *').remove();
	var film = data[filmIndex];
	for (var x = 0; x < film.Colours.length; x++) {
		var percent = (x / film.Colours.length * 100).toFixed(2);
		$('#barcode').append("<div class='line' style='left:" + percent + "%;background:#" + film.Colours[x] + "'></div>");
	}
	$('.line').on('click', function() { showExplanation(); });
}

function enterFullscreen() {
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen();
  }
}

function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  }
}

function isUsed(a) {
	return a;
}

isUsed([hideExplanation, exitFullscreen, enterFullscreen, wideScreenVersion])

// make the film list
data.sort(function(a, b) { return a.Name > b.Name; });
for (var index in data) {
	$('#film_selector').append('<option value=' + index + '>' + data[index].Name + '</option>');
}		

// show the default view
normalScreenVersion();
changeFilm();