import APIKey from "../context/Context";
//Ajout async pour signifier que fonction asynchrone
export async function GetAllTeams() {
  try {
    //Création d'un header
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: APIKey,
      },
    };

    // Ajout await pour attendre la réponse
    const response = await fetch(
      "https://api.balldontlie.io/v1/teams",
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
