import { Button, Card, CardImg, CardText, CardBody, CardTitle, Row, Col } from 'reactstrap';
import CharacterActions from '../actions/CharacterActions';
import CharacterStore from '../stores/CharacterStore';
import Reflux from 'reflux';

class CharacterCard extends Reflux.Component {
    constructor(props) {
        super(props);

        this.store = CharacterStore;

        this.addToFavorites = this.addToFavorites.bind(this);
        this.getNewCharacter = this.getNewCharacter.bind(this);
    }

    getNewCharacter() {
        CharacterActions.getRandomCharacter(this.state.characterCount);
    }

    addToFavorites() {
        CharacterActions.addToFavorites(this.state.character);
    }

    render() {
        const character = this.state.character;

        if (!character) {
            return <div>Loading...</div>;
        }

        return (
            <div className="characterCard">
                <Card>
                    <CardImg top width="100%" src={character.imagePath} alt="Character Image" />
                    
                    <CardBody>
                        <CardTitle tag="h4">{character.name}</CardTitle>
                        <CardText className="characterBio">{character.description}</CardText>
                        
                        <Row>
                            <Col>                        
                                <Button color="success" className="addToFavorites" onClick={this.addToFavorites}>Add To Favorites</Button>
                            </Col>
                            
                            <Col>
                                <Button color="primary" className="getNextCharacter" onClick={this.getNewCharacter}>Get Next Character</Button>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default CharacterCard