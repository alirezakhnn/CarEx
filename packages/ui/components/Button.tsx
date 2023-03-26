import Button from '@mui/material/Button';
export const BtnHead = ({ color, variant, children, className, href, sx }: any) => {
  return <Button
    className={className}
    sx={sx}
    variant={variant}
    href={href}
    color={color}>
    {children}
  </Button>;
};
