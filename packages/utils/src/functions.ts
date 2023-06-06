import type { Release, Track } from '@kiganix/music-catalog-schema'

export function getInstagramUrl(track: Track): URL {
  return new URL(
    `https://www.instagram.com/reels/audio/${track.dsps.instagram.id}/`
  )
}

export function getTikTokUrl(track: Track): URL | undefined {
  return track.dsps.tiktok
    ? new URL(`https://www.tiktok.com/music/-${track.dsps.tiktok?.id}`)
    : undefined
}

export function getSpotifyUrl(release: Release): URL {
  return new URL(`https://open.spotify.com/album/${release.dsps.spotify.id}`)
}

export function getAppleMusicUrl(release: Release): URL {
  return new URL(`https://music.apple.com/album/${release.dsps.appleMusic.id}`)
}

export function getYouTubeMusicUrl(release: Release): URL {
  return new URL(
    `https://music.youtube.com/playlist?list=${release.dsps.youtube.id}`
  )
}

export function getAmazonCoJpUrl(release: Release): URL {
  return new URL(
    `https://www.amazon.co.jp/dp/${release.dsps.amazon['co.jp'].asin}`
  )
}

export function getLineMusicUrl(release: Release): URL {
  return new URL(
    `https://music.line.me/webapp/album/${release.dsps.lineMusic.id}`
  )
}

export function getQqMusicUrl(release: Release): URL | undefined {
  return release.dsps.qqMusic
    ? new URL(`https://y.qq.com/n/ryqq/albumDetail/${release.dsps.qqMusic.id}`)
    : undefined
}

export function getMelonUrl(release: Release): URL | undefined {
  return release.dsps.melon
    ? new URL(
        `https://www.melon.com/album/detail.htm?albumId=${release.dsps.melon.id}`
      )
    : undefined
}

export function getNeteaseUrl(release: Release): URL | undefined {
  return release.dsps.netEase
    ? new URL(`https://music.163.com/album?id=${release.dsps.netEase.id}`)
    : undefined
}

export function getGoogleKgUrl(value: Release | Track): URL | undefined {
  return value.dsps.google
    ? new URL(
        `https://www.google.com/search?kgmid=${value.dsps.google.kg.id.substring(
          3
        )}`
      )
    : undefined
}

export function getDeezerUrl(release: Release): URL {
  return new URL(`https://www.deezer.com/album/${release.dsps.deezer.id}`)
}

export function getPandoraUrl(release: Release): URL {
  return new URL(`https://www.pandora.com/${release.dsps.pandora.id}`)
}
