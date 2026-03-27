// import React from "react";
// import { useTheme } from "./ThemeProvider";

// const ThemeSelect = () => {
//   const { theme, setTheme } = useTheme();

//   return (
//     <button
//       onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//       className=""
//     >
//       {theme === "dark" ? (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="24"
//           height="24"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           className="lucide lucide-moon"
//         >
//           <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
//         </svg>
//       ) : (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="24"
//           height="24"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           className="lucide lucide-sun"
//         >
//           <path d="M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" />
//           <path d="M12 1v2" />
//           <path d="M12 21v2" />
//           <path d="M4.22 4.22l1.42 1.42" />
//           <path d="M18.36 18.36l1.42 1.42" />
//           <path d="M1 12h2" />
//           <path d="M21 12h2" />
//           <path d="M4.22 19.78l1.42-1.42" />
//           <path d="M18.36 5.64l1.42-1.42" />
//         </svg>
//       )}
//     </button>
//   );
// };

// export default ThemeSelect;
