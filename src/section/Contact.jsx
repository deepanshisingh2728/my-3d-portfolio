import { useState } from "react";
import emailjs from "@emailjs/browser";

import Alert from "../components/Alert";
import { Particles } from "../components/Particles";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        "service_l37v6q7",
        "template_9zxfejw",
        {
          from_name: formData.name,
          to_name: "Deepanshi",
          from_email: formData.email,
          to_email: "deepanshisingh2728@gmail.com",
          message: formData.message,
        },
        "o58iUUgcu_MTIijZY"
      );

      setFormData({ name: "", email: "", message: "" });
      showAlertMessage("success", "Your message has been sent!");
    } catch (error) {
      console.log(error);
      showAlertMessage("danger", "Something went wrong!");
    }

    setIsLoading(false);
  };

  return (
    <section className="relative flex items-center justify-center min-h-[80vh] bg-black overflow-hidden section-spacing">
      
      {/* Particles Background */}
      <Particles
        className="absolute inset-0 z-0"
        quantity={120}
        ease={80}
        color="#ffffff"
        refresh
      />

      {/* Alert */}
      {showAlert && <Alert type={alertType} text={alertMessage} />}

      {/* Contact Card */}
      <div className="relative z-10 w-full max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary/80 backdrop-blur-md">
        
        {/* Heading */}
        <div className="flex flex-col items-start w-full gap-3 mb-6">
          <h2 className="text-heading">Let’s Talk</h2>
          <p className="text-sm text-neutral-400">
            Have a project in mind? Let’s build something together!
          </p>
        </div>

        {/* Form */}
        <form className="w-full space-y-4" onSubmit={handleSubmit}>
          
          {/* Name */}
          <div>
            <label htmlFor="name" className="field-label">Full Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="field-input field-input-focus h-11"
              placeholder="Your Name"
              autoComplete="name"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="field-label">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="field-input field-input-focus h-11"
              placeholder="Your email"
              autoComplete="email"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="field-label">Message</label>
            <textarea
              id="message"
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              className="field-input field-input-focus resize-none"
              placeholder="Share your thoughts..."
              autoComplete="message"
              required
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-2.5 text-base font-semibold text-white rounded-md
                       bg-gradient-to-r from-purple-400 to-purple-600
                       hover:opacity-90 transition-all duration-300"
          >
            {!isLoading ? "Send" : "Sending..."}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
