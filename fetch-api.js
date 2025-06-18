const BASE_URL = "https://6842fa37e1347494c31eae17.mockapi.io/api/author";

async function getAuthors() {
  try {
    const response = await fetch(BASE_URL, {
      method: "GET",
    });

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

async function createAuthor(author) {
  try {
    await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-type": "Application/json",
      },
      body: JSON.stringify(author),
    });
    console.log("Author creado");
  } catch (error) {
    console.log(error);
  }
}

async function deleteAuthor(id) {
  try {
    await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
    });
    console.log("Author deletado");
  } catch (error) {
    console.log(error);
  }
}

// createAuthor({
//   name: "Angelo Lustosa",
//   email: "angelo@example.com",
//   cpf: "000.000.000-02",
//   phone: "(11) 1233-1233",
// });

// deleteAuthor(14);

// Desafio de casa:
// Implementar o metodo de atulizar os dados de um author
