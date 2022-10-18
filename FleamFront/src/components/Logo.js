import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default function Logo({ disabledLink = false, sx }) {

  // Logo proportions/size/shadow
  const logo = (
    <Box 
      sx={{ height: 60,  cursor:'pointer', ...sx}}
      src = "/assets/logo.png"  
      component="img" />
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <RouterLink to="/" style={{ height: '100%', filter: 'drop-shadow(5px 5px 2px rgba(0,0,0,0.3))' }}>{logo}</RouterLink>;
}
