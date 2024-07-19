/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      margin: {
        20: '20px'
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        ifoundRed: '#DE4D4A',
        ifoundGary: '#D9D3D5',
        ifoundDarkGray: '#615F5F',
        ifoundBlue: '#1D6AA2',
        //====Tag Color=====
        tagRed: '#FFCBC9',
        tagRedText: '#CE0E0A',
        tagOrange: '#FFE0C9',
        tagOrangeText: '#ED6E13',
        tagYellow: '#FFF59A',
        tagYellowText: '#938500',
        tagGreen: '#DEFFC9',
        tagGreenText: '#46B900',
        tagCyan: '#C9FFF9',
        tagCyanText: '#0BCCB5',
        tagBlue: '#C9E9FF',
        tagBlueText: '#23A3FF',
        tagPurple: '#CBC9FF',
        tagPurpleText: '#4844FF',
        tagMagenta: '#F8C9FF',
        tagMagentaText: '#E12CFF',
        tagPink: '#FFC9DA',
        tagPinkText: '#FF3270'
        //=========
      },
      screens: {
        sm: '410px',
        md: '500px',
        lg: '800px'
      }
    }
  },
  plugins: []
}
