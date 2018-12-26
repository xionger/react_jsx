import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDesplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
    state = {lat: null, errorMessage: ''};

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            err => this.setState({errorMessage: err.message})
        );
    }

    render() {
        if(this.state.errorMessage && !this.state.lat){
            return (
                <div>Error: {this.state.errorMessage}</div>
            );
        }

        if(!this.state.errorMessage && this.state.lat){
            return (
                <SeasonDesplay lat={this.state.lat} />
            );
        }

        return <Spinner message="Loading location ... "/>;

    };

}


ReactDOM.render(<App />, document.querySelector('#root'));