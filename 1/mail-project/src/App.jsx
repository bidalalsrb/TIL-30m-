import { useState } from 'react';
import EmailForm from './components/EmailForm';
import EmailList from './components/EmailList';
import EmailDetail from './components/EmailDetail';

const App = () => {
  const [emails, setEmails] = useState([]);
  const [selectedEmail, setSelectedEmail] = useState(null);

  const addEmail = (email) => {
    setEmails((prevEmails) => [...prevEmails, { id: Date.now(), ...email }]);
  };

  const deleteEmail = (id) => {
    setEmails((prevEmails) => prevEmails.filter((email) => email.id !== id));
    if (selectedEmail?.id === id) setSelectedEmail(null);
  };

  return (
    <div className="app-container">
      <EmailForm addEmail={addEmail} />
      <EmailList
        emails={emails}
        setSelectedEmail={setSelectedEmail}
        deleteEmail={deleteEmail}
      />
      {selectedEmail && <EmailDetail email={selectedEmail} />}
    </div>
  );
};

export default App;
