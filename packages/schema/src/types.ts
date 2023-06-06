export type Isrc = string
export type Track = {
  isrc: Isrc
  titles: {
    root: string[]
  }
  artists: (Artist | string)[]
  dsps: {
    tiktok?: { id: `${number}` }
    instagram: { id: `${number}` }
    google?: GoogleDsp
  }
}

export type Artist = {
  names: {
    root: string[]
    'en-US'?: string[]
  }
  dsps: {
    spotify: { id: string }
  }
}

export type ReleaseType = 'EP' | 'Single'

export type Ris502Like<
  L extends string,
  N extends number
> = `${Uppercase<L>}-${N}`

export type ReleaseIdPrefix = 'ITSD' | 'MDGV'
export type ReleaseId = Ris502Like<ReleaseIdPrefix, number>

export type GoogleKgId = `kg:/${'g' | 'm'}/${string}`
export type GoogleDsp = {
  kg: { id: GoogleKgId }
}

export type Release = {
  id: ReleaseId
  type: ReleaseType
  names: {
    root: string[]
  }
  artists: (Artist | string)[]
  label: Label
  tracks: (Track & { order: number })[]
  dsps: {
    spotify: { id: string }
    appleMusic: { id: `${number}` }
    youtube: { id: `OLA${string}` }
    amazon: {
      'co.jp': { asin: `${Uppercase<string>}` }
    }
    lineMusic: { id: `mb${string}` }
    qqMusic?: { id: `00${string}` }
    melon?: { id: `${number}` }
    netEase?: { id: `${number}` }
    google: GoogleDsp
    deezer: { id: `${number}` }
    pandora: { id: `AL${string}` }
  }
}

export type Label = 'Interspersed Records' | 'meldgroove'
