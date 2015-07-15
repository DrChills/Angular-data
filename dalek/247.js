
//var url247 = [
//'http://www.247blinds.co.uk/ecowood-pure-white-venetian-blind', 
//'http://www.247blinds.co.uk/origin-bright-white-venetian-blind',
//'http://www.247blinds.co.uk/origin-basic-white-venetian-blind',
//'http://www.247blinds.co.uk/mayfair-white-roman-blind',
//'http://www.247blinds.co.uk/rimini-white-roller-blind',
//'http://www.247blinds.co.uk/marill-ivory-roller-blind'
//];



module.exports = {
    //'My Test': function(test) {
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
  	//}//,
  	'ecowood-pure-white': function(test) {
        test.open('http://www.247blinds.co.uk/ecowood-pure-white-venetian-blind')
    	    .type('.field-label-width', '120')
    		.type('.field-label-drop', '120')
    		.click('.btn-get-price')
    		.wait(1000)
    		.assert.text('.product-title h1', 'a')
    		.assert.text('.price-pay', '1')
    	test.done();
  	},
    'origin-bright': function(test) {
        test.open('http://www.247blinds.co.uk/origin-bright-white-venetian-blind')
            .type('.field-label-width', '120')
            .type('.field-label-drop', '120')
            .click('.btn-get-price')
            .wait(1000)
            .assert.text('.product-title h1', 'a')
            .assert.text('.price-pay', '1')
        test.done();
    },
    'origin-basic': function(test) {
        test.open('http://www.247blinds.co.uk/origin-basic-white-venetian-blind')
            .type('.field-label-width', '120')
            .type('.field-label-drop', '120')
            .click('.btn-get-price')
            .wait(1000)
            .assert.text('.product-title h1', 'a')
            .assert.text('.price-pay', '1')
        test.done();
    },
    'mayfair-white': function(test) {
        test.open('http://www.247blinds.co.uk/mayfair-white-roman-blind')
            .type('.field-label-width', '120')
            .type('.field-label-drop', '120')
            .click('.btn-get-price')
            .wait(1000)
            .assert.text('.product-title h1', 'a')
            .assert.text('.price-pay', '1')
        test.done();
    },
    'rimini-white': function(test) {
        test.open('http://www.247blinds.co.uk/rimini-white-roller-blind')
            .type('.field-label-width', '120')
            .type('.field-label-drop', '120')
            .click('.btn-get-price')
            .wait(1000)
            .assert.text('.product-title h1', 'a')
            .assert.text('.price-pay', '1')
        test.done();
    },
    'marill-ivory': function(test) {
        test.open('http://www.247blinds.co.uk/marill-ivory-roller-blind')
            .type('.field-label-width', '120')
            .type('.field-label-drop', '120')
            .click('.btn-get-price')
            .wait(1000)
            .assert.text('.product-title h1', 'a')
            .assert.text('.price-pay', '1')
        test.done();
    }
}

