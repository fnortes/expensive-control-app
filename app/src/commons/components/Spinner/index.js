// @flow
import * as React from 'react'
import { LoaderWrapper, Loader } from './styles'

export default function Spinner({ loading = false }) {
  return loading ? (
    <LoaderWrapper>
      <Loader />
    </LoaderWrapper>
  ) : null
}
