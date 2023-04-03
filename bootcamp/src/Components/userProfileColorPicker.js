const colors = [
  "#065535",
  "#000000",
  "#133337",
  "#ff0000",
  "#ffd700",
  "#ffa500",
  "#003366",
  "#800000",
  "#20b2aa",
  "#008000",
  "#8b0000",
  "#ff4040",
  "#cc0000",
];

export const colorPicker = () => {
  const username = localStorage.getItem("fullname");
  if (username) {
    const initial = username
      .split(" ")
      .map((name) => name[0])
      .join("")
      .toUpperCase();

    switch (initial[0]) {
      case "A":
      case "Z":
        return { bg: colors[0], initial };
      case "B":
      case "Y":
        return { bg: colors[1], initial };
      case "C":
      case "X":
        return { bg: colors[2], initial };
      case "D":
      case "W":
        return { bg: colors[3], initial };
      case "E":
      case "V":
        return { bg: colors[4], initial };
      case "F":
      case "U":
        return { bg: colors[5], initial };
      case "G":
      case "T":
        return { bg: colors[6], initial };
      case "H":
      case "S":
        return { bg: colors[7], initial };
      case "I":
      case "R":
        return { bg: colors[8], initial };
      case "J":
      case "Q":
        return { bg: colors[9], initial };
      case "K":
      case "P":
        return { bg: colors[10], initial };
      case "L":
      case "O":
        return { bg: colors[11], initial };
      case "M":
      case "N":
        return { bg: colors[12], initial };

      default:
        return { bg: colors[12], initial };
    }
  } 
};

