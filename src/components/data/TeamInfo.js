const teamInfo = new Map([
  [
    1,
    "Les Atlanta Hawks ont une histoire riche dans la NBA depuis leur fondation en 1946. L'équipe a connu des périodes de succès et de compétitivité tout au long de son histoire, remportant un championnat NBA en 1958. Les Hawks sont connus pour leur jeu rapide et excitant, ainsi que pour leur engagement envers la communauté d'Atlanta. Au fil des ans, ils ont vu des joueurs légendaires tels que Dominique Wilkins et Dikembe Mutombo porter fièrement leur maillot. Les Hawks continuent de représenter la ville d'Atlanta avec fierté sur la scène de la NBA.",
  ],
  [
    2,
    "Les Boston Celtics sont l'une des franchises les plus emblématiques et les plus réussies de la NBA, fondée en 1946. L'équipe a remporté un record de 17 championnats NBA, dont plusieurs dans les années 1960 sous la direction de l'entraîneur légendaire Red Auerbach. Les Celtics sont connus pour leur culture de la victoire, leur travail d'équipe et leur engagement envers l'excellence. Au fil des ans, ils ont vu des joueurs légendaires tels que Bill Russell, Larry Bird et Paul Pierce porter fièrement leur maillot vert et blanc. Les Celtics continuent de dominer la scène de la NBA et de représenter avec fierté la ville de Boston.",
  ],
  [
    3,
    "Les Brooklyn Nets ont une histoire relativement courte dans la NBA, l'équipe ayant déménagé de New Jersey à Brooklyn en 2012. Malgré leur histoire récente, les Nets sont devenus une force montante dans la ligue. Avec l'acquisition de joueurs étoiles tels que Kevin Durant, Kyrie Irving et James Harden, les Nets sont devenus des prétendants au titre de la NBA. L'équipe est connue pour son jeu offensif excitant et son engagement envers l'excellence. Les Nets cherchent désormais à remporter leur premier championnat NBA et à écrire une nouvelle page dans leur histoire.",
  ],
  [
    4,
    "Les Charlotte Hornets ont été fondés en 1988 et ont été une partie intégrante de la NBA depuis lors. Bien que l'équipe n'ait pas encore remporté de championnat NBA, elle a eu des moments de succès et de compétitivité au fil des ans. Les Hornets sont connus pour leurs couleurs vives et leur style de jeu excitant. L'équipe a vu des joueurs talentueux comme Larry Johnson, Alonzo Mourning et Kemba Walker porter fièrement leur maillot. Les Hornets continuent de représenter la ville de Charlotte avec fierté sur la scène de la NBA.",
  ],
  [
    5,
    "Les Chicago Bulls sont l'une des franchises les plus emblématiques de la NBA, fondée en 1966. L'équipe a connu une période de domination dans les années 1990, remportant six championnats NBA sous la direction de Michael Jordan. Les Bulls sont connus pour leur culture de la victoire, leur intensité et leur engagement envers l'excellence. Au fil des ans, ils ont vu des joueurs légendaires tels que Scottie Pippen, Dennis Rodman et Derrick Rose porter fièrement leur maillot. Les Bulls continuent de représenter avec fierté la ville de Chicago sur la scène de la NBA.",
  ],
  [
    6,
    "Les Cleveland Cavaliers ont été fondés en 1970 et ont connu des périodes de succès et de lutte dans la NBA. L'équipe a remporté son premier championnat NBA en 2016, mené par LeBron James. Les Cavaliers sont connus pour leur base de fans passionnée et dévouée, ainsi que pour leur engagement envers la communauté de Cleveland. L'équipe continue de viser l'excellence et de représenter fièrement la ville sur la scène de la NBA.",
  ],
  [
    7,
    "Les Dallas Mavericks ont une histoire relativement courte dans la NBA, l'équipe ayant été fondée en 1980. Malgré leur histoire récente, les Mavericks ont connu des succès significatifs dans la ligue. L'équipe a remporté son premier championnat NBA en 2011, menée par Dirk Nowitzki. Les Mavericks sont connus pour leur style de jeu excitant et leur engagement envers l'excellence. Ils continuent de viser le titre de champion et de représenter fièrement la ville de Dallas sur la scène de la NBA.",
  ],
  [
    8,
    "Les Denver Nuggets ont une longue histoire dans la NBA depuis leur fondation en 1967. Bien que l'équipe n'ait pas encore remporté de championnat NBA, elle a eu des moments de succès et de compétitivité au fil des ans. Les Nuggets sont connus pour leur style de jeu rapide et excitant, ainsi que pour leur engagement envers la communauté de Denver. Au fil des ans, ils ont vu des joueurs talentueux comme Alex English, Carmelo Anthony et Nikola Jokić porter fièrement leur maillot. Les Nuggets continuent de viser le titre de champion et de représenter fièrement la ville sur la scène de la NBA.",
  ],
  [
    9,
    "Les Detroit Pistons ont une histoire riche dans la NBA depuis leur fondation en 1941. L'équipe a remporté trois championnats NBA, dont deux dans les années 1980 et un en 2004. Les Pistons sont connus pour leur style de jeu physique et leur défense robuste, ainsi que pour leur engagement envers la communauté de Detroit. Au fil des ans, ils ont vu des joueurs légendaires tels que Isiah Thomas, Joe Dumars et Chauncey Billups porter fièrement leur maillot. Les Pistons continuent de représenter avec fierté la ville de Detroit sur la scène de la NBA.",
  ],
  [
    10,
    "Les Golden State Warriors ont une longue histoire dans la NBA depuis leur fondation en 1946. L'équipe a remporté un total impressionnant de six championnats NBA, dont trois au cours des dernières années. Les Warriors sont connus pour leur style de jeu rapide et excitant, ainsi que pour leur engagement envers la communauté de la baie de San Francisco. Au fil des ans, ils ont vu des joueurs légendaires comme Wilt Chamberlain, Rick Barry et Stephen Curry porter fièrement leur maillot. Les Warriors continuent de dominer la scène de la NBA et de représenter fièrement la région de la baie.",
  ],
  [
    11,
    "Les Houston Rockets ont une histoire riche dans la NBA depuis leur fondation en 1967. L'équipe a remporté deux championnats NBA, en 1994 et 1995. Les Rockets sont connus pour leur jeu rapide et leur attaque explosive, ainsi que pour leur engagement envers la communauté de Houston. Au fil des ans, ils ont vu des joueurs légendaires comme Hakeem Olajuwon, Clyde Drexler et James Harden porter fièrement leur maillot. Les Rockets continuent de représenter fièrement la ville de Houston sur la scène de la NBA.",
  ],
  [
    12,
    "Les Indiana Pacers ont une longue histoire dans la NBA depuis leur fondation en 1967. Bien que l'équipe n'ait pas encore remporté de championnat NBA, elle a connu plusieurs périodes de succès et de compétitivité. Les Pacers sont connus pour leur jeu physique et leur défense solide, ainsi que pour leur engagement envers la communauté d'Indianapolis. Au fil des ans, ils ont vu des joueurs talentueux comme Reggie Miller, Jermaine O'Neal et Paul George porter fièrement leur maillot. Les Pacers continuent de viser le titre de champion et de représenter fièrement la ville sur la scène de la NBA.",
  ],
  [
    13,
    "Les Los Angeles Clippers ont une histoire mouvementée dans la NBA depuis leur fondation en 1970. L'équipe a longtemps été considérée comme l'outsider de Los Angeles, mais a récemment connu une période de succès avec l'acquisition de joueurs étoiles. Les Clippers sont connus pour leur jeu dynamique et excitant, ainsi que pour leur engagement envers la communauté de Los Angeles. Au fil des ans, ils ont vu des joueurs talentueux comme Blake Griffin, Chris Paul et Kawhi Leonard porter fièrement leur maillot. Les Clippers cherchent désormais à remporter leur premier championnat NBA et à écrire une nouvelle page dans leur histoire.",
  ],
  [
    14,
    "Les Los Angeles Lakers sont l'une des franchises les plus réussies et les plus emblématiques de la NBA, fondée en 1947. L'équipe a remporté un total impressionnant de 17 championnats NBA, dont plusieurs dans les années 2000 sous la direction de Kobe Bryant. Les Lakers sont connus pour leur culture de la victoire, leur glamour et leur engagement envers l'excellence. Au fil des ans, ils ont vu des joueurs légendaires tels que Magic Johnson, Kareem Abdul-Jabbar et Shaquille O'Neal porter fièrement leur maillot pourpre et or. Les Lakers continuent de dominer la scène de la NBA et de représenter avec fierté la ville de Los Angeles.",
  ],
  [
    15,
    "Les Memphis Grizzlies ont une histoire relativement courte dans la NBA, l'équipe ayant déménagé de Vancouver à Memphis en 2001. Malgré leur courte existence, les Grizzlies ont connu des moments de succès dans la ligue. L'équipe est connue pour sa défense robuste et son jeu physique, ainsi que pour son engagement envers la communauté de Memphis. Au fil des ans, ils ont vu des joueurs talentueux comme Pau Gasol, Zach Randolph et Marc Gasol porter fièrement leur maillot. Les Grizzlies continuent de représenter fièrement la ville de Memphis sur la scène de la NBA.",
  ],
  [
    16,
    "Le Miami Heat est l'une des franchises les plus réussies de la NBA, fondée en 1988. L'équipe a remporté un total de trois championnats NBA, dont deux dans les années 2000 et un en 2012 et 2013. Les Heat sont connus pour leur intensité, leur défense féroce et leur engagement envers la communauté de Miami. Au fil des ans, ils ont vu des joueurs légendaires comme Dwyane Wade, Shaquille O'Neal et LeBron James porter fièrement leur maillot. Les Heat continuent de représenter avec fierté la ville de Miami sur la scène de la NBA.",
  ],

  [
    16,
    "Le Miami Heat est une franchise de la NBA basée à Miami, en Floride. Fondée en 1988, l'équipe a remporté trois championnats NBA en 2006, 2012 et 2013. Les Heat sont connus pour leur style de jeu agressif et leur engagement envers la défense. Au fil des ans, ils ont vu des joueurs emblématiques comme Dwyane Wade, Shaquille O'Neal et LeBron James porter leur maillot. Les Heat ont une base de fans passionnée et continuent de représenter fièrement la ville de Miami sur la scène de la NBA.",
  ],
  [
    17,
    "Les Milwaukee Bucks sont une franchise de la NBA basée à Milwaukee, dans le Wisconsin. Fondée en 1968, l'équipe a remporté deux championnats NBA, en 1971 et 2021. Les Bucks sont connus pour leur jeu d'équipe solide et leur engagement envers la communauté de Milwaukee. Au fil des ans, ils ont vu des joueurs légendaires comme Kareem Abdul-Jabbar, Oscar Robertson et Giannis Antetokounmpo porter fièrement leur maillot. Les Bucks continuent d'être une force compétitive dans la ligue et de représenter fièrement la ville de Milwaukee.",
  ],
  [
    18,
    "Les Minnesota Timberwolves sont une franchise de la NBA basée à Minneapolis, dans le Minnesota. Fondée en 1989, l'équipe n'a pas encore remporté de championnat NBA, mais a connu plusieurs périodes de succès au fil des ans. Les Timberwolves sont connus pour avoir développé de jeunes talents prometteurs et pour leur jeu offensif excitant. L'équipe continue de construire et de développer son roster dans l'espoir de devenir une force majeure dans la ligue.",
  ],
  [
    19,
    "Les New Orleans Pelicans sont une franchise de la NBA basée à La Nouvelle-Orléans, en Louisiane. Fondée en 2002, l'équipe est relativement récente dans la ligue. Les Pelicans sont connus pour avoir sélectionné des talents exceptionnels lors de la draft, notamment Anthony Davis et Zion Williamson. Bien que l'équipe n'ait pas encore remporté de championnat NBA, elle représente fièrement la ville de La Nouvelle-Orléans sur la scène de la NBA.",
  ],
  [
    20,
    "Les New York Knicks sont une franchise de la NBA basée à New York, dans l'État de New York. Fondée en 1946, l'équipe a une longue histoire dans la ligue. Bien que les Knicks n'aient pas remporté de championnat NBA depuis 1973, ils restent l'une des équipes les plus emblématiques de la NBA. Les Knicks jouent leurs matchs à domicile au Madison Square Garden, l'une des arènes les plus célèbres du monde. Malgré des périodes de lutte, les Knicks ont une base de fans dévouée et continuent de représenter fièrement la ville de New York.",
  ],
  [
    21,
    "Le Thunder d'Oklahoma City est une franchise de la NBA basée à Oklahoma City, en Oklahoma. Fondée en 2008, l'équipe est relativement jeune dans la ligue. Malgré leur courte existence, les Thunder ont déjà connu des succès significatifs, notamment une apparition en finale NBA en 2012. Les Thunder sont connus pour leur jeu d'équipe solide et leur engagement envers la communauté. L'équipe continue de développer de jeunes talents et aspire à devenir une force majeure dans la ligue.",
  ],
  [
    22,
    "Le Magic d'Orlando est une franchise de la NBA basée à Orlando, en Floride. Fondée en 1989, l'équipe a connu des hauts et des bas au fil des ans. Les Magic sont connus pour avoir atteint les finales NBA à deux reprises, en 1995 et 2009, mais n'ont pas encore remporté de championnat. L'équipe est appréciée pour son engagement envers la communauté d'Orlando et pour son style de jeu excitant. Malgré des périodes de lutte, les Magic ont une base de fans loyale et continuent de représenter fièrement la ville de Orlando.",
  ],
  [
    23,
    "Les 76ers de Philadelphie sont une franchise de la NBA basée à Philadelphie, en Pennsylvanie. Fondée en 1946, l'équipe a remporté trois championnats NBA, en 1955, 1967 et 1983. Les 76ers sont connus pour leur éthique de travail acharnée et leur tradition de compétitivité. Au fil des ans, ils ont vu des légendes comme Wilt Chamberlain, Julius Erving et Allen Iverson porter fièrement leur maillot. Les 76ers continuent de représenter fièrement la ville de Philadelphie sur la scène de la NBA.",
  ],
  [
    24,
    "Les Suns de Phoenix sont une franchise de la NBA basée à Phoenix, en Arizona. Fondée en 1968, l'équipe a atteint les finales NBA à plusieurs reprises mais n'a pas encore remporté de championnat. Les Suns sont connus pour leur style de jeu rapide et excitant, ainsi que pour leur engagement envers la communauté de Phoenix. Au fil des ans, ils ont vu des joueurs légendaires comme Charles Barkley et Steve Nash porter fièrement leur maillot. Les Suns continuent de viser le titre de champion et de représenter fièrement la ville de Phoenix.",
  ],
  [
    25,
    "Les Trail Blazers de Portland sont une franchise de la NBA basée à Portland, dans l'Oregon. Fondée en 1970, l'équipe a remporté un championnat NBA en 1977. Les Trail Blazers sont connus pour leur base de fans passionnée et pour leur engagement envers la communauté de Portland. Au fil des ans, ils ont vu des joueurs emblématiques comme Clyde Drexler et Damian Lillard porter fièrement leur maillot. Les Trail Blazers continuent de viser les plus hauts sommets de la NBA et de représenter avec fierté la ville de Portland.",
  ],
  [
    26,
    "Les Kings de Sacramento sont une franchise de la NBA basée à Sacramento, en Californie. Fondée en 1945, l'équipe a déménagé à plusieurs reprises avant de s'installer à Sacramento en 1985. Les Kings sont connus pour leur base de fans passionnée et pour leur engagement envers la communauté de Sacramento. Bien que l'équipe n'ait pas remporté de championnat NBA, elle a connu des périodes de succès et continue de viser l'excellence sur le terrain.",
  ],
  [
    27,
    "Les Spurs de San Antonio sont une franchise de la NBA basée à San Antonio, au Texas. Fondée en 1967, l'équipe est l'une des franchises les plus réussies de l'histoire de la NBA. Les Spurs ont remporté cinq championnats NBA, en 1999, 2003, 2005, 2007 et 2014, sous la direction de l'entraîneur légendaire Gregg Popovich. L'équipe est connue pour son jeu d'équipe solide, sa culture de discipline et son engagement envers l'excellence. Les Spurs continuent de représenter fièrement la ville de San Antonio.",
  ],
  [
    28,
    "Les Raptors de Toronto sont la seule équipe canadienne de la NBA, fondée en 1995. L'équipe a connu des périodes de lutte au début de son histoire, mais est devenue de plus en plus compétitive au fil des ans. Les Raptors ont remporté leur premier championnat NBA en 2019, captivant la nation entière avec leur parcours historique. L'équipe est connue pour sa base de fans passionnée, surnommée le 'North', ainsi que pour son engagement envers la diversité et l'inclusion. Les Raptors continuent de représenter fièrement le Canada sur la scène de la NBA et de viser l'excellence chaque saison.",
  ],
  [
    29,
    "L'Utah Jazz est une franchise historique de la NBA, fondée en 1974. Bien que l'équipe n'ait pas encore remporté de championnat NBA, elle a connu plusieurs périodes de succès et de domination dans la ligue. Les Jazz sont connus pour leur jeu d'équipe solide, leur style de jeu discipliné et leur engagement envers l'excellence. L'équipe a vu des joueurs légendaires comme Karl Malone et John Stockton porter fièrement leur maillot et représenter la ville de Salt Lake City sur la scène de la NBA. Les Jazz continuent de viser le titre de champion et de représenter avec fierté l'État de l'Utah.",
  ],
  [
    30,
    "Les Washington Wizards ont une histoire riche et diversifiée dans la NBA depuis leur fondation en 1961. L'équipe a remporté un seul championnat NBA, en 1978, mais a connu plusieurs périodes de succès et de compétitivité dans la ligue. Les Wizards sont connus pour avoir vu des joueurs légendaires comme Wes Unseld, Elvin Hayes et Gilbert Arenas porter leur maillot. Malgré des périodes de lutte, les Wizards ont une base de fans passionnée et continuent de représenter fièrement la ville de Washington D.C. sur la scène de la NBA.",
  ],
]);

export default teamInfo;
