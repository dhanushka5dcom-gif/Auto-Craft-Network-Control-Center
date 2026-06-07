module.exports = {
  content: [
    './client/src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00F5D4',
        secondary: '#8B5CF6',
        alert: '#FF6B6B',
        success: '#22C55E',
        warning: '#F59E0B',
        dark: '#0B0F19',
      },
      backgroundColor: {
        glass: 'rgba(255, 255, 255, 0.1)',
      },
      backdropBlur: {
        glass: '10px',
      },
    },
  },
  plugins: [],
};
