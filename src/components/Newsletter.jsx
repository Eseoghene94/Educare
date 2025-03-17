import React, { useState } from "react";
import axios from "axios";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setError("Please enter a valid email address.");
      return;
    }

    try {
      const response = await axios.post("/subscribe", { email });

      if (response.status === 200) {
        setSubscribed(true);
        setError("");
        setEmail("");
      }
    } catch (err) {
      setError("Failed to subscribe. Please try again.");
      console.error("Subscription error:", err);
    }
  };

  return (
    <section className="py-16 font-sans" style={{ backgroundColor: "#F0F3FB" }}>
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-slate-800 mb-4">
          Stay Updated with EduCare
        </h2>
        <p className="text-lg text-slate-600 mb-8">
          Subscribe to our newsletter to get the latest updates, exclusive
          resources, and tips for learners, educators, and mentors.
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row justify-center items-center gap-4 max-w-2xl mx-auto"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full md:w-2/3 px-6 py-3 rounded-lg border border-slate-300 bg-white text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="w-full md:w-auto px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
          >
            {subscribed ? "Subscribed!" : "Subscribe"}
          </button>
        </form>
        {subscribed && (
          <p className="mt-4 text-green-600 font-semibold">
            Thank you for subscribing!
          </p>
        )}
        {error && <p className="mt-4 text-red-600 font-semibold">{error}</p>}
      </div>
    </section>
  );
};

export default Newsletter;
