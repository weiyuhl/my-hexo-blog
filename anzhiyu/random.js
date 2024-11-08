var posts=["2024/11/08/hello-world/","2024/11/08/川渝暴龙/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };