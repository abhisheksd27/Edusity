import React from "react";
import "./Contact.css";
import mail from "../../assets/mail-icon.png"
import msg from "../../assets/msg-icon.png"
import phone from "../../assets/phone-icon.png"
import location from "../../assets/location-icon.png"


const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "8a8544f9-bdba-47e1-95ca-548f4df607d6");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  return (
    <div className="Contact">
      <div className="contact-col">
        <h3>Send us a message <img src={msg} alt="" /></h3>
        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <ul>
          <li><img src={mail} alt="" className="icon"/>abhibytes007@gmail.com</li>
          <li><img src={phone}alt="" className="icon"/> +91 7338006503</li>
          <li><img src={location} alt="" className="icon"/>77 Massachusetts Ave, Cambridge MA 02139, United States</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label >Your Name</label>
            <input type="text" name="name" placeholder="Enter your name" required/>
            
            <label >Your Number</label>
            <input type="tel" name="phone" placeholder="Enter your Mobile Number" required/>
            
            <label >Your Email</label>
            <input type="email" name="email" placeholder="Enter your Email" required/>
            
            <label>Write your messages here</label>
            <textarea name="message" rows="6" placeholder="Enter Your Message" required></textarea>
            <button type="submit" className="btn" style={{ background: 'rgb(26, 26, 146)' ,color:"white"}}>Submit Now</button>

        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
