export function getLoginTime() {
  const now = new Date();

  const weekday = now.toLocaleDateString("en-GB", {
    weekday: "short",
  });

  const month = now.toLocaleDateString("en-GB", {
    month: "short",
  });

  const day = now.getDate();

  const time = now.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return `${weekday} ${month} ${day} ${time}`;
}
