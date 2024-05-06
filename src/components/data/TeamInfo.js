const teamInfo = new Map([
  [
    1,
    {
      description:
        "Les Atlanta Hawks ont une histoire riche dans la NBA depuis leur fondation en 1946. L'équipe a connu des périodes de succès et de compétitivité tout au long de son histoire, remportant un championnat NBA en 1958. Les Hawks sont connus pour leur jeu rapide et excitant, ainsi que pour leur engagement envers la communauté d'Atlanta. Au fil des ans, ils ont vu des joueurs légendaires tels que Dominique Wilkins et Dikembe Mutombo porter fièrement leur maillot. Les Hawks continuent de représenter la ville d'Atlanta avec fierté sur la scène de la NBA.",
      color: "#E03A3E",
    },
  ],
  [
    2,
    {
      description:
        "Les Boston Celtics sont l'une des franchises les plus emblématiques et les plus réussies de la NBA, fondée en 1946. L'équipe a remporté un record de 17 championnats NBA, dont plusieurs dans les années 1960 sous la direction de l'entraîneur légendaire Red Auerbach. Les Celtics sont connus pour leur culture de la victoire, leur travail d'équipe et leur engagement envers l'excellence. Au fil des ans, ils ont vu des joueurs légendaires tels que Bill Russell, Larry Bird et Paul Pierce porter fièrement leur maillot vert et blanc. Les Celtics continuent de dominer la scène de la NBA et de représenter avec fierté la ville de Boston.",
      color: "#008348",
    },
  ],
  [
    3,
    {
      description:
        "Les Brooklyn Nets ont une histoire relativement courte dans la NBA, l'équipe ayant déménagé de New Jersey à Brooklyn en 2012. Malgré leur histoire récente, les Nets sont devenus une force montante dans la ligue. Avec l'acquisition de joueurs étoiles tels que Kevin Durant, Kyrie Irving et James Harden, les Nets sont devenus des prétendants au titre de la NBA. L'équipe est connue pour son jeu offensif excitant et son engagement envers l'excellence. Les Nets cherchent désormais à remporter leur premier championnat NBA et à écrire une nouvelle page dans leur histoire.",
      color: "#000000",
    },
  ],
  [
    4,
    {
      description:
        "Les Charlotte Hornets ont été fondés en 1988 et ont été une partie intégrante de la NBA depuis lors. Bien que l'équipe n'ait pas encore remporté de championnat NBA, elle a eu des moments de succès et de compétitivité au fil des ans. Les Hornets sont connus pour leurs couleurs vives et leur style de jeu excitant. L'équipe a vu des joueurs talentueux comme Larry Johnson, Alonzo Mourning et Kemba Walker porter fièrement leur maillot. Les Hornets continuent de représenter la ville de Charlotte avec fierté sur la scène de la NBA.",
      color: "#00788C",
    },
  ],
  [
    5,
    {
      description:
        "Les Chicago Bulls sont l'une des franchises les plus emblématiques de la NBA, fondée en 1966. L'équipe a connu une période de domination dans les années 1990, remportant six championnats NBA sous la direction de Michael Jordan. Les Bulls sont connus pour leur culture de la victoire, leur intensité et leur engagement envers l'excellence. Au fil des ans, ils ont vu des joueurs légendaires tels que Scottie Pippen, Dennis Rodman et Derrick Rose porter fièrement leur maillot. Les Bulls continuent de représenter avec fierté la ville de Chicago sur la scène de la NBA.",
      color: "#CE1141",
    },
  ],
  [
    6,
    {
      description:
        "Les Cleveland Cavaliers ont été fondés en 1970 et ont connu des périodes de succès et de lutte dans la NBA. L'équipe a remporté son premier championnat NBA en 2016, mené par LeBron James. Les Cavaliers sont connus pour leur base de fans passionnée et dévouée, ainsi que pour leur engagement envers la communauté de Cleveland. L'équipe continue de viser l'excellence et de représenter fièrement la ville sur la scène de la NBA.",
      color: "#6F263D",
    },
  ],
  [
    7,
    {
      description:
        "Les Dallas Mavericks ont une histoire relativement courte dans la NBA, l'équipe ayant été fondée en 1980. Malgré leur histoire récente, les Mavericks ont connu des succès significatifs dans la ligue. L'équipe a remporté son premier championnat NBA en 2011, menée par Dirk Nowitzki. Les Mavericks sont connus pour leur style de jeu excitant et leur engagement envers l'excellence. Ils continuent de viser le titre de champion et de représenter fièrement la ville de Dallas sur la scène de la NBA.",
      color: "#00538C",
    },
  ],
  [
    8,
    {
      description:
        "Les Denver Nuggets ont une longue histoire dans la NBA depuis leur fondation en 1967. Bien que l'équipe n'ait pas encore remporté de championnat NBA, elle a eu des moments de succès et de compétitivité au fil des ans. Les Nuggets sont connus pour leur style de jeu rapide et excitant, ainsi que pour leur engagement envers la communauté de Denver. Au fil des ans, ils ont vu des joueurs talentueux comme Alex English, Carmelo Anthony et Nikola Jokić porter fièrement leur maillot. Les Nuggets continuent de viser le titre de champion et de représenter fièrement la ville sur la scène de la NBA.",
      color: "#0E2240",
    },
  ],
  [
    9,
    {
      description:
        "Les Detroit Pistons ont une histoire riche dans la NBA depuis leur fondation en 1941. L'équipe a remporté trois championnats NBA, dont deux dans les années 1980 et un en 2004. Les Pistons sont connus pour leur style de jeu physique et leur défense robuste, ainsi que pour leur engagement envers la communauté de Detroit. Au fil des ans, ils ont vu des joueurs légendaires tels que Isiah Thomas, Joe Dumars et Chauncey Billups porter fièrement leur maillot. Les Pistons continuent de représenter avec fierté la ville de Detroit sur la scène de la NBA.",
      color: "#C8102E",
    },
  ],
  [
    10,
    {
      description:
        "Les Golden State Warriors ont une longue histoire dans la NBA depuis leur fondation en 1946. L'équipe a remporté un total impressionnant de six championnats NBA, dont trois au cours des dernières années. Les Warriors sont connus pour leur style de jeu rapide et excitant, ainsi que pour leur engagement envers la communauté de la baie de San Francisco. Au fil des ans, ils ont vu des joueurs légendaires comme Wilt Chamberlain, Rick Barry et Stephen Curry porter fièrement leur maillot. Les Warriors continuent de dominer la scène de la NBA et de représenter fièrement la région de la baie.",
      color: "#006BB6",
    },
  ],
  [
    11,
    {
      description:
        "Les Houston Rockets ont une histoire riche dans la NBA depuis leur fondation en 1967. L'équipe a remporté deux championnats NBA, en 1994 et 1995. Les Rockets sont connus pour leur jeu rapide et leur attaque explosive, ainsi que pour leur engagement envers la communauté de Houston. Au fil des ans, ils ont vu des joueurs légendaires comme Hakeem Olajuwon, Clyde Drexler et James Harden porter fièrement leur maillot. Les Rockets continuent de représenter fièrement la ville de Houston sur la scène de la NBA.",
      color: "#CE1141",
    },
  ],
  [
    12,
    {
      description:
        "Les Indiana Pacers ont une longue histoire dans la NBA depuis leur fondation en 1967. Bien que l'équipe n'ait pas encore remporté de championnat NBA, elle a connu plusieurs périodes de succès et de compétitivité. Les Pacers sont connus pour leur jeu physique et leur défense solide, ainsi que pour leur engagement envers la communauté d'Indianapolis. Au fil des ans, ils ont vu des joueurs talentueux comme Reggie Miller, Jermaine O'Neal et Paul George porter fièrement leur maillot. Les Pacers continuent de viser le titre de champion et de représenter fièrement la ville sur la scène de la NBA.",
      color: "#002D62",
    },
  ],
  [
    13,
    {
      description:
        "Les Los Angeles Clippers ont une histoire mouvementée dans la NBA depuis leur fondation en 1970. L'équipe a longtemps été considérée comme l'outsider de Los Angeles, mais a récemment connu une période de succès avec l'acquisition de joueurs étoiles. Les Clippers sont connus pour leur jeu dynamique et excitant, ainsi que pour leur engagement envers la communauté de Los Angeles. Au fil des ans, ils ont vu des joueurs talentueux comme Blake Griffin, Chris Paul et Kawhi Leonard porter fièrement leur maillot. Les Clippers cherchent désormais à remporter leur premier championnat NBA et à écrire une nouvelle page dans leur histoire.",
      color: "#1D428A",
    },
  ],
  [
    14,
    {
      description:
        "Les Los Angeles Lakers sont l'une des franchises les plus réussies et les plus emblématiques de la NBA, fondée en 1947. L'équipe a remporté un total impressionnant de 17 championnats NBA, dont plusieurs dans les années 2000 sous la direction de Kobe Bryant. Les Lakers sont connus pour leur culture de la victoire, leur glamour et leur engagement envers l'excellence. Au fil des ans, ils ont vu des joueurs légendaires tels que Magic Johnson, Kareem Abdul-Jabbar et Shaquille O'Neal porter fièrement leur maillot pourpre et or. Les Lakers continuent de dominer la scène de la NBA et de représenter avec fierté la ville de Los Angeles.",
      color: "#552583",
    },
  ],
  [
    15,
    {
      description:
        "Les Memphis Grizzlies ont été fondés en 1995 et ont depuis lors établi leur place dans la NBA. Bien que l'équipe n'ait pas encore remporté de championnat NBA, elle a connu des périodes de succès et de compétitivité. Les Grizzlies sont connus pour leur jeu physique et leur défense robuste, ainsi que pour leur engagement envers la communauté de Memphis. Au fil des ans, ils ont vu des joueurs talentueux comme Pau Gasol, Marc Gasol et Mike Conley porter fièrement leur maillot. Les Grizzlies continuent de représenter avec fierté la ville de Memphis sur la scène de la NBA.",
      color: "#5D76A9",
    },
  ],
  [
    16,
    {
      description:
        "Les Miami Heat ont une histoire relativement courte dans la NBA, l'équipe ayant été fondée en 1988. Malgré leur histoire récente, les Heat ont connu un succès significatif dans la ligue. L'équipe a remporté trois championnats NBA, dont deux avec la présence de LeBron James. Les Heat sont connus pour leur jeu rapide et agressif, ainsi que pour leur engagement envers la communauté de Miami. Ils continuent de viser l'excellence et de représenter fièrement la ville sur la scène de la NBA.",
      color: "#98002E",
    },
  ],
  [
    17,
    {
      description:
        "Les Milwaukee Bucks ont une longue histoire dans la NBA depuis leur fondation en 1968. L'équipe a remporté deux championnats NBA, en 1971 et en 2021. Les Bucks sont connus pour leur jeu physique et leur engagement envers la communauté de Milwaukee. Au fil des ans, ils ont vu des joueurs légendaires comme Kareem Abdul-Jabbar, Oscar Robertson et Giannis Antetokounmpo porter fièrement leur maillot. Les Bucks continuent de viser le titre de champion et de représenter avec fierté la ville sur la scène de la NBA.",
      color: "#00471B",
    },
  ],
  [
    18,
    {
      description:
        "Les Minnesota Timberwolves ont été fondés en 1989 et ont depuis lors été une partie de la NBA. Bien que l'équipe n'ait pas encore remporté de championnat NBA, elle a eu des moments de succès et de compétitivité. Les Timberwolves sont connus pour leur jeune noyau talentueux et leur engagement envers la communauté de Minneapolis. Au fil des ans, ils ont vu des joueurs comme Kevin Garnett, Karl-Anthony Towns et Anthony Edwards porter fièrement leur maillot. Les Timberwolves continuent de représenter avec fierté la ville sur la scène de la NBA.",
      color: "#0C2340",
    },
  ],
  [
    19,
    {
      description:
        "Les New Orleans Pelicans ont une histoire relativement courte dans la NBA, l'équipe ayant été fondée en 2002. Malgré leur histoire récente, les Pelicans ont développé un jeune noyau talentueux et prometteur. L'équipe est connue pour son style de jeu rapide et excitant, ainsi que pour son engagement envers la communauté de la Nouvelle-Orléans. Les Pelicans cherchent désormais à établir une tradition de succès durable dans la NBA et à représenter fièrement la ville sur la scène de la ligue.",
      color: "#85714D",
    },
  ],
  [
    20,
    {
      description:
        "Les New York Knicks sont l'une des franchises les plus emblématiques de la NBA, fondée en 1946. Bien que l'équipe n'ait pas remporté de championnat NBA depuis 1973, elle a une base de fans passionnée et dévouée. Les Knicks sont connus pour leur histoire riche, leur style de jeu physique et leur engagement envers la communauté de New York. Au fil des ans, ils ont vu des joueurs légendaires comme Walt Frazier, Patrick Ewing et Carmelo Anthony porter fièrement leur maillot bleu et orange. Les Knicks continuent de représenter avec fierté la ville de New York sur la scène de la NBA.",
      color: "#F58426",
    },
  ],
  [
    21,
    {
      description:
        "Les Oklahoma City Thunder ont une histoire relativement courte dans la NBA, l'équipe ayant été fondée en 2008. Malgré leur histoire récente, les Thunder ont connu un succès significatif dans la ligue. L'équipe a atteint les finales NBA en 2012 et est connue pour son noyau de jeunes talents. Les Thunder sont également reconnus pour leur engagement envers la communauté d'Oklahoma City. Ils cherchent désormais à construire une équipe compétitive pour rivaliser pour un titre de champion NBA.",
      color: "#007AC1",
    },
  ],
  [
    22,
    {
      description:
        "Les Orlando Magic ont été fondés en 1989 et ont depuis lors été une partie de la NBA. Bien que l'équipe n'ait pas encore remporté de championnat NBA, elle a connu des moments de succès et de compétitivité. Les Magic sont connus pour leur jeune noyau talentueux et leur engagement envers la communauté d'Orlando. Au fil des ans, ils ont vu des joueurs comme Shaquille O'Neal, Dwight Howard et Tracy McGrady porter fièrement leur maillot. Les Magic continuent de représenter avec fierté la ville sur la scène de la NBA.",
      color: "#0077C0",
    },
  ],
  [
    23,
    {
      description:
        "Les Philadelphia 76ers sont l'une des franchises les plus historiques de la NBA, fondée en 1946. L'équipe a remporté trois championnats NBA, dont le plus récent en 1983. Les 76ers sont connus pour leur riche histoire, leur jeu rapide et leur engagement envers la communauté de Philadelphie. Au fil des ans, ils ont vu des joueurs légendaires comme Julius Erving, Allen Iverson et Joel Embiid porter fièrement leur maillot bleu et blanc. Les 76ers continuent de représenter avec fierté la ville de Philadelphie sur la scène de la NBA.",
      color: "#006BB6",
    },
  ],
  [
    24,
    {
      description:
        "Les Phoenix Suns ont une histoire riche dans la NBA depuis leur fondation en 1968. Bien que l'équipe n'ait pas encore remporté de championnat NBA, elle a eu des moments de succès et de compétitivité. Les Suns sont connus pour leur style de jeu rapide et leur attaque explosive, ainsi que pour leur engagement envers la communauté de Phoenix. Au fil des ans, ils ont vu des joueurs talentueux comme Charles Barkley, Steve Nash et Devin Booker porter fièrement leur maillot. Les Suns continuent de viser le titre de champion et de représenter avec fierté la ville sur la scène de la NBA.",
      color: "#1D1160",
    },
  ],
  [
    25,
    {
      description:
        "Les Portland Trail Blazers ont une longue histoire dans la NBA depuis leur fondation en 1970. L'équipe a remporté un championnat NBA en 1977. Les Trail Blazers sont connus pour leur base de fans passionnée, leur jeu rapide et leur engagement envers la communauté de Portland. Au fil des ans, ils ont vu des joueurs talentueux comme Bill Walton, Clyde Drexler et Damian Lillard porter fièrement leur maillot. Les Trail Blazers continuent de viser le titre de champion et de représenter avec fierté la ville sur la scène de la NBA.",
      color: "#E03A3E",
    },
  ],
  [
    26,
    {
      description:
        "Les Sacramento Kings ont une longue histoire dans la NBA depuis leur fondation en 1945. Bien que l'équipe n'ait pas encore remporté de championnat NBA, elle a eu des moments de succès et de compétitivité. Les Kings sont connus pour leur jeu rapide et leur style de jeu excitant, ainsi que pour leur engagement envers la communauté de Sacramento. Au fil des ans, ils ont vu des joueurs talentueux comme Oscar Robertson, Chris Webber et DeMarcus Cousins porter fièrement leur maillot. Les Kings continuent de viser le titre de champion et de représenter avec fierté la ville sur la scène de la NBA.",
      color: "#5A2D81",
    },
  ],
  [
    27,
    {
      description:
        "Les San Antonio Spurs sont l'une des franchises les plus réussies de la NBA, fondée en 1967. L'équipe a remporté cinq championnats NBA, dont plusieurs sous la direction de l'entraîneur légendaire Gregg Popovich. Les Spurs sont connus pour leur jeu d'équipe discipliné, leur cohérence et leur engagement envers l'excellence. Au fil des ans, ils ont vu des joueurs légendaires tels que Tim Duncan, David Robinson et Kawhi Leonard porter fièrement leur maillot noir et argent. Les Spurs continuent de représenter avec fierté la ville de San Antonio sur la scène de la NBA.",
      color: "#C4CED4",
    },
  ],
  [
    28,
    {
      description:
        "Les Toronto Raptors ont une histoire relativement courte dans la NBA, l'équipe ayant été fondée en 1995. Malgré leur histoire récente, les Raptors ont connu un succès significatif dans la ligue. L'équipe a remporté son premier championnat NBA en 2019, marquant un moment historique pour le basketball canadien. Les Raptors sont connus pour leur style de jeu rapide et leur engagement envers la communauté de Toronto. Ils continuent de viser l'excellence et de représenter fièrement la ville sur la scène de la NBA.",
      color: "#CE1141",
    },
  ],
  [
    29,
    {
      description:
        "Les Utah Jazz ont une longue histoire dans la NBA depuis leur fondation en 1974. Bien que l'équipe n'ait pas encore remporté de championnat NBA, elle a eu des moments de succès et de compétitivité. Les Jazz sont connus pour leur jeu d'équipe solide, leur attaque efficace et leur engagement envers la communauté de Salt Lake City. Au fil des ans, ils ont vu des joueurs talentueux comme Karl Malone, John Stockton et Donovan Mitchell porter fièrement leur maillot. Les Jazz continuent de viser le titre de champion et de représenter avec fierté la ville sur la scène de la NBA.",
      color: "#002B5C",
    },
  ],
  [
    30,
    {
      description:
        "Les Washington Wizards ont une longue histoire dans la NBA depuis leur fondation en 1961 en tant que Chicago Packers. Bien que l'équipe n'ait pas encore remporté de championnat NBA sous le nom des Wizards, elle a connu des périodes de succès et de compétitivité. Les Wizards sont connus pour leur jeu dynamique et leur engagement envers la communauté de Washington D.C. Au fil des ans, ils ont vu des joueurs talentueux comme Wes Unseld, Gilbert Arenas et Bradley Beal porter fièrement leur maillot. Les Wizards continuent de viser le titre de champion et de représenter avec fierté la capitale nationale sur la scène de la NBA.",
      color: "#002B5C",
    },
  ],
]);

export default teamInfo;
