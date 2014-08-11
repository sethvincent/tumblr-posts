var qs = require('querystring');
var request = require('request');
var Handlebars = require('handlebars');
var domify = require('domify');

module.exports = TumblrLatest;

function TumblrLatest (opts, cb) {
  if (!(this instanceof TumblrLatest)) return new TumblrLatest(opts);

  this.template = opts.template;
  this.url = 'http://api.tumblr.com/v2/blog/' + opts.blog + '/posts/?';
  this.params = opts.params || {};
  this.params.api_key = opts.key;

  if (opts.el) this.appendTo(opts.el, cb);
}

TumblrLatest.prototype.getPosts = function (cb) {
  var self = this;
  this._request(function (err, res) {
    if (err) return cb(err);
    return cb(err, res);
  });
};

TumblrLatest.prototype.appendTo = function (el, cb) {
  var self = this;
  this.getPosts(function (err, posts) {
    self.html = domify(self.template({ posts: res.posts }));
    var container = document.getElementById(el);
    container.appendChild(self.html);
    if (cb) return (err, posts);
  });
};

TumblrLatest.prototype._request = function (cb) {
  var url = this.url + qs.stringify(this.params);
  var opts = { url: url, json: true };

  if (typeof cb === 'undefined') return request(opts);
  else request(opts, getResponse);

  function getResponse (error, response, body){
    if (cb) {
      if (error) return cb(error);
      if (response.statusCode >= 400) return cb({ error: response.statusCode });
      return cb(null, body);
    }
  }
};
