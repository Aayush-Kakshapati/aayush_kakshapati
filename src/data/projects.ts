export const projects = [
  {
    name: "Full-Stack Clothing Store",
    slug: "brand-full-stack-clothing-store",
    year: 2025,
    featured: true,
    status: "Completed",
    github: "https://github.com/Aayush-Kakshapati/Brand.git",
    about:
      "Developed a fully functional e-commerce platform that allows users to browse, select, and purchase clothing items online with ease. The platform features a clean, responsive user interface that adapts seamlessly across mobile and desktop devices. I implemented full CRUD operations for products and orders, integrated JWT authentication for secure login and user sessions, and optimized database performance using MongoDB caching and indexing. Additionally, I focused on creating a smooth checkout experience, including cart management, order tracking, and payment processing, ensuring both scalability and reliability for future growth.",
    techStack: ["React.js", "Express.js", "MongoDB", "JWT Authentication"],
    images: [
      "/projectImages/homepg.png",
      "/projectImages/DesktopCart.png",
      "/projectImages/Shoppg.png",
      "/projectImages/productdesc.png",
    ],
    highlights: [
      "Developed full CRUD functionality for products and orders, enabling dynamic management of the store inventory and customer purchases.",
      "Integrated JWT-based authentication and secure session management to protect user accounts and personal data.",
      "Designed and implemented a fully responsive UI that ensures an intuitive shopping experience on both mobile and desktop devices.",
      "Optimized database queries and applied caching and indexing strategies in MongoDB to improve performance and scalability.",
      "Enhanced the checkout flow to support seamless cart management, order tracking, and payment processing, increasing user satisfaction and conversion rates.",
    ],
  },
  {
  name: "Property Management System",
  slug: "property-management-system",
  year: 2026,
  featured: true,
  status: "In Progress",
  github: "https://github.com/Aayush-Kakshapati",
  about:
    "Built a full-stack Property Management System that enables property owners, admins, and tenants to manage properties, units, leases, payments, and maintenance requests. The platform is split into a Next.js 14 frontend and a Django REST Framework backend, following a modular, service-oriented architecture. It supports role-based access control, secure JWT authentication, and structured data management across multiple relational entities. The system also includes an analytics dashboard for tracking occupancy, revenue, and maintenance activity.",
  techStack: [
    "Next.js",
    "React.js",
    "Tailwind CSS",
    "Django",
    "Django REST Framework",
    "PostgreSQL",
    "JWT Authentication",
    "Axios",
    "Recharts",
  ],
  images: [
    "/projectImages/login.png",
    "/projectImages/dashboardA.png",
    "/projectImages/dashboardU.png",
  ],
  highlights: [
    "Designed a multi-role system supporting owners, admins, and tenants with role-based access control.",
    "Built a modular Django REST Framework backend with clean separation of concerns across apps (users, properties, leases, payments, maintenance).",
    "Developed a Next.js 14 frontend with reusable UI components, protected routes, and centralized API service layer.",
    "Implemented JWT-based authentication with secure token handling and automatic refresh flow.",
    "Created a dashboard with real-time analytics including occupancy rate, revenue tracking, and maintenance status.",
  ],
}
]