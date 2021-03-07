const Template = require('../template.js');

// Hier k�nnen Module geladen werden.
//
// Beispiel:
// const User = require('../db/user.js');

module.exports = async function (/* Hier k�nnen Daten eingelesen werden. */) {

	// Hier k�nnen Daten aus der Datenbank gelesen und / oder verarbeitet werden.
	//
	// Beispiel:
	// var user = new User(1);
	// await user.init();

	var html = new Template('./html/Kristin.html', {
		// Hier k�nnen Daten an das HTML-Dokument �bergeben werden.
	});
	return await html.parse();
}
