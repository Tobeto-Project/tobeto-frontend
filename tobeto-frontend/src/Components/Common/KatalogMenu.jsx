import ListGroup from 'react-bootstrap/ListGroup';
import "../../Styles/CommonStyles/KatalogMenuStyle.css";


function KatalogMenu() {
    return (
        <ListGroup className="dark-list-group">
        <ListGroup.Item disabled className="list-group-item">Cras justo odio</ListGroup.Item>
        <ListGroup.Item className="list-group-item">Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item className="list-group-item">Morbi leo risus</ListGroup.Item>
        <ListGroup.Item className="list-group-item">Porta ac consectetur ac</ListGroup.Item>
      </ListGroup>
    );
  }

export default KatalogMenu