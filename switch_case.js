let vencedor = "";
switch (player1) {
    case "R":
      switch (player2) {
        case "R":
          return "Empate";
        case "P":
          return "P.R Papel cubre a roca, vencedor player2";
        case "T":
          return "T.R Roca rompe tijeras, vencedor player1";
      }
      break;
    case "P":
      switch (player2) {
        case "R":
          return "vencedor player1, papel cubre piedra";
        case "papel":
          return "Empate";
        case "tijera":
          return "vencedor player2, tijera corta papel";
      }
      break;
    case "T":
      switch (player2) {
        case "R":
          return "vencedor player2, Roca rompe tijeras";
        case "papel":
          return "vencedor player1, Tijeras corta papel";
        case "tijera":
          return "Empate";
      }
      break;

}
