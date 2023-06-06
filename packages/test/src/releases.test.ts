import { Releases } from '@kiganix/music-catalog'

function isString(value: unknown): value is string {
  return typeof value === 'string'
}

describe('`id`', () => {
  const ids = Releases.map((itr) => itr.id)

  test('must be unique', () => {
    expect(ids.length).toBe(
      ids.filter((id, idx) => ids.indexOf(id) === idx).length
    )
  })

  test('suffix must be 4 digits and filled with zeros', () => {
    const subIds = ids.map((id) => id.substring(5))
    subIds
      .map((id) => Number(id))
      .map((id) => `${id}`.padStart(4, '0'))
      .forEach((id, idx) => expect(id).toBe(subIds[idx]))
  })
})

describe('`isrc`', () => {
  const isrcs = Releases.flatMap((itr) => itr.tracks).map((itr) => itr.isrc)

  test('must be unique (currently)', () => {
    expect(isrcs.length).toBe(
      isrcs.filter((isrc, idx) => isrcs.indexOf(isrc) === idx).length
    )
  })

  test('must be uppercase', () => {
    isrcs
      .map((isrc) => isrc.toUpperCase())
      .forEach((isrc, idx) => expect(isrc).toBe(isrcs[idx]))
  })

  test('must be 12 digits', () => {
    const lengthes = isrcs.map((isrc) => isrc.length)
    expect(
      lengthes.filter(
        (length, idx, lengthes) => lengthes.indexOf(length) === idx
      ).length
    ).toBe(1)
    expect(lengthes[0]).toBe(12)
  })
})

describe('ASIN of Amazon.co.jp', () => {
  const asins = Releases.map((itr) => itr.dsps.amazon['co.jp'].asin)

  test('must be uppercase', () => {
    asins
      .map((asin) => asin.toUpperCase())
      .forEach((asin, idx) => expect(asin).toBe(asins[idx]))
  })

  test('must be unique (currently)', () => {
    expect(asins.length).toBe(
      asins.filter((asin, idx) => asins.indexOf(asin) === idx).length
    )
  })

  test('must be match the valid pattern', () => {
    asins.forEach((asin) => expect(asin).toMatch(/^[A-Z0-9]{10}$/))
  })
})

describe('id of Apple Music', () => {
  const ids = Releases.map((itr) => itr.dsps.appleMusic.id)

  test('must be unique (currently)', () => {
    expect(ids.length).toBe(
      ids.filter((id, idx) => ids.indexOf(id) === idx).length
    )
  })

  test('must be match the valid pattern', () => {
    ids.forEach((id) => expect(id).toMatch(/^\d+$/))
  })
})

describe('id of YouTube', () => {
  const ids = Releases.map((itr) => itr.dsps.youtube.id)

  test('must be unique (currently)', () => {
    expect(ids.length).toBe(
      ids.filter((id, idx) => ids.indexOf(id) === idx).length
    )
  })

  test('must be match the valid pattern', () => {
    ids.forEach((id) => expect(id).toMatch(/^OLA[a-zA-Z0-9\-\_]+$/))
  })
})

describe('id of Spotify', () => {
  const idPattern = /^[a-zA-Z0-9]+$/

  describe('Release', () => {
    const ids = [...Releases.map((itr) => itr.dsps.spotify.id)]

    test('must be unique (currently)', () => {
      expect(ids.length).toBe(
        ids.filter((id, idx) => ids.indexOf(id) === idx).length
      )
    })

    test('must be match the valid pattern', () => {
      ids.forEach((id) => expect(id).toMatch(idPattern))
    })
  })

  describe('Artist', () => {
    const ids = Releases.flatMap((itr) => itr.artists)
      .map((itr) => (isString(itr) ? undefined : itr.dsps.spotify.id))
      .filter((itr): itr is string => isString(itr))
      .filter((id, idx, ids) => ids.indexOf(id) === idx)

    test('must be match the valid pattern', () => {
      ids.forEach((id) => expect(id).toMatch(idPattern))
    })
  })
})

describe('`$.names.root`', () => {
  const rootNameFragments = Releases.map((itr) => itr.names.root)

  test('must be unique (currently)', () => {
    expect(rootNameFragments.length).toBe(
      rootNameFragments.filter(
        (fragments, idx) => rootNameFragments.indexOf(fragments) === idx
      ).length
    )
  })
})

describe('`$.tracks.titles.root`', () => {
  const rootNameFragments = Releases.flatMap((itr) => itr.tracks).map(
    (itr) => itr.titles.root
  )

  test('must be unique (currently)', () => {
    expect(rootNameFragments.length).toBe(
      rootNameFragments.filter(
        (fragments, idx) => rootNameFragments.indexOf(fragments) === idx
      ).length
    )
  })
})

describe('$.tracks.order', () => {
  test('must be range sequence', () => {
    const sortedTrackOrders = Releases.map((itr) =>
      [...itr.tracks].sort((a, b) => a.order - b.order)
    ).map((itr) => itr.map((itr) => itr.order))

    sortedTrackOrders.forEach((orders) => {
      expect(orders[0]).toBe(0)
      for (let i = 0; i < orders.length; i++) {
        expect(orders[i]).toBe(i)
      }
    })
  })
})
