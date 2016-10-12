var $ = require('jquery');

function Post(){

}

Post.fetch = function(){
  var url = 'http://tiny-lasagna-server.herokuapp.com/collections/posts';
  var promise = $.ajax(url);

  promise.then(function(posts){
    $(document).trigger('posts:fetched', [posts]);
  });

  return promise;
};

module.exports = {
  Post: Post
};
