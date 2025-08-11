
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Compponent/Header';
import Sidebar from './Compponent/Sidebar';
import Student from './Compponent/Student';
import NavTabs from './Compponent/NavTab';
import StudentInfoHeader from './Compponent/StudentInfoHeader';
import Class7Component from './Compponent/Class7Component'; // Import the new component

function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="app-header"><Header /></header>
        <div className="content-wrapper">
          <aside className="sidebar"><Sidebar /></aside>
          <main className="main-content">
            <div className="student-section">
              <Student />
            </div>
            <div className="additional-section">
              <div className="left-section">
                <div className="navtabs-container">
                  <NavTabs />
                </div>
                <div className="nav-content">
                  <Routes>
                    {/* <Route path="/" element={<div className="tab-pane fade show active"><Student /></div>} /> Default route */}
                    <Route path="/student-profile/*" element={<div className="tab-pane fade show active"><StudentInfoHeader /></div>}>
                      <Route path="class-7" element={<Class7Component />} />
                      <Route path="class-8" element={<div className="tab-pane fade show active">Class 8 Content</div>} />
                      <Route path="class-9" element={<div className="tab-pane fade show active">Class 9 Content</div>} />
                      {/* <Route path="more" element={<div className="tab-pane fade show active">More Content</div>} /> */}
                    </Route>
                    
                    <Route path="/payments" element={<div className="tab-pane fade show active">Payments Content</div>} />
                    <Route path="/transport" element={<div className="tab-pane fade show active">Transport Content</div>} />
                    <Route path="/academics" element={<div className="tab-pane fade show active">Academics Content</div>} />
                    <Route path="/alerts" element={<div className="tab-pane fade show active">Alerts Content</div>} />
                    <Route path="/history" element={<div className="tab-pane fade show active">History Content</div>} />
                    <Route path="/room-allotment" element={<div className="tab-pane fade show active">Room Allotment Content</div>} />
                    <Route path="/issue-forms" element={<div className="tab-pane fade show active">Issue Forms Content</div>} />
                    <Route path="/certificates" element={<div className="tab-pane fade show active">Certificates Content</div>} />
                  </Routes>
                </div>
              </div>
              <div className="right-section"></div>
            </div>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
