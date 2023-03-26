import Button from '@mui/material/Button';
export const BtnHead = ({ color, variant, value, className }: any) => {
  return <Button
    className={className}
    variant={variant}
    color={color}>
    {value}
  </Button>;
};
