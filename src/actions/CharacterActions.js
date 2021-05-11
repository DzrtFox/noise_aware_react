import DataService from '../misc/DataService';
import Reflux from 'reflux';

const CharacterActions = Reflux.createActions({
    getCharacters: {
        asyncResult: true,
        sync: false
    },
    getRandomCharacter: {
        asyncResult: true,
        sync: false
    },
    addToFavorites: {},
    openFavorite: {}
});

CharacterActions.getCharacters.listen(function() {
    DataService.getCharacters()
        .then(this.completed)
        .catch(this.failed);
});

CharacterActions.getRandomCharacter.listen(function(characterCount) {
    DataService.getRandomCharacter(characterCount)
        .then(this.completed)
        .catch(this.failed)
});

export default CharacterActions