export const COLORS = {
  white: 'hsl(0deg 0% 100%)',
  gray: {
    100: 'hsl(185deg 5% 95%)',
    300: 'hsl(190deg 5% 80%)',
    500: 'hsl(196deg 4% 60%)',
    700: 'hsl(220deg 5% 40%)',
    900: 'hsl(220deg 3% 20%)',
  },
  primary: 'hsl(340deg 65% 47%)',
  secondary: 'hsl(240deg 60% 63%)',
};


export const WEIGHTS = {
  normal: 500,
  medium: 600,
  bold: 800,
};

export const BREAKPOINTS = {
  phoneMax: 37.5,
  tabletMax: 59.375,
  laptopMax: 81.25
}

export const QUERIES = {
  phoneAndDown: `(max-width: ${BREAKPOINTS.phoneMax}rem)`,
  tabletAndDown: `(max-width: ${BREAKPOINTS.tabletMax}rem)`,
  laptopAndDown: `(max-width: ${BREAKPOINTS.laptopMax}rem)`,
  laptopAndUp: `(min-width: ${BREAKPOINTS.laptopMax}rem)`,
  tabletAndUp: `(min-width: ${BREAKPOINTS.tabletMax}rem)`,
  phoneAndUp: `(min-width: ${BREAKPOINTS.phoneMax}rem)`,
};