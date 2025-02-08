import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components

// Pages
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ServicesPage from './Pages/ServicesPage';
import ContactPage from './Pages/ContactPage';
import CategoriesPage from './Pages/CategoriesPage';
import LoginPage  from './Pages/LoginPage';
import RegistrationPage from './Pages/RegistrationPage';

// // Admin Layout and Pages
// import AdminLayout from './admin/components/layout/AdminLayout';
// import AdminDashboard from './admin/Pages/Dashboard';
// import BusinessManagement from './admin/Pages/BusinessManagement';
// import ApprovalManagement from './admin/Pages/ApprovalManagement';
// import TransactionManagement from './admin/Pages/TransactionManagement';
// import ReportsAnalytics from './admin/Pages/ReportsAnalytics';
// import AdminSettings from './admin/Pages/Settings';

// Business Dashboard Pages
import BusinessLayout from './business/components/layout/BusinessLayout';
import Dashboard from './business/pages/Dashboard';
import Listings from './business/pages/Listings';
import SalesAnalytics from './business/pages/SalesAnalytics';
import Inquiries from './business/pages/Inquiries';
import ProfileSettings from './business/pages/ProfileSettings';
import Notifications from './business/pages/Notifications';
import Membership from './business/pages/Membership';
import Support from './business/pages/Support';

// Styles
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Fixed Header */}
       

        {/* Main Content */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
             <Route path="/services" element={<ServicesPage /> }/>
             <Route path="/contact" element={<ContactPage />} /> 
             <Route path="/categories-page" element={<CategoriesPage />} /> 
             <Route path="/login" element={<LoginPage />} />
             <Route path="/register" element={<RegistrationPage />} />


              {/* Admin Routes
             <Route path="/admin" element={<AdminLayout />}>
                        <Route index element={<AdminDashboard />} />
                        <Route path="business-management" element={<BusinessManagement />} />
                        <Route path="approvals" element={<ApprovalManagement />} />
                        <Route path="transactions" element={<TransactionManagement />} />
                        <Route path="reports" element={<ReportsAnalytics />} />
                        <Route path="settings" element={<AdminSettings />} />
                    </Route>  */}

                    Business Dashboard Routes
                     <Route path="/business" element={<BusinessLayout />}>
                        <Route index element={<Dashboard />} />
                        <Route path="listings" element={<Listings />} />
                        <Route path="sales-analytics" element={<SalesAnalytics />} />
                        <Route path="inquiries" element={<Inquiries />} />
                        <Route path="profile-settings" element={<ProfileSettings />} />
                        <Route path="notifications" element={<Notifications />} />
                        <Route path="membership" element={<Membership />} />
                        <Route path="support" element={<Support />} />
                    </Route> 
          
          </Routes>
        </main>

        
      </div>
    </Router>
  );
}

export default App;