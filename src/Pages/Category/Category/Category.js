import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import AllCourses from '../../Courses/AllCourses';
import CourseSummeryCard from '../../Shared/CourseSummeryCard/CourseSummeryCard';

const Category = () => {
    const allCoursesData = useLoaderData();

    return (
        <>
            <h2>All Courses: {allCoursesData.length}</h2>

            {/* {
                AllCoursesData.map(courses => <CourseSummeryCard
                    key={courses._id}
                    courses={courses}

                >

                </CourseSummeryCard>)
            } */}
        </>
    );
};

export default Category;