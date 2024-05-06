const players = new Map([
  [
    2931,
    {
      name: "Michael Jordan",
      image:
        "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2023/01/19/16741112030020.jpg",
      png: "https://i.pinimg.com/originals/75/53/b3/7553b3a57a75746dddb9ba5bed53762a.png",
      text: "Michael Jordan, souvent surnommé MJ ou simplement Air Jordan, est largement considéré comme l'un des plus grands joueurs de basketball de tous les temps. Son ascension vers la gloire a commencé à l'université de Caroline du Nord, où il a mené les Tar Heels à un championnat national en 1982, avant de rejoindre la NBA en 1984. Il a été sélectionné en tant que troisième choix au repêchage par les Chicago Bulls. Dès sa première saison, il a été élu recrue de l'année, lançant ainsi une carrière légendaire. Jordan a dominé la NBA pendant plus d'une décennie avec ses compétences athlétiques, sa détermination féroce et son éthique de travail inégalée. Il a remporté six championnats NBA avec les Bulls au cours des années 1990, remportant le titre de MVP des finales à chaque fois. Son palmarès comprend également cinq titres de MVP de la saison régulière, 14 sélections au All-Star Game et 10 titres de meilleur marqueur de la ligue. En dehors du basketball, Jordan est devenu une icône mondiale, associé à la marque Nike pour créer la célèbre ligne de chaussures Air Jordan, qui est devenue l'une des marques les plus reconnaissables et les plus vendues de l'histoire de la mode sportive. Sa renommée dépasse largement le monde du sport, faisant de lui l'un des athlètes les plus influents de tous les temps. Après sa retraite du basketball en 2003, Jordan est resté impliqué dans le sport en tant que propriétaire majoritaire des Charlotte Hornets, une équipe de la NBA. Son héritage sur le terrain et en dehors en fait une figure emblématique dont l'influence perdure bien au-delà de sa carrière de joueur. Michael Jordan demeure une inspiration pour les athlètes du monde entier, symbolisant la persévérance, le talent et l'excellence.",
    },
  ],
  [
    237,
    {
      name: "LeBron James",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/LeBron_James_vs_Washington_3-30-11.jpg/800px-LeBron_James_vs_Washington_3-30-11.jpg",
      png: "https://i.pinimg.com/originals/a6/b5/b9/a6b5b9de8a56609646f6a805e8b173d0.png",
      text: "Bonjour je suis Lebron",
    },
  ],
  [
    2247,
    {
      name: "Kareem Abdul-Jabbar ",
      image:
        "https://hips.hearstapps.com/hmg-prod/images/kareem-abdul-jabbar-of-the-los-angeles-lakers-shoots-a-free-news-photo-1643724792.jpg?resize=980:*",
      png: "https://cdn.nba.com/silos/nba/latest/440x700/76003.png",
      text: "Karim",
    },
  ],
  [
    2994,
    {
      name: "Magic Johnson ",
      image:
        "https://cdn.britannica.com/27/189527-050-5BAD12C2/Magic-Johnson.jpg",
      png: "https://officialpsds.com/imageview/r4/x0/r4x06y_large.png?1521316505",
      text: "",
    },
  ],
  [
    2851,
    {
      name: "Larry Bird",
      image:
        "https://www.usatoday.com/gcdn/-mm-/adc7a8739eced7c2e4b77248ac1e5c1b813137dc/c=0-31-1236-1679/local/-/media/2016/12/07/USATODAY/USATODAY/636167218520509437-AP-C01-BIRDPLAY-07-1116641.JPG",
      png: "https://toppng.com/uploads/preview/larry-bird-no-background-11549935914an0z3ttnch.png",
      text: "",
    },
  ],
  [
    735,
    {
      name: "Shaquille O’Neal",
      image:
        "https://lalweb.blob.core.windows.net/public/lakers/product-marketing/web/history/shaq/shaq_vertical.jpg",
      png: "https://igrmon.com/wp-content/uploads/2020/04/shaquille.png",
      text: "",
    },
  ],
  [
    1089,
    {
      name: "Tim Duncan",
      image: "",
      png: "",
      text: "",
    },
  ],
  [
    46396110,
    {
      name: "Bill Russell ",
      image: "",
      png: "",
      text: "",
    },
  ],
  [
    46398155,
    {
      name: "Wilt Chamberlain ",
      image: "",
      png: "",
      text: "",
    },
  ],
  [
    115,
    {
      name: "Stephen Curry",
      image: "",
      png: "",
      text: "",
    },
  ],
  [
    46398670,
    {
      name: "Oscar Robertson",
      image: "",
      png: "",
      text: "",
    },
  ],
  [
    2981,
    {
      name: "David Robinson",
      image: "",
      png: "",
      text: "",
    },
  ],
  [
    540,
    {
      name: "Hakeem Olajuwon ",
      image: "",
      png: "",
      text: "",
    },
  ],
  [
    1043,
    {
      name: "Kobe Bryant",
      image: "",
      png: "https://purepng.com/public/uploads/large/nba-player-2ry.png",
      text: "",
    },
  ],
  [
    140,
    {
      name: "Kevin Durant",
      image: "",
      png: "",
      text: "",
    },
  ],
  [
    971,
    {
      name: "Kevin Garnett",
      image: "",
      png: "",
      text: "",
    },
  ],
  [
    346,
    {
      name: "Dirk Nowitzki",
      image: "",
      png: "",
      text: "",
    },
  ],
  [
    46398662,
    {
      name: "Jerry West ",
      image: "",
      png: "",
      text: "",
    },
  ],
  [
    2937,
    {
      name: "Charles Barkley",
      image: "",
      png: "",
      text: "",
    },
  ],
  [
    583,
    {
      name: "Karl Malone ",
      image: "",
      png: "",
      text: "",
    },
  ],
  [
    15,
    {
      name: "Giannis Antetokoumpo",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/7/7a/LeBron_James_%2851959977144%29_%28cropped2%29.jpg",
      png: "https://i.pinimg.com/originals/a6/b5/b9/a6b5b9de8a56609646f6a805e8b173d0.png",
      text: "Bonjour je suis Marcel",
    },
  ],
]);

export default players;
