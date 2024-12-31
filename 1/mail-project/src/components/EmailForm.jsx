import { useState } from 'react';

const EmailForm = ({ addEmail }) => {
  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (subject && content) {
      addEmail({ subject, content });
      setSubject('');
      setContent('');
    }
  };

  return (
    <form className="email-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Add Email</button>
    </form>
  );
};

export default EmailForm;
