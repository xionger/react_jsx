import React from 'react';

import SearchBar from './SearchBar';
import Unsplash from '../api/Unsplash';

class App extends React.Component {
    state = {images: []};

    onSearchSubmit = async (term) => {
        const response = await Unsplash.get('/search/photos', {
            params: {query: term}
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