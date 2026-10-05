"use client"

import * as React from "react"

export type LycorisLink = { label: string; href?: string }

export type LycorisSpecimenProps = {
  name?: string
  studio?: string
  year?: string
  description?: string
  specs?: string[]
  tagline?: { text: string; small?: boolean }[]
  multilingual?: string
  ligatureWord?: string
  links?: [LycorisLink, LycorisLink]
  fontFamily?: string
  fontHref?: string | null
  ink?: string
  bone?: string
  crimson?: string
  height?: string
  sceneScroll?: number
  florets?: number
  seed?: number
  alive?: boolean
  className?: string
}

export { default } from "../../../components/ui/lycoris-specimen"
