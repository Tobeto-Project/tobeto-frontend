import React from 'react'
import '../../AdminPanel/styles/AdminPanelStyle.css'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'


const AdminPanel = () => {
  return (
    <div className="admin-panel">
        <Header />
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
      </div>
    </div>
  </div>
  )
}

export default AdminPanel