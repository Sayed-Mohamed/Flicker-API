(function() {

	$("#setting").click(function(){
    $(".setmen").toggle();
    $(".googleapps").hide();
	});

	$("#goapp").click(function()
	{

	$(".googleapps").toggle();
	$(".setmen").hide();

	});


	// Create img template 
	var template = document.createElement('ul');
	template.innerHTML =
		'<li class="gallery-item">'+
	'<div class="gallery-contents">'+
		'<div class="thumbnail gallery-trigger">'+
			'<img class="thumb" />'+ 
				'<div class="htext">150&nbspx&nbsp150&nbsp-&nbsp</div>'+
		'</div>'+
    '</div>'+
	'<div class="gallery-expander">'+
		'<div class="gallery-expander-contents">'+
			'<div class="gallery-trigger-close close">'+
				'<img src="img/x.gif" alt="close">'+
			'</div>'+
			'<div class="col" style=" width: 47.5%;">'+ 
				'<div class="image">'+
					'<img class="thumb2" />'+
				'</div>'+
			'</div>'+
			'<div class="col" style="padding-right: 0px;">'+
				'<div class="title">'+
					'<span style="display: block;font-family: arial,sans-serif;font-size: 13px;color: #888888;margin-top: 8px;">The Independent-2048×1536-Search by image</span>'+
				'</div>'+
				'<div class="contents">'+
					'<a class="vis" id="visitlink"  target="_blank">'+
						'<svg id="earthimg" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"></path></svg>Visit'+
					'</a>'+
					'<a class="vis2" id="viewimg" style="display: inline-block;width: 77px;height: 37px;padding-top: 1px;"  target="_blank">View<br/>'+ 
						'<span style="display: inline-block; position: absolute; margin-top: -13px; margin-left: -14px;">image</span>'+
					'</a>'+
					'<a class="vis" id="save">'+
						'<svg id="earthimg" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path class="_czr" d="M18,19.1122997 L12,16.5687897 L6,19.1122997 L6,3.94457951 L18,3.94457951 L18,19.1122997 Z M17.7133331,2 L6.28555552,2 C5.02849998,2 4.01142778,3 4.01142778,4.22222222 L4,22 L11.9994443,18.6666667 L19.9988887,22 L19.9988887,4.22222222 C19.9988887,3 18.9703887,2 17.7133331,2 Z"></path> </svg>Save'+
					'</a>'+
					'<a class="vis" id="sometxt" style="display: inline-block;width: 77px;height: 37px;padding-top: 1px;"  target="_blank">View<br/>'+
						'<span style="display: inline-block; position: absolute; margin-top: -13px; margin-left: -14px;">saved</span>'+
					'</a>'+
					'<a class="vis" id="share">'+
						'<svg id="earthimg" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path class="_czr" d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"></path> </svg>Share'+
					'</a>'+
				'</div>'+
				'<div id="borderdiv" style="border-bottom: 1px solid #121212;box-shadow: 0 1px #2A2A2A;margin-left:-40px;">'+
				'</div>'+
				'<span id="reimg" style="color: #9f9f9f; font-size: 13px;text-decoration: none;font-family: arial,sans-serif;margin-top: 21px; display: block;margin-left: -21px;">Related images:'+
				'</span>'+
				'<ul class="relatedimg">'+
					'<li>'+
						'<img class="thumb3" />'+
					'</li>'+
					'<li>'+
						'<img class="thumb4" />'+
					'</li>'+
					'<li>'+
						'<img class="thumb5" />'+
					'</li>'+
					'<li>'+
						'<img class="thumb6" />'+
					'</li>'+
					'<li>'+
						'<img class="thumb7" />'+
					'</li>'+
					'<li>'+
						'<img class="thumb8" />'+
					'</li>'+
					'<li>'+
						'<img class="thumb9" />'+
					'</li>'+
					'<li>'+
						'<img  class="thumb10" style="opacity:0.5;" />'+
						'<span style="position: absolute;margin-right: 216px;margin-left: -61px;margin-top: 21px;font-family: arial,sans-serif;color: #ddd;font-size: medium;text-align: center;text-shadow: 0 0 0.5em #000;overflow-wrap: break-word;">View more</span>'+
					'</li>'+
				'</ul>'+
				'<span id="lastsp">Images may be subject to copyright.</span>'+
				'<span id="lasthe">&nbsp-&nbspGet help</span>'+
				'<span id="lastf">&nbsp-&nbspSend feedback</span>'+
			'</div>'+
		'</div>'+
	'</div>'+
'</li>'
	;
	template = template.firstChild;

	// Init variables
	var nextPage, hasScrollRequest = false;

	// Inialize the Flickr API
	var flickr = new Flickr({
		api_key: 'f5d711639dc9961ec6a319efda951609'
	});

	
	// Empty list
	var emptyResults = function() {
		Array.prototype.slice.call(document.querySelectorAll('.gallery-item')).forEach(function(card) {
			card.classList.add('flipped');
		});
	};

	// Replace list content
	var replaceResults = function(err, data) {
		if (err) throw new Error(err.message);

		// Remove loader
		document.querySelector('.loader').classList.remove('active');

		hasScrollRequest = false;

		var cards = Array.prototype.slice.call(document.querySelectorAll('.gallery-item'));

		var items = document.createDocumentFragment();

		data.photos.photo.forEach(function(photo, i) {
			var item, newItem = false;
			// Get an existing item
			if (cards[i]) {
				item = cards[i];

			// create new item using template
			} else {
				item = template.cloneNode(true);
				newItem = true;

			}

          

           
			//  Fill the template
			item.querySelector('.vis').setAttribute('href', 'http://www.flickr.com/photos/' + photo.owner + '/' + photo.id);
			item.querySelector('.thumb').setAttribute('src', (photo.url_q || photo.url_t) + '?ts=' + (+new Date()));
			item.querySelector('.thumb').setAttribute('alt', photo.title);
			item.querySelector('.thumb').setAttribute('title', photo.title);

			item.querySelector('.thumb2').setAttribute('src', (photo.url_q || photo.url_t) + '?ts=' + (+new Date()));
			item.querySelector('.thumb2').setAttribute('alt', photo.title);
			item.querySelector('.thumb2').setAttribute('title', photo.title);

			item.querySelector('.thumb3').setAttribute('src', (photo.url_q || photo.url_t) + '?ts=' + (+new Date()));
			item.querySelector('.thumb3').setAttribute('alt', photo.title);
			item.querySelector('.thumb3').setAttribute('title', photo.title);

			item.querySelector('.thumb4').setAttribute('src', (photo.url_q || photo.url_t) + '?ts=' + (+new Date()));
			item.querySelector('.thumb4').setAttribute('alt', photo.title);
			item.querySelector('.thumb4').setAttribute('title', photo.title);

			item.querySelector('.thumb5').setAttribute('src', (photo.url_q || photo.url_t) + '?ts=' + (+new Date()));
			item.querySelector('.thumb5').setAttribute('alt', photo.title);
			item.querySelector('.thumb5').setAttribute('title', photo.title);

			item.querySelector('.thumb6').setAttribute('src', (photo.url_q || photo.url_t) + '?ts=' + (+new Date()));
			item.querySelector('.thumb6').setAttribute('alt', photo.title);
			item.querySelector('.thumb6').setAttribute('title', photo.title);

			item.querySelector('.thumb7').setAttribute('src', (photo.url_q || photo.url_t) + '?ts=' + (+new Date()));
			item.querySelector('.thumb7').setAttribute('alt', photo.title);
			item.querySelector('.thumb7').setAttribute('title', photo.title);

			item.querySelector('.thumb8').setAttribute('src', (photo.url_q || photo.url_t) + '?ts=' + (+new Date()));
			item.querySelector('.thumb8').setAttribute('alt', photo.title);
			item.querySelector('.thumb8').setAttribute('title', photo.title);

			item.querySelector('.thumb9').setAttribute('src', (photo.url_q || photo.url_t) + '?ts=' + (+new Date()));
			item.querySelector('.thumb9').setAttribute('alt', photo.title);
			item.querySelector('.thumb9').setAttribute('title', photo.title);

			item.querySelector('.thumb10').setAttribute('src', (photo.url_q || photo.url_t) + '?ts=' + (+new Date()));
			item.querySelector('.thumb10').setAttribute('alt', photo.title);
			item.querySelector('.thumb10').setAttribute('title', photo.title);

			

			
			item.querySelector('.vis2').setAttribute('href', (photo.url_q || photo.url_t) + '?ts=' + (+new Date()));
			item.querySelector('.title').innerHTML+= photo.title;
			item.querySelector('.htext').innerHTML+= photo.title;



			if (newItem) items.appendChild(item);
		});

		// Append new img to  list
		document.querySelector('.gallery-items').appendChild(items);
             
    							
                  (function(global, $){
    $('.gallery-items').imagelistexpander({
        prefix: "gallery-"
    });
})(this, jQuery)
    							
				

				
		// Remove un-needed img from the list
		if (cards.length - data.photos.photo.length <= 0) return;
		Array.prototype.slice.call(document.querySelectorAll('.gallery-item:nth-child(1n+' + data.photos.photo.length + ')')).forEach(function(card) {
			card.parentNode.removeChild(card);
		});
	};

	// Append new results at end of the list
	var appendResults = function(err, data) {
		if (err) throw new Error(err.message);

		hasScrollRequest = false;

		var items = document.createDocumentFragment();

		data.photos.photo.forEach(function(photo, i) {
			var item = template.cloneNode(true);

			// Update items 
			
           
		
			item.querySelector('.vis').setAttribute('href', 'http://www.flickr.com/photos/' + photo.owner + '/' + photo.id);
			item.querySelector('.thumb').setAttribute('src', (photo.url_q || photo.url_t) + '?ts=' + (+new Date()));
			item.querySelector('.thumb').setAttribute('alt', photo.title);
			item.querySelector('.thumb').setAttribute('title', photo.title);

			item.querySelector('.thumb2').setAttribute('src', (photo.url_q || photo.url_t) + '?ts=' + (+new Date()));
			item.querySelector('.thumb2').setAttribute('alt', photo.title);
			item.querySelector('.thumb2').setAttribute('title', photo.title);

			item.querySelector('.thumb3').setAttribute('src', (photo.url_q || photo.url_t) + '?ts=' + (+new Date()));
			item.querySelector('.thumb3').setAttribute('alt', photo.title);
			item.querySelector('.thumb3').setAttribute('title', photo.title);

			item.querySelector('.thumb4').setAttribute('src', (photo.url_q || photo.url_t) + '?ts=' + (+new Date()));
			item.querySelector('.thumb4').setAttribute('alt', photo.title);
			item.querySelector('.thumb4').setAttribute('title', photo.title);

			item.querySelector('.thumb5').setAttribute('src', (photo.url_q || photo.url_t) + '?ts=' + (+new Date()));
			item.querySelector('.thumb5').setAttribute('alt', photo.title);
			item.querySelector('.thumb5').setAttribute('title', photo.title);

			item.querySelector('.thumb6').setAttribute('src', (photo.url_q || photo.url_t) + '?ts=' + (+new Date()));
			item.querySelector('.thumb6').setAttribute('alt', photo.title);
			item.querySelector('.thumb6').setAttribute('title', photo.title);

			item.querySelector('.thumb7').setAttribute('src', (photo.url_q || photo.url_t) + '?ts=' + (+new Date()));
			item.querySelector('.thumb7').setAttribute('alt', photo.title);
			item.querySelector('.thumb7').setAttribute('title', photo.title);

			item.querySelector('.thumb8').setAttribute('src', (photo.url_q || photo.url_t) + '?ts=' + (+new Date()));
			item.querySelector('.thumb8').setAttribute('alt', photo.title);
			item.querySelector('.thumb8').setAttribute('title', photo.title);

			item.querySelector('.thumb9').setAttribute('src', (photo.url_q || photo.url_t) + '?ts=' + (+new Date()));
			item.querySelector('.thumb9').setAttribute('alt', photo.title);
			item.querySelector('.thumb9').setAttribute('title', photo.title);

			item.querySelector('.thumb10').setAttribute('src', (photo.url_q || photo.url_t) + '?ts=' + (+new Date()));
			item.querySelector('.thumb10').setAttribute('alt', photo.title);
			item.querySelector('.thumb10').setAttribute('title', photo.title);

			

			
			item.querySelector('.vis2').setAttribute('href', (photo.url_q || photo.url_t) + '?ts=' + (+new Date()));
			item.querySelector('.title').innerHTML+= photo.title;
			item.querySelector('.htext').innerHTML+= photo.title;

			items.appendChild(item);
		});

		// Append new img to list
		document.querySelector('.gallery-items').appendChild(items);
		
                  (function(global, $){
    $('.gallery-items').imagelistexpander({
        prefix: "gallery-"
    });
})(this, jQuery)
           
             

	};

	
	

	// Form submission
	document.querySelector('.search-form').addEventListener('submit', function(e) {
		e.preventDefault();

		emptyResults();

		document.querySelector('.loader').classList.add('active');
		nextPage = 2;

		flickr.search({
			text: encodeURIComponent(document.getElementById('txtSearchTerm').value)
		}, replaceResults);

        $('#images').css({'border-bottom':'3px solid #4285f4','color':'#4285f4','font-weight':'bold'});
        

	}, true);

	// Image load
	document.querySelector('.gallery-items').addEventListener('load', function(e) {
		var card = e.target.parentNode.parentNode;
		card.classList.remove('flipped');
 

	}, true);

	// Infinite scroll
	window.addEventListener('scroll', function(e) {
		var fromBottom = document.body.offsetHeight - window.innerHeight - window.scrollY;
		if (hasScrollRequest || fromBottom > 700) return;

		hasScrollRequest = true;

		flickr.search({
			text: encodeURIComponent(document.getElementById('txtSearchTerm').value),
			page: ++nextPage
		}, appendResults);


                  (function(global, $){
    $('.gallery-items').imagelistexpander({
        prefix: "gallery-"
    });
})(this, jQuery)
	

	}, true);

	
  

})();

