
var url247 = [
'http://www.247blinds.co.uk/ecowood-pure-white-venetian-blind', 
'http://www.247blinds.co.uk/origin-bright-white-venetian-blind',
'http://www.247blinds.co.uk/origin-basic-white-venetian-blind',
'http://www.247blinds.co.uk/mayfair-white-roman-blind',
'http://www.247blinds.co.uk/rimini-white-roller-blind',
'http://www.247blinds.co.uk/marill-ivory-roller-blind'
];



module.exports = {
    'My Test': function(test) {
    	url247.forEach(function (url) {
    	  test.open(url)
    	    .type('.field-label-width', '120')
    		.type('.field-label-drop', '120')
    		.click('.btn-get-price')
    		.wait(1000)
    		.assert.text('.product-title h1', 'a')
    		.assert.text('.price-pay', '1')
    	});
    	test.done();
  	}//,
  	 //'Another Test': function(test) {
     //	url247.forEach(function (url) {
     //	  test.open(url)
     //	    .type('.field-label-width', '120')
     //		.type('.field-label-drop', '120')
     //		.click('.btn-get-price')
     //		.wait(1000)
     //		.assert.text('.product-title h1', 'a')
     //		.assert.text('.price-pay', '1')
     //	});
     //	test.done();
  	 //}




}

