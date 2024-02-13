import React from 'react'

const LmsBar = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        setProgress(50);
    }, []);
  
    return (
        <Container className="my-2 py-2">
            <Row className="justify-content-between align-items-center">
                <Col>
                    <h1 className="h3 font-weight-bold">Softskill: İletişim Becerileri</h1>
                    <p className="text-muted">30 Haziran 2024 tarihine kadar bitebilirsin</p>
                </Col>
                <Col className="d-flex align-items-center justify-content-end">
                    <Button variant="link" className="text-secondary">
                        <FontAwesomeIcon icon={faHeart} />
                    </Button>
                    <span className="text-secondary mx-2">189</span>
                    <Button variant="link" className="text-secondary">
                        <FontAwesomeIcon icon={faBookmark} />
                    </Button>
                </Col>
            </Row>
            <ProgressBar now={progress} className="my-2" />
        </Container>
    );
}
export default LmsBar