import React from 'react';
import PropTypes from 'prop-types';

import Icon from './Icon';

function IconLink(props) {
    const { external, href, icon } = props;

    return (
        <a className="icon-link" target={external ? '_blank' : undefined} href={href}>
            <Icon name={icon} />
        </a>
    );
}

IconLink.propTypes = {
    external: PropTypes.bool,
    href: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};

IconLink.defaultProps = {
    external: false
};

export default IconLink;
