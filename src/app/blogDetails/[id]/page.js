// "use client";
// import Image from "next/image";
// import styles from "../../../styles/aboutus/BlogDetails.module.css";
// import blogs from "../../../../public/blogs"; 
// import { useParams } from "next/navigation";

// export default function BlogDetails() {
//   const params = useParams();
//   const blogId = Number(params?.id); // get blog id from URL
//   const blog = blogs.find((item) => item.id === blogId) || blogs[0]; // fallback

//   const features = [
//     { key: "a", text: <>Spacious Seating: Comfort for groups without feeling cramped.</> },
//     { key: "b", text: <>Cost-Effective: Share the cost, save more <br /> compared to multiple cars.</> },
//     { key: "c", text: <>Professional Drivers: Ensuring safe and stress <br /> free journeys.</> },
//     { key: "d", text: <>Convenience: Everyone travels together—no <br /> splitting up.</> },
//     { key: "e", text: <>Perfect for Events: Weddings, tours, picnics, and <br /> office outings.</> },
//   ];

//   return (
//     <div className={styles.container}>
//       {/* ✅ Left Image (dynamic) */}
//       <div className={styles.imageWrapper}>
//         <Image
//           src={blog.image}
//           alt={blog.title}
//           className={styles.image}
//           priority
//         />
//       </div>

//       {/* ✅ Right Content */}
//       <div className={styles.content}>
//         <p className={styles.blogTag}>BLOG</p>
//         <h1 className={styles.heading}>{blog.title}</h1>
//         <p className={styles.description}>
//           When planning a trip with friends, family, or colleagues,
//           transportation can make or break the journey. At Madosha Tours &
//           Travels, our Tempo Travellers offer:
//         </p>

//         {/* Features */}
//         <ul className={styles.list}>
//           {features.map((item) => (
//             <li key={item.key}>
//               <b>{item.key}) </b> {item.text}
//             </li>
//           ))}
//         </ul>

//         {/* Buttons */}
//         <div className={styles.buttons}>
//           <button className={styles.getStarted}>Get Started</button>
//           <button className={styles.register}>Register Now</button>
//         </div>

//         {/* Navigation Arrows */}
//         <div className={styles.navigation}>
//           <button className={styles.navWhite}>←</button>
//           <button className={styles.navBlue}>→</button>
//         </div>
//       </div>
//     </div>
//   );
// }
