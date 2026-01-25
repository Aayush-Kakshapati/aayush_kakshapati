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
    name: "Centralized Donation Platform",
    slug: "centralized-donation-platform",
    year: 2026,
    featured: true,
    status: "In Progress",
    github: "https://github.com/Aayush-Kakshapati",
    about:
      "Built a comprehensive platform that enables organizations and individuals to create causes, share them with the community, and securely collect donations. The system supports role-based access control to differentiate between administrators and users, ensuring secure and structured management of campaigns. Developed with a modular architecture, it incorporates DTO validation for reliable input handling, Prisma and PostgreSQL for efficient data management, and secure transaction processing with careful input validation. The platform prioritizes usability, providing an intuitive dashboard for tracking donations, managing campaigns, and generating insights, all while maintaining scalability and high security standards.",
    techStack: [
      "Next.js",
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "JWT Authentication",
    ],
    images: [
      "/projectImages/ComingSoon.png",
      "/projectImages/ComingSoon.png",
      "/projectImages/ComingSoon.png",
      "/projectImages/ComingSoon.png",
    ],
    highlights: [
      "Implemented role-based access control, providing secure differentiation between admin and user privileges for campaign management.",
      "Designed a modular backend architecture with DTO validation, ensuring robust, maintainable, and scalable code.",
      "Handled secure payment transactions with proper input validation, protecting user data and ensuring safe donation processing.",
      "Developed an intuitive dashboard for users to track donations, monitor campaigns, and generate insightful analytics.",
      "Streamlined cause creation and sharing workflows, making it simple for organizations and individuals to reach potential donors effectively.",
    ],
  },
];
