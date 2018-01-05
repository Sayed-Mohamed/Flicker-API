(function() {

	// Default configuration
	var defaultConfig = {
		api_uri: 'https://api.flickr.com/services/rest/',
		api_key: null
	};

	// Constructor
	window.Flickr = function(userConfig) {
		this.config = defaultConfig;
		for (var i in userConfig) {
			if (!userConfig.hasOwnProperty(i)) continue;
			this.config[i] = userConfig[i];
		}
	};

	// callbacks array
	window.Flickr._jsonCallback = [];

	// request method
	window.Flickr.prototype.request = function(params, callback) {
		var
			id   = Math.round(Math.random() * 1e9), 
			s    = document.createElement('script'),
			r    = document.getElementsByTagName('script')[0],
			args = [],
			i
		;

		// additional parameters to the request
		params.format = 'json';
		params.api_key = this.config.api_key;
		params.jsoncallback = 'Flickr._jsonCallback[' + id + ']';

		
		for (i in params) {
			if (!params.hasOwnProperty(i)) continue;
			args.push(i + '=' + params[i]);
		}

		// Store callback 
		window.Flickr._jsonCallback[id] = this._handleResponse.bind(this, id, callback, s);

		// Construct the request then append in the page
		s.src = this.config.api_uri + '?' + args.join('&');
		r.parentNode.insertBefore(s, r);
	};

	// response handler
	window.Flickr.prototype._handleResponse = function(id, callback, script, res) {
		// Cleaning
		delete window.Flickr._jsonCallback[id];
		script.parentNode.removeChild(script);

		// Handle errors
		if (res.stat === 'fail') return callback(res, null);

		// Return results to callback
		callback(null, res);
	};

	// Photo search helper
	window.Flickr.prototype.search = function(params, callback) {
		params.method   = 'flickr.photos.search';
		params.extras   = params.extras || 'url_t,url_q';
		params.per_page = params.per_page || 50;
		this.request(params, callback);
	};

	// Interesting photos helper
	window.Flickr.prototype.interesting = function(params, callback) {
		params.method   = 'flickr.interestingness.getList';
		params.extras   = params.extras || 'url_l';
		params.per_page = params.per_page || 50;
		this.request(params, callback);
	};

	

})();



