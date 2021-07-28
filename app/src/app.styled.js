import styled from 'styled-components'

export const MainWrapper = styled.main`
  padding: ${({ theme }) => theme.spacing(2)}px;
  margin-left: 0;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    margin-left: ${({ theme }) => theme.spacing(7) + 1}px;
  }
  ${({ theme }) => theme.breakpoints.up('md')} {
    margin-left: ${({ theme }) => theme.spacing(9) + 1}px;
  }
`
