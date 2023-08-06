const relativeTimeFormatter = new Intl.RelativeTimeFormat("es", {
  style: "short",
});

export function getRelativeDate(dateOrString) {
  const now = new Date();

  const date = new Date(dateOrString); // convertir el dato que se entregue a fecha!

  let finalString = "";
  const diff = (date.getTime() - now.getTime()) / 1000; // segundos
  if (diff > -60) {
    finalString = relativeTimeFormatter.format(diff, "seconds");
  } else if (diff > -3600) {
    finalString = relativeTimeFormatter.format(
      Math.floor(diff / 60),
      "minutes"
    );
  } else if (diff > -86400) {
    finalString = relativeTimeFormatter.format(
      Math.floor(diff / 3600),
      "hours"
    );
  } else {
    finalString = relativeTimeFormatter.format(
      Math.floor(diff / 86400),
      "days"
    );
  }
  return finalString;
}
