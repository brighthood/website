// import React from "react";
// import Button from "./ui/Button";

// export default function CourseCard({ course }) {
//   return (
//     <div className="bg-surface dark:bg-dark-surface rounded-lg shadow-lg my-3 p-6 flex flex-col gap-4 border border-transparent hover:border-primary transition duration-300">
//       <h2 className="text-lg font-bold text-primary dark:text-dark-primary">
//         {course.title}
//       </h2>
//       <p className="text-secondaryText dark:text-dark-secondaryText text-sm">
//         {course.description}
//       </p>

//       <div>
//         <h3 className="text-md font-semibold text-darkText dark:text-white mb-2">
//           Frameworks & Tools:
//         </h3>
//         <ul className="list-disc list-inside space-y-1">
//           {course.frameworks.map((framework, index) => (
//             <li
//               key={index}
//               className="text-secondaryText dark:text-dark-secondaryText text-sm"
//             >
//               {framework}
//             </li>
//           ))}
//         </ul>
//       </div>

//       <Button color="cta" size="sm" className="mt-auto font-semibold ">
//         {course.joinNowText}
//       </Button>
//     </div>
//   );
// }
