var movies = [];
// movies[0] = {
// 	name: 'Good Will Hunting',
// 	category: 'Drama',
// 	price: '$6.99',
// 	picture: 'http://cdn.miramax.com/media/assets/726_GoodWillHunting_Catalog_Poster-BB_v2_Approved.png',
// 	sellingPoints: ,
// };
var movie = function(name, catArr, price, img, spArr, synopsis){
	this.name = name;
	this.catArr = catArr;
	this.price = price;
	this.img = img;
	this.spArr = spArr;
	this.synopsis = synopsis;
};

//jquery func to append to the webpage
var filterByGenre = function(genre){
	$('#movieSection').replaceWith('<div id="movieSection"></div>');
	$('#store').append('<div id="movieSection"></div>')
	movies.forEach(function(item, i, arr){
		$('#movieSection').append('<div id=movie' + i + ' class="col-md-3"></div');
		$('#movie' + i).append("<div class='name'>" + item.Title + "</div>");
		$('#movie' + i).append('<div class="category">' + item.Genre + '</div>');
		$('#movie' + i).append("<div class='movie_img'><img src=" + item.Poster + "></div>")
		//$('#movie' + i).append('<div class="awards">' + item.Awards('<br>') + '</div>');
		$('#movie' + i).append("<div class='year'>" + item.Year + "</div>");
		$('#movie' + i).append("<div class='actors'>" + item.Actors + "</div>");
		$('#movie' + i).append("<div id='plot' class='hidden'>" + item.Plot + "</div>");
	});
}



$('#allproducts').click(function(){
	filterByGenre();
	$(this).addClass('active').siblings().removeClass('active');
});

$('#drama').click(function(){
	filterByGenre('Drama');
	$(this).addClass('active').siblings().removeClass('active');
});

$('#comedy').click(function(){
	filterByGenre('Comedy');
	$(this).addClass('active').siblings().removeClass('active');
});

$('#scifi').click(function(){
	filterByGenre('Scifi');
	$(this).addClass('active').siblings().removeClass('active');
});

$('#action').click(function(){
	filterByGenre('Action');
	$(this).addClass('active').siblings().removeClass('active');
});

$('#biography').click(function(){
	filterByGenre('Biography');
	$(this).addClass('active').siblings().removeClass('active');
});

$('.movie_img').hover(function(){
	$(this).parent().children().removeClass('hidden');
}, function(){
	$(this).parent().find('#plot').addClass('hidden');
})

var response = $.ajax({
	url: "http://www.omdbapi.com/?",
	context: document.body
}).done(function() {
	$( this ).addClass( "done" );
});

movieList.forEach(function(string){
	var title = string.split(" ").join("+");
	var url = "http://www.omdbapi.com/?t=" + title + "&y=&plot=short&r=json";
	$.get(url, function(data) {
		movies.push(data);   
	});
})

setTimeout(function(){
	filterByGenre()
},1000);






