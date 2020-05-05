interface ThemeShape {
  breakpoints: string[]
  fontSizes: string[]
  colors: {
    [key: string]: string
  }
  space: string[]
  fontWeights: {
    [key: string]: number
  }
  sidebarWidth: {
    [key: string]: string
  }
}

const theme: ThemeShape = {
  breakpoints: ['480px', '650px', '1000px', '1200px', '1400px'],
  fontSizes: ['1rem', '1.2rem', '1.44rem', '1.728rem', '2.074rem', '2.488rem'],
  colors: {
    primary: '#ff0000',  // red
    secondary: '#494992', // blue
    grey: '#58545a',
    shade: '#f5f5f5',
  },
  space: [
    '0', // 0
    '0.25rem', // 1
    '0.5rem', // 2
    '0.75rem', // 3
    '1rem', // 4
    '1.25rem', // 5
    '1.5rem', // 6
    '2rem', // 7
    '2.5rem', // 8
    '3rem', // 9
    '4rem', // 10
    '6rem', // 11
    '8rem', // 12
    '12rem', // 13
    '16rem', // 14
  ],
  fontWeights: {
    normal: 400,
    bold: 700,
  },
  sidebarWidth: {
    big: '375px',
    normal: '320px',
  },
}

export default theme
