import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../configs/routes';

interface Props { }

const HomePage = (props: Props) => {
    return (
        <div>
            <div className='d-flex'>
                <Link to={ROUTES.login}>LOGIN</Link>
            </div>
            <div><Link to={ROUTES.profile}>PROFILE</Link></div>
            <div><Link to={ROUTES.todoList}>TODO</Link></div>
        </div>
    )
};

export default HomePage;
