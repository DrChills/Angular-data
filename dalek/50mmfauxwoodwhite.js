
//var url247 = [
//'http://www.247blinds.co.uk/ecowood-pure-white-venetian-blind', 
//'http://www.247blinds.co.uk/origin-bright-white-venetian-blind',
//'http://www.247blinds.co.uk/origin-basic-white-venetian-blind',
//'http://www.247blinds.co.uk/mayfair-white-roman-blind',
//'http://www.247blinds.co.uk/rimini-white-roller-blind',
//'http://www.247blinds.co.uk/marill-ivory-roller-blind'
//];



module.exports = {

	'b2g': function(test) {
      test.open('http://www.blinds-2go.co.uk/wooden-blinds/13836/classics-simply-white.html')
  	    .type('#wid1', '120')
  		.type('#wid2', '120')
  		.click('#bttn-get-a-price')
  		.wait(1000)
  		.assert.text('#producttitle', 'a')
       .wait(1000)
  		.assert.text('.std-price', '1')
  	test.done();
	},
//  'tuiss': function(test) {
//      test.open('http://www.tuiss.co.uk/wooden-blinds/5573/reflections-true-white.htm')
//          .type('#wid1', '120')
//          .type('#wid2', '120')
//          .click('#bttn-get-a-price')
//          .wait(1000)
//          .assert.text('#producttitle', 'a')
//          .wait(1000)
//          .assert.text('#bp-final-price', '1')
//      test.done();
//  },
// 'Direct Blinds': function(test) {
//     test.open('http://www.directblinds.co.uk/wooden-blinds/cotton-50-faux/')
//         .type('#InputWidth', '120')
//         .type('#InputDrop', '120')
//         .click('#btnGetPrice')
//         .wait(1000)
//         .assert.text('.product-header h1', 'a')
//         .wait(1000)
//         .assert.text('#Price', '1')
//     test.done();
// },
//   'Wooden Blinds Direct': function(test) {
//       test.open('http://www.wooden-blinds-direct.co.uk/stores/product/express_plus_white_venetian_blind')
//           .type('#width', '120')
//           .type('#drop', '120')
//           .setValue('#option_8', 'recess')
//           .setValue('#option_5', '50mm')
//           .setValue('#option_13', 'Unstained')
//           .setValue('#option_41', 'None')
//           .setValue('#option_9', 'None')
//           .click('#get_price')
//           .wait(1000)
//           .assert.text('#product_title h1', 'a')
//           .assert.text('#price', '1') //NOT WORKING
//       test.done();
//   },
//  'Web Blinds': function(test) {
//      test.open('http://www.web-blinds.com/concepts-snow-ball/')
//          .type('#width-input', '120')
//          .type('#drop-input', '120')
//          .click('#recess-exact-option-1571')
//          //.click('.next-step')
//          .wait(5000)
//          .assert.text('.product-name h1', 'a')
//          .wait(5000)
//          .assert.text('.total-price .price', '1')
//      test.done(); // AHHHHHHHHHHHHHHHHH FUCKERS
//  },
//     'Crosby Blinds': function(test) {
//         test.open('http://www.crosbyblinds.co.uk/shop/wood/2013#col=52654')
//             .type('.width', '1200')
//             .type('.drop', '1200')
//             .click('.savesizes')
//             .wait(1000)
//             .click('.sideNavItem:last-child')
//             .assert.text('h1.name', 'a')
//             .wait(1000)
//             .assert.text('.final_cost', '1')
//         test.done();
//     },
//    'Concept Blinds': function(test) {
//      test.open('http://www.conceptblindsdirect.co.uk/detail-189-5072.htm')
//          .type('#b_width', '120')
//          .type('#b_height', '120')
//          .click('#Prodladder_1')
//          .wait(100)
//          .click('#hidebothbtn img')
//          .wait(100)
//          .assert.text('.title-01 h2', 'a')
//          .wait(1000)
//          .assert.text('#ajxPriceResponce p:last-child', '1')
//      test.done();
//  },
// 'Wilson Blinds': function(test) {
//         test.open('http://www.wilsonsblinds.co.uk/blinds/5/3972/expressions-snow-wooden-venetian-blind.html')
//             .type('#width', '120')
//             .type('#drop', '120')
//             .click('.productoption:nth-child(2) #radio1')
//             .click('.productoption:first-child #radio2')
//             .click('.submit.liteorg')
//             .wait(1000)
//             .assert.text('.gallery h3', '1')
//             .wait(1000)
//             .assert.text('#return_div p', 'a')
//         test.done();
//     }


}
