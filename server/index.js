/*jshint strict:true node:true es5:true onevar:true laxcomma:true laxbreak:true eqeqeq:true immed:true latedef:true*/
(function () {
  "use strict";

  var connect = require('connect')
    , server
    ;

  server = connect.createServer()
    .use(connect.query())
    .use('/scan', function (request, response) {
        // right now assuming fb://profile/OBJECT_ID
        var uri = encodeURI(request.query.fb)
          , id = uri.split('/').pop()
          ;

        response.write('<html>'
          + '<head><meta http-equiv="refresh" content="0;URL=fb://' + uri + '"></meta></head>'
          + '<body>Redirecting to <a href="http://fb.com/"' + uri + '>Facebook</a> so you can \'Like\'...'
          + '<script>setTimeout(function () { location.href="http://fb.com/' + id + '"}, 1300);</script>'
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
