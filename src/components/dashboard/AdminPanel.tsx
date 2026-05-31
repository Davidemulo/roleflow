const AdminPanel = () => {
  return (
    <div>
      <div className="card-grid">
        <div className="dashboard-card">
          <h3>Manage Users</h3>
          <p>Create, edit and remove users.</p>
        </div>

        <div className="dashboard-card">
          <h3>Analytics</h3>
          <p>View platform statistics.</p>
        </div>

        <div className="dashboard-card">
          <h3>System Settings</h3>
          <p>Configure application settings.</p>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;