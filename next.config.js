/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['i0.wp.com'],
  },
  env: {
    FIREBASE_API_KEY: "AIzaSyAyAKj1ImM7UQKgwBAib0VJ19d2tc1lp6k",
    FIREBASE_AUTH_DOMAIN: "farmart-grocery.firebaseapp.com",
    FIREBASE_PROJECT_ID: "farmart-grocery",
    FIREBASE_STORAGE_BUCKET: "farmart-grocery.appspot.com",
    FIREBASE_MESSAGING_SENDER_ID: "256059372935",
    FIREBASE_APP_ID: "1:256059372935:web:62b50ab27bd033302d4f22"
  }
}

module.exports = nextConfig
