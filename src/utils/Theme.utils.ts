import { appTheme } from '../theme/Theme'

export type TextSizeType = 'xxs' | 'xs' | 's' | 'm' | 'xms' | 'xm' | 'l' | 'xl' | 'xxl' | undefined

export const getFontSize = (size: TextSizeType) => {
  switch (size) {
    case 'xxs':
      return appTheme.fontSizes.FONT_SIZE_XXS
    case 'xs':
      return appTheme.fontSizes.FONT_SIZE_XS
    case 's':
      return appTheme.fontSizes.FONT_SIZE_S
    case 'm':
      return appTheme.fontSizes.FONT_SIZE_M
    case 'xms':
      return appTheme.fontSizes.FONT_SIZE_XMS
    case 'xm':
      return appTheme.fontSizes.FONT_SIZE_XM
    case 'l':
      return appTheme.fontSizes.FONT_SIZE_L
    case 'xl':
      return appTheme.fontSizes.FONT_SIZE_XL
    default:
      return appTheme.fontSizes.FONT_SIZE_M
  }
}

export type ColorType =
  | 'typo-black'
  | 'typo-white'
  | 'typo-default-light'
  | 'typo-primary'
  | 'button-primary'
  | 'button-secondary'
  | 'button-secondary-hover'
  | 'transparent'
  | undefined

export const getColor = (color: ColorType) => {
  switch (color) {
    case 'typo-black':
      return appTheme.colors.TYPOGRAPHY_DARK
    case 'typo-white':
      return appTheme.colors.TYPOGRAPHY_LIGHT
    case 'typo-primary':
      return appTheme.colors.TYPOGRAPHY_PRIMARY
    case 'button-primary':
      return appTheme.colors.BUTTON_PRIMARY
    case 'button-secondary':
      return appTheme.colors.BUTTON_SECONDARY
    case 'button-secondary-hover':
      return appTheme.colors.BUTTON_SECONDARY_HOVERED
    case 'typo-default-light':
      return appTheme.colors.TYPOGRAPHY_DEFAULT_ICON
    case 'transparent':
      return 'transparent'
    default:
      return color
  }
}

export type Variation = 'primary' | 'secondary' | 'text' | 'warning' | undefined

export const getBackgroundColor = (variation: Variation) => {
  switch (variation) {
    case 'primary':
      return appTheme.colors.BUTTON_PRIMARY
    case 'secondary':
      return appTheme.colors.BUTTON_SECONDARY
    case 'warning':
      return appTheme.colors.BUTTON_WARNING
    case 'text':
      return 'transparent'
    default:
      return variation
  }
}

export const getHoverColor = (variation: Variation) => {
  switch (variation) {
    case 'primary':
      return appTheme.colors.BUTTON_PRIMARY_HOVERED
    case 'secondary':
      return appTheme.colors.BUTTON_SECONDARY_HOVERED
    case 'warning':
      return appTheme.colors.BUTTON_WARNING_HOVERED
    case 'text':
      return 'transparent'
    default:
      return variation
  }
}

export type AddMoreSize = 'small' | 'large' | undefined

export const getAddMoreContainerHeight = (size: AddMoreSize) => {
  switch (size) {
    case 'small':
      return appTheme.addMoreContainer.small.height
    case 'large':
      return appTheme.addMoreContainer.large.height
    default:
      return appTheme.addMoreContainer.small.height
  }
}

export const getAddMoreContainerWidth = (size: AddMoreSize) => {
  switch (size) {
    case 'small':
      return appTheme.addMoreContainer.small.width
    case 'large':
      return appTheme.addMoreContainer.large.width
    default:
      return appTheme.addMoreContainer.small.width
  }
}

export const getAddMoreContainerFontSize = (size: AddMoreSize) => {
  switch (size) {
    case 'small':
      return appTheme.addMoreContainer.small.fontSize
    case 'large':
      return appTheme.addMoreContainer.large.fontSize
    default:
      return appTheme.addMoreContainer.small.fontSize
  }
}

export type PhotoSize = 'small' | 'large' | undefined

export const getPhotoItemHeight = (size: PhotoSize) => {
  switch (size) {
    case 'small':
      return appTheme.photoItem.small.height
    case 'large':
      return appTheme.photoItem.large.height
    default:
      return appTheme.photoItem.small.height
  }
}

export const getPhotoItemWidth = (size: AddMoreSize) => {
  switch (size) {
    case 'small':
      return appTheme.photoItem.small.width
    case 'large':
      return appTheme.photoItem.large.width
    default:
      return appTheme.photoItem.small.width
  }
}
