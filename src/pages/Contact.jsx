import { useState } from "react";
import emailjs from "@emailjs/browser";
import { SiGmail } from "react-icons/si";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ClipLoader } from "react-spinners";
import toast from "react-hot-toast";

export default function Contact() {
  const [form, setForm] = useState({
    email: "",
    message: "",
    honeypot: "",
  });

  const [loading, setLoading] = useState(false);

  const RATE_LIMIT_MS = 60_000;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.honeypot) return;


    const lastSent = localStorage.getItem("lastContactSent");
    if (lastSent && Date.now() - Number(lastSent) < RATE_LIMIT_MS) {
      toast.error("Please wait a minute before sending again.");
      return;
    }
    
    if (!form.email.includes("@") || form.message.trim().length < 5) {
      toast.error("Please enter a valid email and message.");
      return;
    }

    if (form.message.length > 2000) {
      toast.error("Message too long.");
      return;
    }
    
    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          user_email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      localStorage.setItem("lastContactSent", Date.now())
      toast.success("Message sent successfully 🚀");
      setForm({ email: "", message: "", honeypot: "" });

    } catch (error) {
      console.error(error);
      toast.error("Failed to send message ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center space-y-10">

      <h1 className="text-3xl font-bold">Contact</h1>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg space-y-4 hover:shadow-xl transition duration-300"
      >
        <input
          type="email"
          placeholder="Your email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
          className="w-full border p-3 rounded"
        />
        {/* Honeypot - invisible to humans, bots fill it */}
        <input
          type="text"
          name="website"
          value={form.honeypot}
          onChange={(e) => setForm({ ...form, honeypot: e.target.value })}
          autoComplete="off"
          tabIndex={-1}
          aria-hidden="true"
          style={{ display: "none" }}
        />

        <textarea
          placeholder="Your message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          required
          className="w-full border p-3 rounded h-32 focus:outline-none focus:ring focus:ring-blue-400"
        />

        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-blue-500 text-white py-3 rounded flex justify-center items-center gap-2 transition ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          {loading ? <ClipLoader size={20} color="#161111" /> : "Send Message"}
        </button>
      </form>

      {/* CONTACT LINKS */}
      <div className="w-full max-w-md space-y-4">

        <a
          href="mailto:jaazbogati@gmail.com"
          className="flex items-center gap-3 bg-white shadow p-4 rounded-lg"
        >
          <SiGmail size={20} />
          <span>jaazbogati@gmail.com</span>
        </a>

        <a
          href="https://github.com/jaazbogati"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 bg-white shadow p-4 rounded-lg"
        >
          <FaGithub size={20} />
          <span>github.com/jaazbogati</span>
        </a>

        <a
          href="https://linkedin.com/in/JaphetJeremiah"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 bg-white shadow p-4 rounded-lg"
        >
          <FaLinkedin size={20} />
          <span>linkedin.com/in/JaphetJeremiah</span>
        </a>

      </div>
    </div>
  );
}