import QuoteMachine from './Component/QuoteMachine';
import { Grid } from '@mui/material';
import styled from '@emotion/styled';
import React, { Component } from 'react';
import { random } from 'lodash';

const StyledGrid = styled(Grid) `
  display: flex;
  align-items: center;
  height: 100vh;
  background-color: #ffeac7;
`;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      selectedQuoteIndex: null
    };
    this.selectQuoteIndex = this.selectQuoteIndex.bind(this); 
    this.nextQuoteClick = this.nextQuoteClick.bind(this); 
  }

  componentDidMount() {
    fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json')
      .then(data => data.json())
      .then(quotes => this.setState({quotes}, this.nextQuoteClick))
      .catch(error => {
        console.error('Error fetching quotes:', error);
      });
  }

  selectQuoteIndex() {
    if (!this.state.quotes || this.state.quotes.length === 0) {
      return undefined;
    }
    return random(0, this.state.quotes.length - 1);
  }

  get selectedQuote() {
    if (!this.state.quotes.length || !Number.isInteger(this.state.selectedQuoteIndex)) {
      return undefined;
    }
    return this.state.quotes[this.state.selectedQuoteIndex];
  }

  nextQuoteClick() {
    this.setState({selectedQuoteIndex: this.selectQuoteIndex()});
  }

  render() {
    return (
      <StyledGrid justifyContent="center" container>
        <Grid id="quote-box" xs={11} lg={8} item>
          <QuoteMachine selectedQuote={this.selectedQuote} nextQuoteClick={this.nextQuoteClick} />
        </Grid>
      </StyledGrid>
    );
  }

}

export default App;