import CharacterActions from '../actions/CharacterActions';
import React from 'react';

class FavoritesRow extends React.Component {
    constructor(props) {
        super(props);
        
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        CharacterActions.openFavorite(this.props.character);
    }

    render() {
        return <div className="favoritesRow" onClick={this.handleClick}>{this.props.character.name}</div>
    }
}

export default FavoritesRow