import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import useSettings from '../hooks/useSettings';

RouterLink.propTypes = {
    color:PropTypes.string,
    to:PropTypes.string,
    children:PropTypes.any
}
export default function RouterLink({color='black', to, children}){
    const {themeMode} = useSettings();
    const isLight = (themeMode === 'light');
    return(
        <Link style={{color:(isLight?color:'white'), textDecoration:'none'}} to = {to}>
            {children}
        </Link>
    )
}