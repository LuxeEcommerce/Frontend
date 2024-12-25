import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["placehold.co"],
  },
  env: {
    API_AUTH: "https://hptg8qbn-3050.asse.devtunnels.ms/api/auth/",
    API_USER_FUNCTIONS: "https://hptg8qbn-3050.asse.devtunnels.ms/api/user/",
    API_PRODUCT_FUNCTIONS: "https://hptg8qbn-3050.asse.devtunnels.ms/api/products/",
    API_PAYMENT_FUNCTIONS: "https://hptg8qbn-3050.asse.devtunnels.ms/api/pay/",
    API_NOTIFICATION_FUNCTIONS: "https://hptg8qbn-3050.asse.devtunnels.ms/api/notification/",
    LOCAL_API_AUTH: "http://localhost:3050/api/auth/",
    LOCAL_API_USER_FUNCTIONS: "http://localhost:3050/api/user/",
    LOCAL_API_PRODUCT_FUNCTIONS: "http://localhost:3050/api/products/",
    LOCAL_API_PAYMENT_FUNCTIONS: "http://localhost:3050/api/pay/",
    LOCAL_API_NOTIFICATION_FUNCTIONS: "http://localhost:3050/api/notification/",
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
