data.sort(function(a, b) { return a.Name > b.Name; });
for (var index in data) {
	$('#film_selector').append('<option value=' + index + '>' + data[index].Name + '</option>');
}		

function hideExplanation() {
	$('#box').css('display', 'none');
}

function showExplanation() {
	$('#box').css('display', 'block');			
}

function fullScreenVersion() {		
	var links = document.getElementsByTagName("link");
	for (var i = 0; i < links.length; i++ ) {
		if (links[i].title == "widescreen") {
			links[i].disabled = true;
		}
		if (links[i].title == "full") {
			links[i].disabled = false;
		}
	}
}

function widescreenVersion() {		
	var links = document.getElementsByTagName("link");
	for (var i = 0; i < links.length; i++ ) {
		if (links[i].title == "widescreen") {
			links[i].disabled = false;
		}
		if (links[i].title == "full") {
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

fullScreenVersion();
changeFilm();