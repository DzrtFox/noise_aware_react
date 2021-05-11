import axios from 'axios';

// Normally this would not go here, but just for simplicity...
const apiKey = "d905eb3c811a2ee0db1941752096bdaa";
const apiUrl = "https://gateway.marvel.com:443/v1/public/characters";

const DataService = {
    async getCharacters() {
        let data = await this.sendRequest();
        let characterCount = 0;

        if (data && data.data && data.data.data && data.data.data.total) {
            characterCount = data.data.data.total;
        }

        return characterCount;
    },

    async getRandomCharacter(characterCount) {
        const randomOffset = Math.floor(Math.random() * (characterCount + 1));

        let data = await this.sendRequest({
            limit: 1,
            offset: randomOffset
        });

        let character = null;

        if (data && data.data && data.data.data && data.data.data.results) {
            character = data.data.data.results[0];
        }

        return character;
    },

    sendRequest(additionalParams) {
        if (!additionalParams) {
            additionalParams = {};
        }

        additionalParams.apikey = apiKey;

        return new Promise((resolve, reject) => {
            axios.get(apiUrl, {
                params: additionalParams
            })
            .then(data => {
                resolve(data);
            })
            .catch((err) => {
                reject(err)
            });
        });
    }
}

export default DataService