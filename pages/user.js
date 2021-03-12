const Template = require('../template.js');

// Hier können Module geladen werden.
//
// Beispiel:
const User = require('../db/user.js');

module.exports = async function(id) {

	// Hier können Daten aus der Datenbank gelesen und / oder verarbeitet werden.
	//
	// Beispiel:
	var user = new User(id);
	await user.init();

	var html = new Template('./html/user.html',{
		// Hier können Daten an das HTML-Dokument übergeben werden.
		username: user.name
	});
	return await html.parse();
}
