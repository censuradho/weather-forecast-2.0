import NextHead from 'next/head'

import { HeadProps } from './types'

export function Head (props: HeadProps) {
  const {
    description,
    title
  } = props

  return (
    <NextHead>
      <meta
        name="description"
        content={description}
      />
      <meta
        property="og:description"
        content={description}
      />
      <meta
        property="twitter:description"
        content={description}
      />
      <title>{title}</title>
    </NextHead>
  )
}
