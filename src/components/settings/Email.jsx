import { useState } from "react";
import { BiEnvelope } from "react-icons/bi";

const Email = () => {
  const [emails, setEmails] = useState({
    emailOne: "wabwenib66@gmail",
    emailTwo: "johndoe@gmail.com",
  });

  const handleChange = (e) => {
    setEmails({ ...emails, [e.target.name]: [e.target.value] });
  };
  return (
    <div className="mt-8">
      <div className="pb-3 border-b dark:border-b-dark">
        <h1 className="font-semibold">Email</h1>
        <p>Update your email addresses here</p>
      </div>
      <div className="mt-4">
        <p>Email Address One</p>
        <div className="input-with-icon mt-2">
          <BiEnvelope />
          <input
            type="text"
            value={emails.emailOne}
            name="emailOne"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="mt-4">
        <p>Email Address Two</p>
        <div className="input-with-icon mt-2">
          <BiEnvelope />
          <input
            type="text"
            value={emails.emailTwo}
            name="emailTwo"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex-center-center mt-4">
        <button className="btn btn-primary">update</button>
      </div>
    </div>
  );
};

export default Email;
