// require jQuery

function addNodes(nodes, i = 0) {

	// Finish
	if (i >= nodes.length) {

		var passage = $(".passage")[0];
		if (passage)
			passage.classList.add("display");
		return;
	}

	// Current element
	let node = nodes[i];

	// Text node
	if (node.nodeType == node.TEXT_NODE) {

		let fullTxt = node.textContent;
		let newSpan = document.createElement("span")
		newSpan.classList.add("typewriting");
		newSpan.classList.add("display");
		node.replaceWith(newSpan);
		typewriter(newSpan, fullTxt, nodes, i);

	} else {

		node.classList.add("display");
		addNodes(nodes, i + 1);
	}
};

function typewriter(node, fullTxt, nodes, i) {

	if ($(node).is(".typewriting")) {

		// Finished typing
		if (node.textContent === fullTxt) {

			node.classList.remove("typewriting");
			setTimeout(() => addNodes(nodes, i + 1), 40);

		// Typing
		} else {

			node.textContent = fullTxt.slice(0, node.textContent.length + 1);
			setTimeout(() => typewriter(node, fullTxt, nodes, i), 40);
		}

	// Forced to complete
	} else {

		node.textContent = fullTxt;
	}
}

function addSource(elem, path) {
	$('<source>').attr('src', path).appendTo(elem);
}

var hoverBeep = $("<audio id='hover-beep'/>");
addSource(hoverBeep, 'https://raw.githubusercontent.com/rtkleong10/Let-s-Go-On-An-Adventure-/master/audio/UI_Quirky29.mp3');
hoverBeep.appendTo("body");

var clickBeep = $("<audio id='click-beep'/>");
addSource(clickBeep, 'https://raw.githubusercontent.com/rtkleong10/Let-s-Go-On-An-Adventure-/master/audio/UI_Quirky19.mp3');
clickBeep.appendTo("body");

// Load Screen Slowly
$(document).on(':passagedisplay', function() {

	var nodes = $(".passage").contents();
	addNodes(nodes);

	// Sound
	$(".passage a").each(function(i) {

		var copy = $("#hover-beep").clone();
		copy.attr('id', 'hover-beep' + i);
		copy.appendTo($(this).parent());
		$(this).data("hover-beep", i);

		copy = $("#click-beep").clone();
		copy.attr('id', 'click-beep' + i);
		copy.appendTo($(this).parent());
		$(this).data("click-beep", i);
	})
	.mouseenter(function() {

		var currentAudio = $("#hover-beep" + $(this).data("hover-beep"))[0];
		currentAudio.play().catch(() =>{
			console.log("Uncaught promise");
		});
		currentAudio.currentTime = 0;
	});
});

$(document).on(':passageend', function() {

	var currentAudio = $("#click-beep")[0];
	currentAudio.play().catch(() =>{
		console.log("Uncaught promise");
	});
	currentAudio.currentTime = 0;
});

// Load screen instantly
$(document).click(function(e) {

    if(!$(e.target).is('a, a *')) {
				
		var nodes = $(".passage").contents();
		for (let i = 0; i < nodes.length; i++) {

			let node = nodes[i];

			if (node.nodeType == node.TEXT_NODE) {

				let newSpan = document.createElement("span");
				newSpan.classList.add("typewriting");
				newSpan.classList.add("display");
				newSpan.textContent = node.textContent;
				node.replaceWith(newSpan);

			} else {
				node.classList.add("display");
				
			}
		}

		var typingNodes = $(".typewriting");
		for (let i = 0; i < typingNodes.length; i++)
			typingNodes[i].classList.remove("typewriting");
	}
});