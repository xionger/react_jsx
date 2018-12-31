import React from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';

class App extends React.Component {
    state = {images: []};

    onSearchSubmit = async (term) => {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: {query: term},
            headers: {
                //Authorization: 'Client-ID ACCESS_KEY_HERE'
                
            }
        });
        
        this.setState({images: response.data.results});
    }

    render (){
        return (
            <div className="ui container">
                <SearchBar onSubmitSearch={this.onSearchSubmit}/>
                Found: {this.state.images.length} images
            </div>
        );
    }
}

export default App;