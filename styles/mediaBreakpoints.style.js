import { sizeWindow } from './sizeWindow.style'

export const media_breakpoint_down = (size) => {
  return `@media (max-width: ${sizeWindow[size]}px)`
}

export const media_breakpoint_up = (size) => {
  return `@media (min-width: ${sizeWindow[size]}px)`
}

export const media_breakpoint_exactly = (size) => {
  return `@media (min-width: ${size}px)`
}

export const media_breakpoint_exactly_down = (size) => {
  return `@media (max-width: ${size}px)`
}

export const media_breakpoint_range = (sizeMin, sizeMax) => {
  return `@media only screen
          and (min-device-width: ${sizeWindow[sizeMin]}px)
          and (max-device-width: ${sizeWindow[sizeMax]}px)
          `
}

export const media_breakpoint_range_exacly = (sizeMin, sizeMax) => {
  return `@media only screen
          and (min-device-width: ${sizeMin}px)
          and (max-device-width: ${sizeMax}px)
          `
}
