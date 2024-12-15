import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["placehold.co"],
  },
  env: {
    API_AUTH: "http://localhost:3050/api/auth/",
    API_USER_FUNCTIONS: "http://localhost:3050/api/user/",
    API_PRODUCT_FUNCTIONS: "http://localhost:3050/api/products/",
    API_PAYMENT_FUNCTIONS: "http://localhost:3050/api/pay/",
    API_NOTIFICATION_FUNCTIONS: "http://localhost:3050/api/notification/",
  },
};

export default nextConfig;
