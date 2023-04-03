// the form element ID and the message.
function addErrorMessage(id, msg) {
   	'use strict';

	var elem = U.$(id);
	var newId = id + "Error";
	var span = U.$(newId);
	if (span) {
		span.firstChild.value = msg;
	}
	else {

		span = document.createElement("span");
		span.id = newId;
		span.className = "error";
		span.appendChild(
			document.createTextNode(msg)
		);
		elem.parentNode.appendChild(span);
	
		var nodes = elem.parentNode.childNodes;
		for (var i = 0; i < nodes.length; i++)
		{
			if(nodes[i].innerHTML != "" && nodes[i].id == "") {
				nodes[i].className = 'error';
			}
		}
	}
} 
function removeErrorMessage(id) {
   	'use strict';


	var span = U.$(id + "Error");
	if (span) {
		var nodes = span.parentNode.childNodes;
		for (var i = 0; i < nodes.length; i++)
		{
			if(nodes[i].innerHTML != "" && nodes[i].id == "") {
				nodes[i].className = null;
			}
		}
		span.parentNode.removeChild(span);
	}
} 