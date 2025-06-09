document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("bookForm");
  const table = document.getElementById("bookTable");

  function getBooks() {
    return JSON.parse(localStorage.getItem("books")) || [];
  }

  function saveBooks(books) {
    localStorage.setItem("books", JSON.stringify(books));
  }

  function renderTable() {
    const books = getBooks();
    table.innerHTML = "";
    books.forEach(book => {
      const row = `<tr>
        <td>${book.judul}</td>
        <td>${book.penulis}</td>
        <td>${book.penerbit}</td>
        <td>${book.tahun}</td>
        <td>${book.isbn}</td>
        <td>${book.stok}</td>
        <td>${book.kategori}</td>
      </tr>`;
      table.innerHTML += row;
    });
  }

  form.addEventListener("submit", e => {
    e.preventDefault();

    const book = {
      judul: document.getElementById("judul").value,
      penulis: document.getElementById("penulis").value,
      penerbit: document.getElementById("penerbit").value,
      tahun: document.getElementById("tahun").value,
      isbn: document.getElementById("isbn").value,
      stok: document.getElementById("stok").value,
      kategori: document.getElementById("kategori").value,
    };

    const books = getBooks();
    books.push(book);
    saveBooks(books);
    renderTable();
    form.reset();
  });

  renderTable(); // tampilkan data saat halaman dimuat
});
