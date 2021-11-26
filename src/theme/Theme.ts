export const appTheme = {
  colors: {
    TYPOGRAPHY_DARK: '#000000',
    TYPOGRAPHY_LIGHT: '#FFFFFF',
    TYPOGRAPHY_ERROR: '#FF0000',
    TYPOGRAPHY_PRIMARY: 'rgba(21, 139, 234, 1)',
    TYPOGRAPHY_SECONDARY: 'rgb(11, 163, 96)',

    BUTTON_PRIMARY: 'rgb(11, 163, 96)',
    BUTTON_PRIMARY_HOVERED: 'rgb(6, 132, 76)',
    BUTTON_SECONDARY: 'rgba(21, 139, 234, 1)',
    BUTTON_SECONDARY_HOVERED: 'rgba(2, 87, 215, 1)',
    BUTTON_WARNING: 'rgba(255, 0, 0, 0.7)',
    BUTTON_WARNING_HOVERED: 'rgba(255, 0, 0, 1)',

    TYPOGRAPHY_DEFAULT_ICON: '#DDDDDD',

    DEFAULT_BG: '#F9F6F2',
    DEFAULT_DIVIDER_BG: '#F9F6F2',
    DEFAULT_TRANSPARENT_BG: 'rgba(0, 0, 0, 0.5)',
  },

  fontSizes: {
    FONT_SIZE_XXS: '1rem', // ~10px
    FONT_SIZE_XS: '1.2rem', // ~12px
    FONT_SIZE_S: '1.4rem', // ~14px
    FONT_SIZE_M: '1.5rem', // ~15px
    FONT_SIZE_XMS: '1.6rem', // ~16px
    FONT_SIZE_XM: '1.7rem', // ~17px
    FONT_SIZE_L: '1.8rem', // ~18px
    FONT_SIZE_XL: '3.6rem', // ~36px
    FONT_SIZE_XXL: '8.2rem', // ~82px
  },

  fontWeight: {
    FONT_WEIGHT_REGULAR: '400',
    FONT_WEIGHT_MEDIUM: '500',
    FONT_WEIGHT_BOLD: '800',
  },

  addMoreContainer: {
    small: {
      height: '5rem',
      width: '7rem',
      fontSize: '2rem',
    },
    large: {
      height: '40rem',
      width: '100%',
      fontSize: '6rem',
    },
  },

  photoItem: {
    small: {
      height: '5rem',
      width: '7rem',
    },
    large: {
      height: '40rem',
      width: 'auto',
    },
  },
}

export type AppTheme = typeof appTheme
