export async function GetPlayerById(id) {
  try {
    //Création d'un header
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "",
      },
    };

    // Ajout await pour attendre la réponse
    const response = await fetch(
      `https://api.balldontlie.io/v1/players/${id}`,
      options
    );
    const result = await response.json();

    //Pour récupérer seulement l'array d'objets

    const data = result.data;

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
