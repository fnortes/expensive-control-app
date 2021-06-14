// @flow
import * as React from 'react'
import useGlobal from 'commons/hooks/useGlobal'
import { LoaderWrapper, Loader } from './styles'

export default function Spinner({ initialLoading = false }) {
  const {
    state: { loading }
  } = useGlobal()

  return initialLoading || loading ? (
    <LoaderWrapper>
      <Loader />
    </LoaderWrapper>
  ) : null
}
