import React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const CustomizedButton = styled(Button)`
    border-color: #ffb549;
    color: #ffb549;
    fontweight: 600;
    margin-bottom: 8px;
    :hover {
        color: #fff;
        background-color: #ffb549;
        border-color: #ffb549;
    }
`;

const Answer = (props) => {
    return (
        <div>
            <CustomizedButton variant="outlined" fullWidth={true} onClick={() => props.select(props.content, props.nextId)}>
                {props.content}
            </CustomizedButton>
        </div>
    );
};

export default Answer;
