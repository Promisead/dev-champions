import { useState } from "react";
import emailjs from "@emailjs/browser";

interface FormData {
  name: string;
  email: string;
}

interface Feedback {
  message: string;
  type: "success" | "error" | "";
}

const Join = () => {
  const [formData, setFormData] = useState<FormData>({ name: "", email: "" });
  const [feedback, setFeedback] = useState<Feedback>({ message: "", type: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFeedback({ message: "", type: "" }); // Reset feedback

    try {
      // EmailJS Configuration
      const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
      const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

      // Send the email
      await emailjs.send(
        serviceID,
        templateID,
        {
          name: formData.name,
          email: formData.email,
        },
        publicKey
      );

      setFeedback({
        message: "Thank you for joining us! We'll be in touch shortly.",
        type: "success",
      });
      setFormData({ name: "", email: "" }); // Reset form
    } catch (error) {
      console.error("EmailJS Error:", error);
      setFeedback({
        message: "An error occurred while sending the email. Please try again later.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => setFeedback({ message: "", type: "" });

  return (
    <div className="bg-joinus my-32 ">
      <div className="mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8">
        <div className="text-center">
          <h3 className="text-blue text-lg font-normal tracking-widest">JOIN US</h3>
          <h2 className="text-4xl sm:text-6xl font-bold my-6 leading-10">
            Take your business to <br /> the new level.
          </h2>
          <p className="text-black text-base font-normal max-md:font-bold">
            Join us to elevate your business. <br />
            Our experts provide innovative solutions tailored to your unique needs.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mx-10 max-w-4xl pt-5">
          <div className="sm:flex items-center mx-5 p-5 sm:p-0 rounded-xl justify-between bg-lightgrey sm:rounded-full">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="my-4 py-4 sm:pl-6 lg:text-xl text-black sm:rounded-full bg-lightgrey pl-1 focus:outline-none bg-emailbg focus:text-black"
                placeholder="Your name"
                autoComplete="off"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="my-4 py-4 sm:pl-6 lg:text-xl text-black sm:border-l border-linegrey bg-lightgrey focus:outline-none bg-emailbg focus:text-black"
                placeholder="Your email"
                autoComplete="off"
                required
              />
            </div>
            <div className="sm:mr-3">
              <button
                type="submit"
                className="joinButton w-full sm:w-0 text-xl text-white font-semibold text-center rounded-xl sm:rounded-full bg-blue hover:bg-btnblue"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Join!"}
              </button>
            </div>
          </div>
        </form>

        {feedback.message && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg p-6 max-w-md w-full">
              <h3
                className={`text-xl font-semibold ${
                  feedback.type === "success" ? "text-green-600" : "text-red-600"
                }`}
              >
                {feedback.type === "success" ? "🎉 Success" : "❌ Error"}
              </h3>
              <p className="mt-4 text-gray-700">{feedback.message}</p>
              <button
                onClick={closeModal}
                className="mt-6 px-4 py-2 bg-blue text-white rounded-lg hover:bg-btnblue"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Join;
