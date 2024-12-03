// import React from "react";
// import { useTranslation } from "react-i18next";
// import { Suspense } from "react";
// export default function UpdateSoon() {
//   const { t, i18n } = useTranslation("updateSoon");
//   const changeLenguage = () => {
//     i18n.changeLanguage("es");
//   };
//   return (
//     <>
//       <Suspense fallback={<div>Loading...</div>}>
//         <div
//           className="max-w-fit mt-4 m-3 md:mx-auto bg-blue-100 text-blue-800 p-4 rounded-lg"
//           role="alert"
//         >
//           <strong className="font-bold text-md mr-4">{t("title")}</strong>
//           <span className="block text-md sm:inline max-sm:mt-2">
//             {t("subtitulo")}
//           </span>
//           <button
//             onClick={changeLenguage}
//             className="mt-2 text-sm text-blue-800 underline"
//           >
//             cambia el lenguage
//           </button>
//         </div>
//       </Suspense>
//     </>
//   );
// }
