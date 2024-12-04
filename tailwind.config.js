/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}", // เพิ่ม .vue เพื่อรองรับ Vue ไฟล์
    ],
    theme: {
      extend: {},
    },
    plugins: [
        require('daisyui'),
    ],
  };
  