// import React, { useState } from "react";

// const Portfolio = () => {
//   const services = [
//     "All",
//     "Branding",
//     "Product Photography",
//     "Social Media",
//     "Logo Design",
//     "Web Design",
//     "UI/UX",
//     "Videography",
//     "Content Creation",
//     "Print Design",
//   ];

//   const portfolioItems = [
//     {
//       title: "Brand Identity Pack",
//       category: "Branding",
//       image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500",
//     },
//     {
//       title: "Luxury Product Shot",
//       category: "Product Photography",
//       image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=500",
//     },
//     {
//       title: "Instagram Campaign",
//       category: "Social Media",
//       image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=500",
//     },
//     {
//       title: "Minimal Logo",
//       category: "Logo Design",
//       image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500",
//     },

//     // NEW ITEMS WITH VIDEO SUPPORT
//     {
//       title: "Short Video Ad",
//       category: "Videography",
//       video: "https://cdn.pixabay.com/video/2019/06/20/24566-345038998_large.mp4",
//       poster:
//         "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500",
//     },

//     {
//       title: "Reels / TikTok Pack",
//       category: "Content Creation",
//       video: "https://cdn.pixabay.com/video/2020/04/24/36310-408298997_large.mp4",
//       poster:
//         "https://images.unsplash.com/photo-1555696958-c5049a4a0c02?w=500",
//     },

//     // Website + UI Items
//     {
//       title: "Modern Website Landing Page",
//       category: "Web Design",
//       image: "https://images.unsplash.com/photo-1559027615-8f4e9a06d5c5?w=500",
//     },
//     {
//       title: "Mobile App UI Mockup",
//       category: "UI/UX",
//       image: "https://images.unsplash.com/photo-1559027615-7741d1c12c52?w=500",
//     },

//     {
//       title: "Magazine Layout",
//       category: "Print Design",
//       image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=500",
//     },
//   ];

//   const [activeCategory, setActiveCategory] = useState("All");

//   const filteredItems =
//     activeCategory === "All"
//       ? portfolioItems
//       : portfolioItems.filter((item) => item.category === activeCategory);

//   return (
//     <>
//       <h1 className="text-4xl font-bold text-center text-amber-950 mb-10 mt-10 font-times-cond">
//         LATEST WORKS
//       </h1>

//       {/* FILTER BUTTONS */}
//       <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-x-12 gap-y-8 px-8 mb-20">
//         {services.map((item, index) => (
//           <button
//             key={index}
//             onClick={() => setActiveCategory(item)}
//             className={`
//               relative group text-[17px] font-medium tracking-wide py-2 transition-all duration-300
//               ${
//                 activeCategory === item
//                   ? "text-amber-900"
//                   : "text-amber-950/70 hover:text-amber-950"
//               }
//             `}
//           >
//             <span
//               className={`
//                 absolute -top-1 left-1/2 h-[2px] bg-amber-950 
//                 ${activeCategory === item ? "w-full" : "w-0 group-hover:w-full"}
//                 -translate-x-1/2 transition-all duration-300
//               `}
//             ></span>

//             <span>{item}</span>

//             <span
//               className={`
//                 absolute -bottom-1 left-1/2 h-[2px] bg-amber-950 
//                 ${activeCategory === item ? "w-full" : "w-0 group-hover:w-full"}
//                 -translate-x-1/2 transition-all duration-300
//               `}
//             ></span>
//           </button>
//         ))}
//       </div>

//       {/* PORTFOLIO GRID */}
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-8 pb-20">
//         {filteredItems.map((item, index) => (
//           <div
//             key={index}
//             className="
//               group relative overflow-hidden rounded-2xl h-80
//               bg-white/20 backdrop-blur-md border border-white/30
//               shadow-lg hover:shadow-xl
//               transition-all duration-500
//               hover:scale-105 hover:bg-white/30
//               cursor-pointer
//             "
//           >
//             {/* CONDITIONAL: IMAGE OR VIDEO */}
//             {item.video ? (
//               <video
//                 className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
//                 preload="none"
//                 muted
//                 playsInline
//                 loop
//                 poster={item.poster}
//                 onMouseEnter={(e) => e.target.play()}
//                 onMouseLeave={(e) => e.target.pause()}
//               >
//                 <source src={item.video} type="video/mp4" />
//               </video>
//             ) : (
//               <img
//                 loading="lazy"
//                 src={item.image}
//                 alt={item.title}
//                 className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
//               />
//             )}

//             {/* OVERLAY */}
//             <div
//               className="
//                 absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent
//                 opacity-0 group-hover:opacity-100 transition-all duration-500
//               "
//             />

//             {/* TITLE */}
//             <div
//               className="
//                 absolute inset-0 flex items-end justify-center p-6
//                 translate-y-4 group-hover:translate-y-0
//                 transition-all duration-500
//               "
//             >
//               <h3
//                 className="
//                   text-white text-xl font-semibold text-center
//                   opacity-0 group-hover:opacity-100 transition-all duration-500
//                 "
//               >
//                 {item.title}
//               </h3>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Portfolio;
