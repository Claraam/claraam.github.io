$(document).ready(function() {
	$.ajax({
		url : "http://bitcoin.mubiz.com/info",
		dataType : "json",
		contentType : "application/json; charset=utf-8",
		type : "GET",
		timeout:	"5000",
		async : false,

		success : function(data) {
			$('#bitcoin_block_number').append(data.blocks);
		},

		error : function(xhr, status, err) {
			$('#bitcoin_block_number').append(err+" N/A");
		}
	});

});

$(document).ready(function() {
	$.ajax({
		url : "http://bitcoin.mubiz.com/blockchaininfo",
		dataType : "json",
		contentType : "application/json; charset=utf-8",
		type : "GET",
		timeout:	"5000",
		async : false,

		success : function(data) {
			$('#bitcoin_blockchain_number').append(data.blocks);
		},
		
		success : function(data) {
			$('#bitcoin_blockchain_chain').append(data.chain);
		},

		error : function(xhr, status, err) {
			$('#bitcoin_blockchain_number').append(err+" N/A");
		}
	});
});

