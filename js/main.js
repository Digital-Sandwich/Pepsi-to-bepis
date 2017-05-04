document.addEventListener('DOMContentLoaded', function() {
	var normal = document.getElementById('normal');
	var bepis = document.getElementById('bepis');

	var allTabs = [];
	chrome.tabs.query({currentWindow: true}, function(tabs) {
		for(var i = 0; i<tabs.length;i++) {
			allTabs.push(tabs[i]);
			chrome.tabs.executeScript(tabs[i].id, {file: "js/normalize.js", runAt: "document_end"});
		}
	});
	console.log(allTabs);

	normal.addEventListener('click', function(normal) {
			for(var i = 0; i<allTabs.length;i++) {
				chrome.tabs.executeScript(allTabs[i].id, {file: "js/normalize.js", runAt: "document_end"});
			}
		document.getElementById("info").textContent= "off";
	});
	
	bepis.addEventListener('click', function(bepis) {
			for(var i = 0; i<allTabs.length;i++) {
				chrome.tabs.executeScript(allTabs[i].id, {file: "js/bepisitize.js", runAt: "document_end"});
			}
		document.getElementById("info").textContent = 'on';
	});
});