import React from 'react';

 class GifSearch extends React.Component {
  state = {
    query: ''
  }

  handleChange = (event) => {
    this.setState({
      query: event.target.value
    });
  }

  handleSubmit = (event) => {    
    event.preventDefault();
    this.props.fetchGifs(this.state.query);   
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
          <input
            type="text"
            value={this.state.query}
            placeholder="Search Gifs Here.."
            onChange={this.handleChange}
          />
          <input type="submit" value="Search" />          
        </form>        
      </div>
    );
  }
}

export default GifSearch;
