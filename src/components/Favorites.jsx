import CharacterStore from '../stores/CharacterStore';
import FavoritesRow from './FavoritesRow';
import Reflux from 'reflux';

class Favorites extends Reflux.Component {
    constructor(props) {
        super(props);

        this.store = CharacterStore;
    }

    getFavoritesList() {
        let favorites = [];

        if (this.state.favorites.length > 0) {
            this.state.favorites.forEach(favorite => {
                favorites.push(<FavoritesRow key={favorite.id} character={favorite} />);
            });
        } else {
            favorites.push(<div key="noneAdded">No Favorites added</div>);
        }

        return favorites;
    }

    render() {
        return <div className="favorites">
            <h4>Favorite Characters</h4>                   

            <div className="favoritesList">
                {this.getFavoritesList()}
            </div>
        </div>      
    }
}

export default Favorites