const EmailList = ({ emails, setSelectedEmail, deleteEmail }) => {
  return (
    <div className="email-list">
      <h2>Email List</h2>
      {emails.length > 0 ? (
        emails.map((email) => (
          <div key={email.id} className="email-item">
            <h3 onClick={() => setSelectedEmail(email)}>{email.subject}</h3>
            <button onClick={() => deleteEmail(email.id)}>Delete</button>
          </div>
        ))
      ) : (
        <p>No emails available.</p>
      )}
    </div>
  );
};

export default EmailList;
