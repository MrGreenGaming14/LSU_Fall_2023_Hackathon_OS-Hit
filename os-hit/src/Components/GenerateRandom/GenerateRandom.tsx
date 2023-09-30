import { Button } from '@mui/material'
import React, { Component } from 'react'


interface State {
  data: []; // Replace 'any' with the actual type of your API response data
  isLoaded: boolean;
}

class GenerateRandom extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      data: [],
      isLoaded: false,
    };
  }

  fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts'); // Replace with your API endpoint

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      this.setState({ 
        data: data,
        isLoaded: true,
       });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  render() {
    const { data } = this.state;

    return (
      <div>
        <h1>Data Fetching Component</h1>
        <button onClick={this.fetchData}>Fetch Data</button>
        {data && (
          <div>
            <h2>Fetched Data:</h2>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
        )}
      </div>
    );
  }
}
export default GenerateRandom