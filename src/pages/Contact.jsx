import { useState } from "react";
import emailjs from "@emailjs/browser";
import { SiGmail } from "react-icons/si";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: form.email,
        message: form.message,
      }),
    });

    const result = await response.json();

    if (response.ok && result.success) {
      setStatus("Message sent successfully!");
      setForm({ email: "", message: "" });
    } else {
      setStatus("Failed to send message.");
    }
  } catch (error) {
    setStatus("Failed to send message.");
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
        className="w-full max-w-md bg-white p-6 rounded-xl shadow space-y-4"
      >
        <input
          type="email"
          placeholder="Your email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
          className="w-full border p-3 rounded"
        />

        <textarea
          placeholder="Your message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          required
          className="w-full border p-3 rounded h-32"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {status && (
          <p className="text-sm text-center text-gray-600">{status}</p>
        )}
      </form>

       <p className="text-gray-600 text-center max-w-md">
        Feel free to checkout my work and reach out for opportunities, collaborations, or just to connect.
      </p>

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