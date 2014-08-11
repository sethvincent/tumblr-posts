var TumblrLatest = require('../index');

var latest = new TumblrLatest({
  blog: 'seattleio.tumblr.com',
  key: 'YOUR API KEY',
});

latest.getPosts(function (err, posts) {
  console.log(err, posts);
});
