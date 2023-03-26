import { Button, Typography } from '@mui/material';
import { MyTheme } from 'ui';

const { palette: { primary: { light, dark, main } } } = MyTheme;

export default function Web() {
  return (
    <>
      <Button sx={{ color: main }} variant='contained'>Main</Button>
    </>
  );
}