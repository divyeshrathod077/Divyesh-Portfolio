import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Loader2,
} from "lucide-react";

import emailjs from "@emailjs/browser";
import SectionTitle from "../components/SectionTitle";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // ==========================================
  // HANDLE INPUT CHANGE
  // ==========================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setSuccess(false);
    setError("");
  };

  // ==========================================
  // HANDLE FORM SUBMIT
  // ==========================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSending(true);
    setSuccess(false);
    setError("");

    // EmailJS environment variables
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Check EmailJS configuration
    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS configuration missing:", {
        serviceId,
        templateId,
        hasPublicKey: Boolean(publicKey),
      });

      setError(
        "Email service is not configured correctly."
      );

      setSending(false);
      return;
    }

    try {
      const templateParams = {
        name: form.name,
        email: form.email,
        message: form.message,
      };

      console.log("Sending message...");

      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        {
          publicKey,
        }
      );

      console.log(
        "EmailJS success:",
        response.status,
        response.text
      );

      // Show success message
      setSuccess(true);

      // Clear form
      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      console.error("EmailJS error:", err);

      console.error("Status:", err?.status);
      console.error("Text:", err?.text);

      setError(
        err?.text ||
          "Unable to send message. Please try again."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="page-section contact-page">

      <div className="container">

        {/* ========================================
            SECTION TITLE
        ========================================= */}

        <SectionTitle
          eyebrow="Contact"
          title="Let's Build Something Together"
          description="Have a project or freelance opportunity? Send me a message."
        />

        {/* ========================================
            CONTACT GRID
        ========================================= */}

        <div className="contact-grid">

          {/* ======================================
              LEFT SIDE
              CONTACT INFORMATION
          ====================================== */}

          <div className="contact-info">

            <h2>Get in touch</h2>

            <p>
              I'm open to freelance projects,
              collaboration and development
              opportunities. Feel free to send
              me a message.
            </p>

            {/* ====================================
                EMAIL
            ==================================== */}

            <div className="contact-item">

              <div className="contact-item-icon">
                <Mail size={20} />
              </div>

              <div className="contact-item-content">

              

                <a
                  href="mailto:rathoddivyesh5911@gmail.com"
                  className="contact-value"
                >
                  rathoddivyesh5911@gmail.com
                </a>

              </div>

            </div>

            {/* ====================================
                PHONE
            ==================================== */}

            <div className="contact-item">

              <div className="contact-item-icon">
                <Phone size={20} />
              </div>

              <div className="contact-item-content">

              

                <a
                  href="tel:+91 8154834001"
                  className="contact-value"
                >
                  +918154834001
                </a>

              </div>

            </div>

            {/* ====================================
                LOCATION
            ==================================== */}

            <div className="contact-item">

              <div className="contact-item-icon">
                <MapPin size={20} />
              </div>

              <div className="contact-item-content">

               

                <span className="contact-value">
                  Gujarat,India
                </span>

              </div>

            </div>

          </div>

          {/* ======================================
              RIGHT SIDE
              CONTACT FORM
          ====================================== */}

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            {/* NAME */}

            <div className="form-group">

              <label htmlFor="name">
                Your Name
              </label>

              <input
                id="name"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                autoComplete="name"
                required
                disabled={sending}
              />

            </div>

            {/* EMAIL */}

            <div className="form-group">

              <label htmlFor="email">
                Email Address
              </label>

              <input
                id="email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                autoComplete="email"
                required
                disabled={sending}
              />

            </div>

            {/* MESSAGE */}

            <div className="form-group">

              <label htmlFor="message">
                Message
              </label>

              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows={6}
                required
                disabled={sending}
              />

            </div>

            {/* ====================================
                SUCCESS MESSAGE
            ==================================== */}

            {success && (
              <div
                className="form-success"
                role="alert"
              >

                <CheckCircle2 size={19} />

                <span>
                  Message sent successfully!
                  I'll get back to you soon.
                </span>

              </div>
            )}

            {/* ====================================
                ERROR MESSAGE
            ==================================== */}

            {error && (
              <div
                className="form-error"
                role="alert"
              >
                {error}
              </div>
            )}

            {/* ====================================
                SUBMIT BUTTON
            ==================================== */}

            <button
              type="submit"
              className="btn btn-primary"
              disabled={sending}
            >

              {sending ? (
                <>
                  <Loader2
                    size={18}
                    className="spin"
                  />

                  Sending...
                </>
              ) : (
                <>
                  Send Message

                  <Send size={17} />
                </>
              )}

            </button>

          </form>

        </div>
      </div>

    </section>
  );
}