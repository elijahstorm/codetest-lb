export type ItemContainer<T> = {
  items: T[]
}

export type Screenshot = {
  status: string
  mode: string
  timeOfCapture: string
  filekeyRaw: string
  filekeyStyled: string
  filesize: string | null
}

export type Edition = {
  id: string
  name: string
  description?: string
}

export type Feature = {
  id: string
  name: string
  description: string
  URL: string
  selector: string
  takeScreenshot: boolean
  filename: string
  screenshots: Screenshot[]
  FeatureEditions: ItemContainer<FeatureEdition>
}

export type FeatureEdition = {
  edition: Edition
  limit: unknown | null
  limitType: unknown | null
  constraint: unknown | null
  constraintType: unknown | null
  speed: unknown | null
  speedType: unknown | null
}

export type DataFormat = {
  id: string
  name: string
  tagline: string
  description: string | null
  URL: string
  modeDesktopLight: boolean
  modeDesktopDark: boolean
  modeMobileLight: boolean
  modeMobileDark: boolean
  editions: ItemContainer<Edition>
  features: ItemContainer<Feature>
}
