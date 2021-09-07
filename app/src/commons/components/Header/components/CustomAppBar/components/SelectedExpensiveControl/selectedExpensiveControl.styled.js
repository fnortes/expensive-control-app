import styled from 'styled-components'

export const SelectedExpensiveControlWrapper = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.palette.custom.white.light};
  &:hover {
    background-color: ${({ theme }) => theme.palette.custom.white.main};
  }
  margin-right: ${({ theme }) => theme.spacing(2)}px;
  margin-left: 0;
  width: 100%;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    margin-left: ${({ theme }) => theme.spacing(3)}px;
    width: auto;
  }
`
