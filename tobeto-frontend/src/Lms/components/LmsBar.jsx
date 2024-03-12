// LmsBar.jsx

import { faBookmark, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Row, Col, Button, Container, ProgressBar } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { connect } from 'react-redux';


const LmsBar = ({ lessonName, educationTitle }) => {
    const [progress, setProgress] = useState(0);
    const [likeToast, setLikeToast] = useState(false);
    const [bookmarkToast, setBookmarkToast] = useState(false);
    const [likeIconColor, setLikeIconColor] = useState('text-secondary');
    const [bookmarkIconColor, setBookmarkIconColor] = useState('text-secondary');
    const [loading, setLoading] = useState(true);

    console.log("Received Education Title in LmsBar:", educationTitle);


    useEffect(() => {
        setProgress(50);
        setLoading(true);
    }, []);




    // LocalStorage'dan kayıtlı lessonName'leri al
    const likedLessons = JSON.parse(localStorage.getItem('likedLessons')) || [];
    const bookmarkedLessons = JSON.parse(localStorage.getItem('bookmarkedLessons')) || [];

    useEffect(() => {
        // LessonName değiştiğinde, like ve bookmark durumlarını sıfırla
        setLikeToast(likedLessons.includes(lessonName));
        setBookmarkToast(bookmarkedLessons.includes(lessonName));
        setLikeIconColor(likedLessons.includes(lessonName) ? 'text-danger' : 'text-secondary');
        setBookmarkIconColor(bookmarkedLessons.includes(lessonName) ? 'text-danger' : 'text-secondary');
    }, [lessonName, likedLessons, bookmarkedLessons]);

    const handleLikeClick = () => {
        const updatedLikedLessons = likedLessons.includes(lessonName)
            ? likedLessons.filter((item) => item !== lessonName)
            : [...likedLessons, lessonName];

        localStorage.setItem('likedLessons', JSON.stringify(updatedLikedLessons));

        setLikeToast(!likeToast);
        setLikeIconColor(likeToast ? 'text-secondary' : 'text-danger');

        // Bildirim göster
        toast.success(`${likeToast ? 'Beğeni kaldırıldı' : 'Beğenilere eklendi'} - ${lessonName}`);
    };

    const handleBookmarkClick = () => {
        const updatedBookmarkedLessons = bookmarkedLessons.includes(lessonName)
            ? bookmarkedLessons.filter((item) => item !== lessonName)
            : [...bookmarkedLessons, lessonName];

        localStorage.setItem('bookmarkedLessons', JSON.stringify(updatedBookmarkedLessons));

        setBookmarkToast(!bookmarkToast);
        setBookmarkIconColor(bookmarkToast ? 'text-secondary' : 'text-danger');

        // Bildirim göster
        toast.success(`${bookmarkToast ? 'Favori kaldırıldı' : 'Favorilere eklendi'} - ${lessonName}`);
    };

    return (
        <Container className="my-2 py-2">
            <Row className="align-items-center">
                <Col xs={2} md={1}>
                    <img src="https://lms.tobeto.com/tobeto/eep/common_show_picture_cached.aspx?pQS=eaAjNZ0uaOEJMI14cKs7Ww%3d%3d" alt="Resim" className="img-fluid" />
                </Col>
                <Col xs={6} md={8}>
                    <h1 className="h3 font-weight-bold">{educationTitle}</h1>
                    <p className="text-muted">30 Haziran 2024 tarihine kadar bitebilirsin</p>
                </Col>
                <Col xs={4} md={3} className="d-flex align-items-center justify-content-end">
                    <Button
                        variant="link"
                        className={` ${likeIconColor}`}
                        onClick={handleLikeClick}
                    >
                        <FontAwesomeIcon icon={faHeart} size="3x" />
                    </Button>
                    <span className="text-secondary mx-2">189</span>
                    <Button
                        variant="link"
                        className={` ${bookmarkIconColor}`}
                        onClick={handleBookmarkClick}
                    >
                        <FontAwesomeIcon icon={faBookmark} size="3x" />
                    </Button>
                </Col>
            </Row>
            <ProgressBar now={progress} className="my-2" />
        </Container>
    );
}

export default LmsBar;
