// import React from "react";
// import { Link } from "react-router-dom";
// import "../styles/blogs.css";

// const blogs = [
//   {
//     id: 1,
//     category: "Power Solutions",
//     date: "September 08, 2026",
//     readTime: "5 min read",
//     title: "Choosing the Right Generator for Your Power Requirements",
//     description:
//       "A practical guide to selecting the right generator capacity, fuel type, and features for homes, offices, and industrial applications.",
//     image:
//       "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=85",
//     featured: true,
//   },
//   {
//     id: 2,
//     category: "Maintenance",
//     date: "September 04, 2026",
//     readTime: "4 min read",
//     title: "Simple Ways to Improve Generator Performance",
//     description:
//       "Discover essential maintenance practices that improve efficiency, reduce unexpected breakdowns, and extend generator life.",
//     image:
//       "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=900&q=85",
//   },
//   {
//     id: 3,
//     category: "Power Backup",
//     date: "August 29, 2026",
//     readTime: "6 min read",
//     title: "Why Reliable Power Backup Matters for Every Business",
//     description:
//       "Understand how dependable power backup protects business operations, equipment, productivity, and customer experience.",
//     image:
//       "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=900&q=85",
//   },
//   {
//     id: 4,
//     category: "Generator Safety",
//     date: "August 21, 2026",
//     readTime: "4 min read",
//     title: "Important Generator Safety Practices You Should Know",
//     description:
//       "From proper ventilation to routine inspections, learn the safety practices every generator owner should follow.",
//     image:
//       "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=85",
//   },
// ];

// const BlogCard = ({ blog }) => {
//   return (
//     <article className="blog-card">
//       <Link to={`/blogs/${blog.id}`} className="blog-card-image">
//         <img src={blog.image} alt={blog.title} />
//         <span className="blog-card-category">{blog.category}</span>
//       </Link>

//       <div className="blog-card-content">
//         <div className="blog-card-meta">
//           <span>{blog.date}</span>
//           <span className="meta-dot">•</span>
//           <span>{blog.readTime}</span>
//         </div>

//         <h3>
//           <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
//         </h3>

//         <p>{blog.description}</p>

//         <Link to={`/blogs/${blog.id}`} className="blog-read-more">
//           Read Article
//           <span>↗</span>
//         </Link>
//       </div>
//     </article>
//   );
// };

// const Blogs = () => {
//   return (
//     <main className="blogs-page">
//       {/* Hero Section */}
//       <section className="blogs-hero">
//         <div className="blogs-hero-overlay"></div>

//         <div className="container blogs-hero-content">
//           <span className="blogs-eyebrow">Insights & Knowledge</span>

//           <h1>
//             Ideas that power
//             <br />
//             <em>better decisions.</em>
//           </h1>

//           <p>
//             Explore practical insights, expert guidance, and useful knowledge
//             about generators, power backup, maintenance, and energy solutions.
//           </p>

//           <div className="blogs-breadcrumb">
//             <Link to="/">Home</Link>
//             <span>/</span>
//             <span>Blogs</span>
//           </div>
//         </div>
//       </section>

//       {/* Blog Listing */}
//       <section className="blogs-section section-padding">
//         <div className="container">
//           <div className="blogs-section-heading">
//             <div>
//               <span className="section-label">Our Journal</span>
//               <h2>
//                 Knowledge for a more
//                 <br />
//                 <span>powerful tomorrow.</span>
//               </h2>
//             </div>

//             <p>
//               Stay informed with carefully written articles designed to help
//               you understand your power requirements and make confident
//               decisions.
//             </p>
//           </div>

//           {/* Featured Blog */}
//           <article className="featured-blog">
//             <Link
//               to={`/blogs/${blogs[0].id}`}
//               className="featured-blog-image"
//             >
//               <img src={blogs[0].image} alt={blogs[0].title} />
//               <span className="featured-blog-badge">Featured Article</span>
//             </Link>

//             <div className="featured-blog-content">
//               <div className="blog-card-meta">
//                 <span>{blogs[0].category}</span>
//                 <span className="meta-dot">•</span>
//                 <span>{blogs[0].date}</span>
//                 <span className="meta-dot">•</span>
//                 <span>{blogs[0].readTime}</span>
//               </div>

//               <h2>
//                 <Link to={`/blogs/${blogs[0].id}`}>
//                   {blogs[0].title}
//                 </Link>
//               </h2>

//               <p>{blogs[0].description}</p>

//               <Link
//                 to={`/blogs/${blogs[0].id}`}
//                 className="featured-blog-button"
//               >
//                 Explore Article
//                 <span>↗</span>
//               </Link>
//             </div>
//           </article>

//           {/* Blog Grid */}
//           <div className="blogs-grid">
//             {blogs.slice(1).map((blog) => (
//               <BlogCard key={blog.id} blog={blog} />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Bottom Editorial Banner */}
//       <section className="blogs-editorial">
//         <div className="container blogs-editorial-inner">
//           <div>
//             <span className="section-label">Stay Informed</span>
//             <h2>
//               Better knowledge.
//               <br />
//               Better power decisions.
//             </h2>
//           </div>

//           <Link to="/contact" className="editorial-button">
//             Talk to Our Team
//             <span>↗</span>
//           </Link>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default Blogs;