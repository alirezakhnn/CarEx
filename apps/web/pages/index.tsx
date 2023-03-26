import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function Web() {
  const theme = useTheme();
  console.log(theme.palette);
  return (
    <Typography
      variant='h5'
      color="error.dark"
      className='bg-gray-700 w-[4rem] text-center rounded-xl cursor-pointer hover:bg-gray-600'
      component='p'
    > Main
    </Typography>
  );
}