// Developed by Christopher Amirian (amirians.com)

function init() {
	var browser = '';
	if (window.navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
		browser = 'chrome'
	} else if (window.navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
		browser = 'firefox'
	} else if (window.navigator.userAgent.toLowerCase().indexOf('trident') > -1) {
		browser = 'ie'
	} else if (window.navigator.userAgent.toLowerCase().indexOf('opera') > -1) {
		browser = 'opera'
	} else if (window.navigator.userAgent.toLowerCase().indexOf('safari') > -1) {
		browser = 'safari'
	} else {
		browser = window.navigator.appCodeName;
	}
	var theBody = document.getElementsByTagName("body")[0];
	theBody.className = theBody.className + ' ' + browser;
}

window.onload = init;