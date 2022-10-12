import './Layout.scss';
import Sidebar from '../Sidebar/Sidebar.js';
import { Outlet } from 'react-router-dom';

export default function Layout() {
    return (
        <div className="container">
            <Sidebar />
            <div className="page">
                <Outlet />
            </div>
        </div>
    );
}