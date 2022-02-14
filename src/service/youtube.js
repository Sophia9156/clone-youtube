class Youtube {
  constructor(key) {
    this.key = key;
    this.getRequestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
  }

  mostPopular() {    
    return fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=26&regionCode=KR&key=${this.key}`, 
      this.getRequestOptions
      )
      .then(response => response.json())
      .then(result => result.items);
  }

  search(query) {
    return fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=26&q=${query}&regionCode=KR&type=video&key=${this.key}`, 
      this.getRequestOptions
      )
      .then(response => response.json())
      .then(result => result.items.map(item => ({...item, id:item.id.videoId})));
  }
}

export default Youtube;