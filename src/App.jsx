import PropTypes from 'prop-types';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Dashboard from "./pages/Dashboard";
import Error404 from "./pages/auth/Error404";
import Profile from "./components/Profile";

// Layout components
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import RegisterTest from './components/RegisterTest';

// New components
import CoursesList from './components/courses/CoursesList';
import CoursesAdd from './components/courses/CoursesAdd';
import CoursesDelete from './components/courses/CoursesDelete';

// ProtectedLayout component
const ProtectedLayout = ({ children }) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex-1 overflow-y-auto p-4">
          {children}
        </div>
      </div>
    </div>
  );
};

// Adding prop types validation
ProtectedLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={
          <ProtectedLayout>
            <Dashboard />
          </ProtectedLayout>
        } />
        <Route path="/RegisterTest" element={
          <ProtectedLayout>
            <RegisterTest />
          </ProtectedLayout>
        } />
        <Route path="/profile" element={
          <ProtectedLayout>
            <Profile />
          </ProtectedLayout>
        } />
        {/* New routes for the courses */}
        <Route path="/courseslist" element={
          <ProtectedLayout>
            <CoursesList />
          </ProtectedLayout>
        } />
        <Route path="./components/courses/index.jsx" element={
          <ProtectedLayout>
            <CoursesAdd />
          </ProtectedLayout>
        } />
        <Route path="./components/courses/index.jsx" element={
          <ProtectedLayout>
            <CoursesDelete />
          </ProtectedLayout>
        } />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
