import React, { useEffect, useState } from "react";

export default function JoinNotification() {
  const [show, setShow] = useState(false);
  const ethiopianNames = [
    "Mekdes",
    "Abel",
    "Selam",
    "Kalkidan",
    "Yonas",
    "Ruth",
    "Abraham",
    "Lily",
    "Nahom",
    "Mahi",
    "Helina",
    "Samuel",
    "Hanna",
    "Mikiyas",
    "Rahel",
    "Biniyam",
    "Sara",
    "Henok",
    "Bethel",
    "Amanuel",
    "Meron",
    "Kidus",
    "Saron",
    "Brook",
    "Yeshi",
    "Netsanet",
    "Ephrem",
    "Rediet",
    "Biruk",
  ];
  const randomName =
    ethiopianNames[Math.floor(Math.random() * ethiopianNames.length)];

  useEffect(() => {
    const interval = setInterval(() => {
      setShow(true);

      // Hide it after 5 seconds
      setTimeout(() => {
        setShow(false);
      }, 5000);
    }, 10000); // 1 minute (60000 ms)

    return () => clearInterval(interval);
  }, [show]);

  if (!show) return null;

  return (
    <div className="fixed  top-32 right-5 bg-white dark:bg-dark-background shadow-lg rounded-lg p-6 flex items-center gap-4 animate-fade-in-out z-[9999]">
      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
        🎉
      </div>
      <div>
        <p className="text-sm font-semibold text-gray-800 dark:text-white">
          {randomName} joined Brighthood 🚀
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Join the community today 🚀
        </p>
      </div>
    </div>
  );
}
