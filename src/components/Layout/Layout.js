import './Layout.scss';
import './Themes.scss';
import Sidebar from '../Sidebar/Sidebar.js';
import { Routes, Route } from 'react-router-dom';
import Home from '../Home/Home'
import Works from '../Works/Works'
import Posts from '../Posts/Posts'
import Contact from '../Contact/Contact'

export default function Layout() {
    return (
        <div className="container">
            <Sidebar />
            <div className="page dark">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/works" element={<Works />} />
                    <Route path="/posts" element={<Posts />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </div>
    );
}