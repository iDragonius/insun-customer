import localFont from "next/font/local";

export const Insun = localFont({
  src: [
    {
      path: "./insun/Insun-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./insun/Insun-Medium.ttf",
      weight: "500",
      style: "medium",
    },
    {
      path: "./insun/Insun-DemiBold.ttf",
      weight: "600",
      style: "semibold",
    },
    {
      path: "./insun/Insun-Bold.ttf",
      weight: "700",
      style: "bold",
    },
  ],
});
