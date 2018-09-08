import React from 'react'

import CodepenIco from '../../../assets/svg/social_icons/codepen_icon.svg';
import FacebookIco from '../../../assets/svg/social_icons/facebook_icon.svg';
import GitIco from '../../../assets/svg/social_icons/git_social.svg';
import LinkedinIco from '../../../assets/svg/social_icons/linkedin_icon.svg';

const socialIcon = (props) => {
    const icon = {
        codepen: { el: <CodepenIco />, title: 'Codepen' },
        facebook: { el: <FacebookIco />, title: 'Facebook' },
        github: { el: <GitIco />, title: 'GitHub' },
        linkedin: { el: <LinkedinIco />, title: 'LinkedIn' }
    }

    return icon[props.name].el;
}

export default socialIcon;