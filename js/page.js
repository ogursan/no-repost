var Reposts = function () {
	this.reposts = $('table.published_by_wrap').parents('.feed_row');

	this.clear = function() {
		$(this.reposts).remove();
		return this;
	}

	this.search = function() {
		this.reposts = $('table.published_by_wrap').parents('.feed_row');
		return this;
	}
};

var reposts = new Reposts();
reposts.clear();

var observer = new MutationObserver(function(mutations){
	mutations.forEach(function(element){
		var row = $(element.addedNodes[0]).find('table.published_by_wrap');
		if (row) {
			$(row).parents('.feed_row').remove();
		}
	});
});

// configuration of the observer:
var config = {
	attributes: true,
	childList: true,
	characterData: true
};

// pass in the target node, as well as the observer options
observer.observe(document.querySelector('#feed_rows'), config);

console.log('Listening');