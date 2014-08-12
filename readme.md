# tumblr-posts
Easily retrieve and embed the latest posts from your tumblr blog.

## Examples

Here's an example of how you might use tumblr-latest with browserify and brfs:

```js
var TumblrPosts = require('tumblr-posts');
var Handlebars = require('handlebars');
var fs = require('fs');

var latest = new TumblrPosts({
  blog: 'YOUR-BLOG.tumblr.com',
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
The example template used with the above code is in [example/post.html](https://github.com/sethvincent/tumblr-posts/blob/master/example/post.html).

And an example of using the getPosts method if you just want to work with the raw json results of posts:

```js
var TumblrPosts = require('tumblr-posts');

var latest = new TumblrPosts({
  blog: 'YOUR-BLOG.tumblr.com',
  key: 'YOUR API KEY',
});

latest.getPosts(function (err, posts) {
  console.log(err, posts);
});
```

## License
MIT
