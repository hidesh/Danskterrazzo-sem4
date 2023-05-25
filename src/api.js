window.onload = function() {
  const accessToken = 'bPBYbvlXniLcHXsq';
  const userId = '@danskterrazzo';
  const count = 6; // Number of posts to display

  const container = document.getElementById('instagram-feed');

  fetch(`https://graph.instagram.com/${userId}/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=${accessToken}&limit=${count}`)
    .then(response => response.json())
    .then(data => {
      data.data.forEach(post => {
        const image = document.createElement('img');
        image.src = post.media_url;
        container.appendChild(image);
      });
    })
    .catch(error => console.log('Error fetching Instagram feed:', error));
};
