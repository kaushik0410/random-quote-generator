import React from 'react';
import {Typography} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import {IconButton} from '@mui/material';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import styled from '@emotion/styled';

const TemplateCard = styled(Card) `
    background-color: #fa6565;
    border: 1px solid red;
    border-radius: 10px;
    box-shadow: 0 5px 10px red;
`;

const StyledButton = styled(Button) `
    background-color: #000;
    color: white;
    &:hover {
        background-color: #aca4a4;
        color: black;  
    }
`;

const QuoteMachine = (props) => (
    <TemplateCard>
        <CardContent>
            {props.selectedQuote ? (
                <Typography id="text">
                    <strong>{props.selectedQuote.quote}</strong> - <span id="author">{props.selectedQuote.author}</span>
                </Typography>
            ) : null
            } 
        </CardContent>
        <CardActions>
            <StyledButton id="new-quote" size="small" onClick={props.nextQuoteClick} >Next Quote</StyledButton>
            <IconButton id="tweet-quote" target="_blank" href={encodeURI('https://twitter.com/intent/tweet?text=${props.selectedQuote.quote}&hashtags=thewebdevcoach')  }>
                <FontAwesomeIcon icon={faTwitter} size='md'></FontAwesomeIcon>
            </IconButton>
        </CardActions>
    </TemplateCard>
)

export default QuoteMachine;