chrome.tabs.onUpdated.addListener(function(id, info, tab) {
	if (tab.url) {
		if (/vk.com\/feed$/.test(tab.url) || /vk.com\/al_feed.php$/.test(tab.url)) {
			chrome.pageAction.show(id);
		}
	}
});