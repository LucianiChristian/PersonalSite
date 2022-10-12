import './Layout.scss';
import './Themes.scss';
import Sidebar from '../Sidebar/Sidebar.js';
import { Outlet } from 'react-router-dom';

export default function Layout() {
    return (
        <div className="container">
            <Sidebar />
            <div className="page dark">
                <Outlet />
            </div>
        </div>
    );
}