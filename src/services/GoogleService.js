class GoogleService {
  _body = "https://www.googleapis.com/books/v1/volumes?";
  _apiKey = "AIzaSyAovvO72JN7pb7P2HPla7HJa9LyPtf_LBs";

  getResourse = async (url) => {
    let res = await fetch(url);

    if (!res.ok) {
      throw new Error(`status: ${res.status}, fetch: ${url}`);
    }

    return await res.json();
  };

  getSearchBooks = async (text) => {
    const res = await this.getResourse(
      `${this._body}q=${text}&key=${this._apiKey}`
    );

    return res.items.map(this._transformBooks);
  };

  _transformBooks = (book) => {
    return {
      title: book.volumeInfo.title,
      descr: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail,
    };
  };
}

export default GoogleService;
