import { Typography } from '@mui/material'
import { number } from 'prop-types'

export interface TitleProps {
  label?: string
  fontSize: number
}

const Title = ({ label, fontSize }: TitleProps) => {
  return (
    <Typography variant="h1" fontSize={fontSize}>
      {label ? label : 'To Do App'}
    </Typography>
  )
}

export default Title
