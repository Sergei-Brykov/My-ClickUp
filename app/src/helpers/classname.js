export default function cl(...classes) {
  return classes
    .map((cl) => {
      if (typeof cl === "string") {
        return cl;
      }
      if (typeof cl === "boolean") {
        return "";
      }
      if (typeof cl === "object" && cl) {
        return Object.keys(cl).map((key) => (!!cl[key] ? key : ""));
      }

      return "";
    })
    .join(" ");
}
