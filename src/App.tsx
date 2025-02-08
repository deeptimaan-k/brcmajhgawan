import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { GalleryPage } from './pages/GalleryPage';
import { NoticeBoardPage } from './pages/NoticeBoardPage';
import { ContactPage } from './pages/ContactPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { ExamInfoPage } from './pages/ExamInfoPage';
import { ResultsPage } from './pages/ResultsPage';
import { TendersPage } from './pages/TendersPage';
import { HolidaysPage } from './pages/HolidaysPage';
import { DashboardLayout } from './pages/dashboard/DashboardLayout';
import { DashboardHome } from './pages/dashboard/DashboardHome';
import { NewsEventsManager } from './pages/dashboard/NewsEventsManager';
import { ExamsManager } from './pages/dashboard/ExamsManager';
import { ResultsManager } from './pages/dashboard/ResultsManager';
import { HolidayManager } from './pages/dashboard/HolidayManager';
import { GalleryManager } from './pages/dashboard/GalleryManager';
import { SchoolRequests } from './pages/dashboard/SchoolRequests';
import { NoticeManager } from './pages/dashboard/NoticeManager';
import { SettingsPage } from './pages/dashboard/SettingsPage';
import { SchoolDashboardLayout } from './pages/school/SchoolDashboardLayout';
import { SchoolDashboardHome } from './pages/school/SchoolDashboardHome';
import { SchoolProfile } from './pages/school/SchoolProfile';
import { SchoolStudents } from './pages/school/SchoolStudents';
import { SchoolTeachers } from './pages/school/SchoolTeachers';
import { SchoolAttendance } from './pages/school/SchoolAttendance';
import { SchoolAcademic } from './pages/school/SchoolAcademic';
import { SchoolReports } from './pages/school/SchoolReports';
import { SchoolSettings } from './pages/school/SchoolSettings';
import { SchoolNotifications } from './pages/school/SchoolNotifications';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* BRC Dashboard Routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="news-events" element={<NewsEventsManager />} />
          <Route path="notices" element={<NoticeManager />} />
          <Route path="exams" element={<ExamsManager />} />
          <Route path="results" element={<ResultsManager />} />
          <Route path="holidays" element={<HolidayManager />} />
          <Route path="gallery" element={<GalleryManager />} />
          <Route path="schools" element={<SchoolRequests />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>

        {/* School Dashboard Routes */}
        <Route path="/school-dashboard" element={<SchoolDashboardLayout />}>
          <Route index element={<SchoolDashboardHome />} />
          <Route path="profile" element={<SchoolProfile />} />
          <Route path="students" element={<SchoolStudents />} />
          <Route path="teachers" element={<SchoolTeachers />} />
          <Route path="attendance" element={<SchoolAttendance />} />
          <Route path="academic" element={<SchoolAcademic />} />
          <Route path="reports" element={<SchoolReports />} />
          <Route path="settings" element={<SchoolSettings />} />
          <Route path="notifications" element={<SchoolNotifications />} />
        </Route>

        {/* Public Routes */}
        <Route
          path="/*"
          element={
            <div className="min-h-screen bg-gray-50 flex flex-col">
              <Header />
              <Navigation />
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/gallery" element={<GalleryPage />} />
                  <Route path="/notice-board" element={<NoticeBoardPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/register" element={<RegisterPage />} />
                  <Route path="/exam-info" element={<ExamInfoPage />} />
                  <Route path="/results" element={<ResultsPage />} />
                  <Route path="/tenders" element={<TendersPage />} />
                  <Route path="/holidays" element={<HolidaysPage />} />
                </Routes>
              </main>
              <Footer />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}