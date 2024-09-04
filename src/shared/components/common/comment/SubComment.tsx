import React from 'react';
import Typography from '../../ui/typography';
import AvatarProfileUI from '../card/AvatarProfileUI';

export function SubComment() {
    return (
        <div>
            <Typography>{}</Typography>
            <div>
                <AvatarProfileUI />
                <Typography>{}</Typography>
            </div>
        </div>
    );
};

export default SubComment;