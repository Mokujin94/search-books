class GoogleService {
  _body = "https://www.googleapis.com/books/v1/volumes?";
  _apiKey = "AIzaSyBM1WBljP6HFNdM592J8n7j_t6t5EXJ9q0";

  getResourse = async (url) => {
    let res = await fetch(url);
    console.log(res)
    if (!res.ok) {
      throw new Error(`status: ${res.status}, fetch: ${url}`);
    }

    return await res.json();
  };

  getSearchBooks = async (text, start, total) => {
    const res = await this.getResourse(
      `${this._body}q=${text}&startIndex=${start}&maxResults=${total}&key=${this._apiKey}`
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
      image: book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : 'https://i.pinimg.com/736x/f4/c5/5a/f4c55aefd0dc9cf187665bde08cd5586.jpg',
    };
  };
}

export default GoogleService;
