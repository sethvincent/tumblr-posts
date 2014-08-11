var TumblrLatest = require('../index');
var Handlebars = require('handlebars');
var fs = require('fs');

var latest = new TumblrLatest({
  blog: 'seattleio.tumblr.com',
  key: 'GucczLgzlxYpKSfLcg79KqzbyYQA3QtubHJ9jYqh89r6IptwIt',
  template: Handlebars.compile(fs.readFileSync(__dirname + '/post.html', 'utf8'))
});

var container = document.createElement('div');
container.id = 'latest-tumblr-posts';
document.body.appendChild(container);

latest.appendTo('latest-tumblr-posts', function (err, posts) {
  console.log(err, posts);
});
