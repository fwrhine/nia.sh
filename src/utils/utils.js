import { toaster } from "@/components/ui/toaster";

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

export function downloadCV() {
  const link = document.createElement("a");
  link.href = "/Aghnia_Prawira_CV.pdf";
  link.download = "Aghnia_Prawira_CV.pdf";
  link.click();

  toaster.create({
    description: "Download started!",
    type: "info",
  });
}
