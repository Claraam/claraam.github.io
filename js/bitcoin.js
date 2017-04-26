$(document).ready(function() {
	$.ajax({
		url : "https://api.blockchain.info/stats?cors=true",
		dataType : "json",
		//contentType : "application/json; charset=utf-8",
		type : "GET",
		timeout:	"5000",
		async : false,

		success : function(data) {
			$('#bitcoin_block_total').append(data.n_blocks_total);
		},

		error : function(xhr, status, err) {
			$('#bitcoin_block_total').append(err+" N/A");
		}
	});

});

$(document).ready(function() {
	$.ajax({
		url : "https://api.blockchain.info/stats?cors=true",
		dataType : "json",
		//contentType : "application/json; charset=utf-8",
		type : "GET",
		timeout:	"5000",
		async : false,

		success : function(data) {
			 $('#bitcoin_market_price').append(data.market_price_usd);
		},

		error : function(xhr, status, err) {
			$('#bitcoin_market_price').append(err+" N/A");
		}
	});
});

$(document).ready(function() {
	$.ajax({
		url : "https://api.blockchain.info/stats?cors=true",
		dataType : "json",
		//contentType : "application/json; charset=utf-8",
		type : "GET",
		timeout:	"5000",
		async : false,

		success : function(data) {
			$('#bitcoin_hash_rate').append(data.hash_rate);
		},

		error : function(xhr, status, err) {
			$('#bitcoin_hash_rate').append(err+" N/A");
		}
	});
});

$(document).ready(function() {
	$.ajax({
		url : "https://api.blockchain.info/stats?cors=true",
		dataType : "json",
		//contentType : "application/json; charset=utf-8",
		type : "GET",
		timeout:	"5000",
		async : false,

		success : function(data) {
			$('#bitcoin_difficulty').append(data.difficulty);
		},

		error : function(xhr, status, err) {
			$('#bitcoin_difficulty').append(err+" N/A");
		}
	});
});



