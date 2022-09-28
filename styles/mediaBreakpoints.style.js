import { sizeWindow } from './sizeWindow.style'

export const media_breakpoint_down = (size) => {
  return `@media (max-width: ${sizeWindow[size]})`
}

export const media_breakpoint_up = (size) => {
  return `@media (min-width: ${sizeWindow[size]})`
}

export const media_breakpoint_exactly = (size) => {
  return `@media (min-width: ${size})`
}

export const media_breakpoint_exactly_down = (size) => {
  return `@media (max-width: ${size})`
}

export const media_breakpoint_range = (sizeMin, sizeMax) => {
  return `@media only screen
          and (min-device-width: ${sizeWindow[sizeMin]})
          and (max-device-width: ${sizeWindow[sizeMax]})
          `
}
