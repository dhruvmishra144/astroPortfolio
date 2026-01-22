const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    'animate-blob-1',
    'animate-blob-2',
    'animate-blob-3',
    'animate-blob-4',
    'animate-blob-5',
    'animate-blob-6',
    'animate-blob-7',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        'blob-1': 'blob 10s infinite',
        'blob-2': 'blob 12s infinite',
        'blob-3': 'blob 14s infinite',
        'blob-4': 'blob 16s infinite',
        'blob-5': 'blob 18s infinite',
        'blob-6': 'blob 20s infinite',
        'blob-7': 'blob 22s infinite',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;