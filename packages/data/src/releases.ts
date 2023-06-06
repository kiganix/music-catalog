import type { Release } from '@kiganix/music-catalog-schema'

import itsd from './releases/itsd'
import mdgv from './releases/mdgv'

export const Releases: Release[] = [...itsd, ...mdgv]
