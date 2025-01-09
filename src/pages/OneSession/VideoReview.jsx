import React, { useEffect, useState } from "react";
import VideoStyle from "../../pages/OneSession/VedeoReview.module.css";
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';
function VideoReview() {
    const [teachers, setTeachers] = useState([]);
    const [visibleCount, setVisibleCount] = useState(4); // Initial visible items count

    const url = `https://curiotory-admin-backend-s4zy.onrender.com/filterteachers`;

    const fetchTeachers = () => {
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setTeachers(data.teachers || []);
            })
            .catch((error) => console.error("Error in Fetching Data:", error));
    };

    useEffect(() => {
        fetchTeachers();
    }, []);

    // Function to handle "View More" click
    const handleViewMore = () => {
        setVisibleCount((prevCount) => prevCount + 4); // Show 4 more items on each click
    };

    return (
        <>
        <div className={VideoStyle.main}>
            <h3>Meet our language tutor!</h3>
            <div className={VideoStyle.cardsContainer}>
                {teachers.length > 0 ? (
                    teachers.slice(0, visibleCount).map((teacher, index) => ( // Show only visible items
                        <div key={teacher.id} className={VideoStyle.card}>
                            <div className={VideoStyle.cardContent}>
                                <div className={VideoStyle.left}>
                                    <div className={VideoStyle.imgContainer}>
                                        <img src={teacher.imgurl} alt="Teacher" />
                                    </div>
                                    <p><span>Language:</span> {teacher.language}</p>
                                    <p><span>Proficiency level:</span> {teacher.proflevel}</p>
                                    <p><span>No of students taught till date:</span> {teacher.noStud}</p>
                                    <p><span>Experience:</span> {teacher.experience}</p>
                                    <p><span>No of hours taught till date: </span>{teacher.noHours}</p>
                                </div>
                                <div className={VideoStyle.right}>
                                    <iframe
                                        src={teacher.ytvideo}
                                        title="Teacher Video"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                            <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
                                <CircularProgress color="secondary" />
                                <CircularProgress color="success" />
                                <CircularProgress color="inherit" />
                            </Stack>
                )}
            </div>

            {/* View More button */}
            {visibleCount < teachers.length && ( // Show button only if there are more items to display
                <button className={VideoStyle.viewMoreButton} onClick={handleViewMore}>
                    View More
                </button>
            )}
        </div>
        </>
    );
}

export default VideoReview;
