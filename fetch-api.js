async function getAuthors() {
  try {
    const response = await fetch(
      "https://6842fa37e1347494c31eae17.mockapi.io/api/author",
      {
        method: "GET",
      }
    );

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

async function createAuthor() {
  try {
    await fetch("https://6842fa37e1347494c31eae17.mockapi.io/api/author", {
      method: "POST",
      headers: {
        "Content-type": "Application/json",
      },
      body: JSON.stringify({
        name: "Tiririca2",
        email: "tiririca2@example.com",
        cpf: "123.456.789-01",
        phone: "(11) 99999-1234",
      }),
    });
    console.log("Author creado");
  } catch (error) {
    console.log(error);
  }
}

// createAuthor();

// getAuthors();
