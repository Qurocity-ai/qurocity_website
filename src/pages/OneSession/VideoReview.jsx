import React, { useEffect, useState } from "react";
import VideoStyle from "../../pages/OneSession/VedeoReview.module.css";
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';
import { Box } from "@mui/material";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai"; 
function VideoReview() {
    const [teachers, setTeachers] = useState([]);
    const [visibleCount, setVisibleCount] = useState(4); 
    const [isExpanded, setIsExpanded] = useState(false);
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

    // Function to handle "View More/Less" toggle
    const handleToggleView = () => {
        if (isExpanded) {
            setVisibleCount(4); // Show only initial 4 items
        } else {
            setVisibleCount(8); // Show all only 8 items
        }
        setIsExpanded(!isExpanded); // Toggle the expanded state
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
                                        <p><span>Name: </span>{teacher.name}</p>
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

                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <CircularProgress color="secondary" />
                        </Box>


                    )}
                </div>

                {/* View More button */}
                {teachers.length > 4 && (
                    <button
                        className={VideoStyle.viewMoreButton}
                        onClick={handleToggleView}
                    >
                        {isExpanded ? (
                            <>
                                <AiOutlineUp/>
                            </>
                        ) : (
                            <>
                                <AiOutlineDown />
                            </>
                        )}
                    </button>
                )}
            </div>
        </>
    );
}

export default VideoReview;
