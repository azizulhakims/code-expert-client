import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LeftSiteNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/course-categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])

    return (
        <Container>

            <div>
                <h4>Languages List :{categories.length}</h4>
                {
                    categories.map(category => <p key={category.id}>
                        <Link to={`/category/${category.id}`} >{category.name}</Link>
                    </p>)
                }
            </div>
        </Container>
    );
};

export default LeftSiteNav; 