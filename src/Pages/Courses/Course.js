import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import CourseSummeryCard from '../Shared/CourseSummeryCard/CourseSummeryCard';

const Course = () => {
    const courses = useLoaderData();
    const [categories, setCategories] = useState([])
    const [catId, setCatId] = useState('01');

    const filterCourses = courses.filter(item => item.category_id === catId)

    useEffect(() => {
        axios.get('https://code-expart-server-azizulhakims.vercel.app/course-categories').then(res => setCategories(res.data))
    }, [])
    // console.log(filterCourses)
    return (
        <div className='container'>
            <div className="row p-4">
                <div className="col-md-3">
                    {
                        categories.map(item => <p key={item.id}>
                            <Button variant='light' onClick={() => setCatId(item.id)}>{item.name}</Button>
                        </p>)
                    }
                </div>
                <div className="col-md-9">
                    <h2>Courses : {filterCourses.length}</h2>
                    {
                        filterCourses.map(item => <CourseSummeryCard key={item._id} data={item} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Course;