// AppColors equivalent matching iOS design

export const AppColors = {
  primary: '#9966E6',
  accent: '#FF6699',
  action: '#FF994D',
  highlight: '#4DCCFF',
  success: '#33E699',
  warning: '#FFCC33',
  error: '#FF8080',
  backgroundLight: '#F2EBFF',
  backgroundPink: '#FFF2F9',
  gradientStart: '#B380FF',
  gradientEnd: '#FF80B3',
  cardBackground: '#FFFFFF',
  surface: '#FAF7FF',
  inputBackground: '#F7F2FF',
  textPrimary: '#000000',
  textSecondary: '#666666',
  textOnColor: '#FFFFFF',
  border: '#CCB3F2',
  inputBorder: '#B399E6',
  buttonDisabled: '#D9D9D9',
  buttonPressed: '#804DCC',
} as const;

export const gradients = {
  main: 'linear-gradient(135deg, #B380FF 0%, #FF80B3 100%)',
  action: 'linear-gradient(90deg, #9966E6 0%, #FF6699 100%)',
  background: 'linear-gradient(135deg, rgba(242, 235, 255, 0.3) 0%, rgba(255, 242, 249, 0.3) 100%)',
  personality: 'linear-gradient(90deg, rgba(153, 51, 230, 1) 0%, rgba(230, 77, 153, 1) 50%, rgba(255, 128, 77, 1) 100%)',
} as const;
