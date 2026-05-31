const EditorPanel = () => {
  return (
    <div>
      <div className="card-grid">
        <div className="dashboard-card">
          <h3>Draft Articles</h3>
          <p>Manage your drafts.</p>
        </div>

        <div className="dashboard-card">
          <h3>Published Content</h3>
          <p>Review published content.</p>
        </div>

        <div className="dashboard-card">
          <h3>Quick Edit</h3>
          <p>Update content instantly.</p>
        </div>
      </div>
    </div>
  );
};

export default EditorPanel;