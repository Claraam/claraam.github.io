$(document).ready(function() {
	$.ajax({
		url : "https://blockchain.info/fr/block-index/"   //+blockid+"?format=json&cors=true",
		dataType : "json",
		//contentType : "application/json; charset=utf-8",
		type : "GET",
		timeout:	"5000",
		async : false,

		success : function(data) {
			$('#bitcoin_hash').append(data.hash);
		},

		error : function(xhr, status, err) {
			$('#bitcoin_hash').append(err+" N/A");
		}
	});

});
