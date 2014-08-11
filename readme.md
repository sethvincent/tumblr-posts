# tumblr-posts
Get the latest posts for your tumblr blog to embed them on another site.

## Examples

Here's an example of how you might use tumblr-latest with browserify and brfs:

```js
var TumblrPosts = require('tumblr-posts');
var Handlebars = require('handlebars');
var fs = require('fs');

var latest = new TumblrLatest({
  blog: 'seattleio.tumblr.com',
  key: 'YOUR API KEY',
  template: Handlebars.compile(fs.readFileSync('./post.html', 'utf8'))
});

var container = document.createElement('div');
container.id = 'latest-tumblr-posts';
document.body.appendChild(container);

latest.appendTo('latest-tumblr-posts', function (err, posts) {
  console.log(err, posts);
});
```

And an example of using the getPosts method if you just want to work with the raw json results of posts:

```js
var TumblrPosts = require('tumblr-posts');

var latest = new TumblrLatest({
  blog: 'seattleio.tumblr.com',
  key: 'YOUR API KEY',
});

latest.getPosts(function (err, posts) {
  console.log(err, posts);
});
```

## License
MIT
