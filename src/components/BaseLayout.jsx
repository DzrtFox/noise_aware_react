import { Container, Row, Col } from 'reactstrap';
import CharacterCard from './CharacterCard';
import Favorites from './Favorites';

const BaseLayout = (props) => {
    return (
        <Container className="baseLayout" fluid={true}>
            <Row>
                <Col xs="4">
                    <CharacterCard />
                </Col>

                <Col xs="3">
                    <Favorites />
                </Col>
            </Row>
        </Container>
    )
}

export default BaseLayout