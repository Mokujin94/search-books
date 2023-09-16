class GoogleService {
  _body = "https://www.googleapis.com/books/v1/volumes?";
  _apiKey = "AIzaSyCrH_RKBJ0_Y1jR6ZskkBDVs--yWCOsI9g";

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
      title: book.volumeInfo.title
        ? book.volumeInfo.title.length > 14
          ? book.volumeInfo.title.slice(0, 14) + "..."
          : book.volumeInfo.title
        : null,
      descr: book.volumeInfo.description
        ? book.volumeInfo.description.length > 40
          ? book.volumeInfo.description.slice(0, 40) + "..."
          : book.volumeInfo.description
        : "Нет описания",
      image: book.volumeInfo.imageLinks.thumbnail,
    };
  };
}

export default GoogleService;
