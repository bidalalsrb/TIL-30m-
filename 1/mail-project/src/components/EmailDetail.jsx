const EmailDetail = ({ email }) => {
  return (
    <div className="email-detail">
      <h2>Detail View</h2>
      <h3>Subject: {email.subject}</h3>
      <p>{email.content}</p>
    </div>
  );
};

export default EmailDetail;
