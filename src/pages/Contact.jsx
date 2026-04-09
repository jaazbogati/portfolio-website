import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail } from "lucide-react";
import { SiGithub, SiLinkedin } from "@icons-pack/react-simple-icons";

export default function Contact() {
  const [form, setForm] = useState({
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        user_email: form.email,
        message: form.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setStatus("Message sent successfully!");
      setForm({ email: "", message: "" });
    })
    .catch(() => {
      setStatus("Failed to send message.");
    });
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
          className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition"
        >
          Send Message
        </button>

        {status && (
          <p className="text-sm text-center text-gray-600">{status}</p>
        )}
      </form>

      {/* CONTACT LINKS */}
      <div className="w-full max-w-md space-y-4">

        <a
          href="mailto:jaazbogati@gmail.com"
          className="flex items-center gap-3 bg-white shadow p-4 rounded-lg"
        >
          <Mail size={20} />
          <span>jaazbogati@gmail.com</span>
        </a>

        <a
          href="https://github.com/jaazbogati"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 bg-white shadow p-4 rounded-lg"
        >
          <SiGithub size={20} />
          <span>github.com/jaazbogati</span>
        </a>

        <a
          href="https://linkedin.com/in/JaphetJeremiah"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 bg-white shadow p-4 rounded-lg"
        >
          <SiLinkedin size={20} />
          <span>linkedin.com/in/JaphetJeremiah</span>
        </a>

      </div>
    </div>
  );
}