const chai = require("chai");
const assert = chai.assert;

const server = require("../server");

const chaiHttp = require("chai-http");
chai.use(chaiHttp);

suite("Functional Tests", function () {
  suite("Integration tests with chai-http", function () {
    /** Ready to have a try ?
	* Replace assert.fail(). Make the test pass. **/
 
// If no name is passed, the endpoint responds with 'hello Guest'.
test('Test GET /hello with no name',  function(done){ // Don't forget the callback...
   chai.request(server)             // 'server' is the Express App
    .get('/hello')                  // http_method(url). NO NAME in the query !
    .end(function(err, res){        // res is the response object
    
      // Test the status and the text response (see the example above). 
      // Please follow the order -status, -text. We rely on that in our tests.
      // It should respond 'Hello Guest'
      assert.equal(res.status, 200);
      assert.equal(res.text, 'hello Guest');
      done();   // Always call the 'done()' callback when finished.
    });
});
    // #2
    test("Test GET /hello with your name", function (done) {
      chai
        .request(server)
        .get("/hello?name=xy_z")
        .end(function (err, res) {
      // Your tests here.
      // Replace assert.fail(). Make the test pass.
      // Test the status and the text response. Follow the test order like above.
      assert.equal(res.status, 200);
       assert.equal(res.text, 'hello xy_z'/** <==  Put your name here **/);
      done();   // Always call the 'done()' callback when finished.
        });
    });
    // #3
    test('send {surname: "Colombo"}', function (done) {
      chai
        .request(server)
        .put("/travellers")

        .end(function (err, res) {
          assert.fail();

          done();
        });
    });
    // #4
    test('send {surname: "da Verrazzano"}', function (done) {
      assert.fail();

      done();
    });
  });
});

const Browser = require("zombie");

suite("Functional Tests with Zombie.js", function () {

  suite('"Famous Italian Explorers" form', function () {
    // #5
    test('submit "surname" : "Colombo" - write your e2e test...', function (done) {
      browser.fill("surname", "Colombo").pressButton("submit", function () {
        assert.fail();

        done();
      });
    });
    // #6
    test('submit "surname" : "Vespucci" - write your e2e test...', function (done) {
      assert.fail();

      done();
    });
  });
});
