const ViewerPanel = () => {
  return (
    <div>
      <div className="card-grid">
        <div className="dashboard-card">
          <h3>Monthly Report</h3>
          <p>Read-only business reports.</p>
        </div>

        <div className="dashboard-card">
          <h3>Performance Metrics</h3>
          <p>View organization metrics.</p>
        </div>

        <div className="dashboard-card">
          <h3>Activity Log</h3>
          <p>Track recent activity.</p>
        </div>
      </div>
    </div>
  );
};

export default ViewerPanel;