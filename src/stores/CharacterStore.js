import Reflux from 'reflux';
import CharacterActions from '../actions/CharacterActions';

class CharacterStore extends Reflux.Store {
    constructor() {
        super();

        this.state = {
            character: null,
            characterCount: 0,
            favorites: []
        }

        this.listenables = CharacterActions;
        CharacterActions.getCharacters();
    }

    getCharactersCompleted(characterCount) {
        this.setState({
            characterCount: characterCount
        });

        if (!this.state.character) {
            CharacterActions.getRandomCharacter(this.state.characterCount);
        }
    }

    getRandomCharacterCompleted(character) {
        if (!character) {
            return;
        }
        
        this.processCharacter(character);

        this.setState({
            character: character
        });
    }

    processCharacter(character) {
        if (!character) {
            return;
        }

        if (!character.description) {
            character.description = "Bio not available";
        }

        const imagePath = character.thumbnail.path;
        const extension = character.thumbnail.extension;
        const fullImagePath = imagePath + "/landscape_amazing." + extension;
        
        character.imagePath = fullImagePath;
    }

    addToFavorites(character) {
        const favorites = this.state.favorites;
        const newFavorites = [];

        // Make sure the same character doesn't get added twice
        favorites.forEach(char => {
            if (char.id !== character.id) {
                newFavorites.push(char);
            }
        });

        newFavorites.push(character);

        // Sort list by character name
        newFavorites.sort((a, b) => {
            if (a.name < b.name) {
                return -1;
            }

            if (a.name > b.name) {
                return 1;
            }

            return 0;
        });

        this.setState({
            favorites: newFavorites
        });
    }

    openFavorite(character) {
        this.setState({
            character: character
        });
    }
}

export default CharacterStore