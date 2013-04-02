/*jshint strict:true node:true es5:true onevar:true laxcomma:true laxbreak:true eqeqeq:true immed:true latedef:true*/
(function () {
  "use strict";

  var connect = require('connect')
    , server
    ;

  server = connect.createServer()
    .use(connect.query())
    .use('/scan', function (request, response) {
        var uri = encodeURI(request.query.fb)
          ;

        response.write('<html>'
          + '<head><meta http-equiv="refresh" content="0;URL=fb://' + uri + '"></meta></head>'
          + '<body>Go to <a href="http://fb.com/CoolAJtheDJ">Facebook</a> and click \'Like\'.'
          + '<br>' + uri
          + '</body>'
          + '</html>');
        response.end();
      })
    .use(function (request, response) {
        response.setHeader('Content-Type', 'text/plain');
        response.write('Want your own YOU@the.dj email and http://YOU.the.dj domain?'
          + '\nCall +1 (317) 426-6525 to speak to AJ ONeal.');
        response.end();
      })
    ;

  module.exports = server;
}());
