
import { useEffect, useState } from "react";
import { Switch } from "@headlessui/react";
import Image from "next/image";
import axios from "axios";

const names = [
  {
    heading: "Basic Software Development",
    price: 29,
    user: "per user, per month",
    button: "Get Started",
    profiles: "Access to IT tutorials and resources",
    posts: "Basic software development tools",
    templates: "Email support",
    view: "Monthly performance reports",
    support: "Monthly performance reports",
    category: "yearly",
  },
  {
    heading: "Professional Web Design",
    price: 59,
    user: "per user, per month",
    button: "Get Started",
    profiles: "All features in the Basic Plan",
    posts: "Advanced web design services",
    templates: "Custom design templates",
    view: "Priority email and chat support",
    support: "Weekly performance reports",
    category: "yearly",
  },
  {
    heading: "Enterprise IT Tutorials",
    price: 99,
    user: "per user, per month",
    button: "Get Started",
    profiles: "All features in the Professional Plan",
    posts: "Dedicated account manager",
    templates: "Comprehensive IT tutorials",
    view: "On-site training and consultation",
    support: "VIP Support",
    category: "yearly",
  },
  {
    heading: "Advanced Data Science",
    price: 79,
    user: "per user, per month",
    button: "Get Started",
    profiles: "All features in the Professional Plan",
    posts: "Advanced data science solutions",
    templates: "AI-powered analytics",
    view: "Custom data models",
    support: "Priority email and chat support",
    category: "monthly",
  },
  {
    heading: "AI Solutions",
    price: 89,
    user: "per user, per month",
    button: "Get Started",
    profiles: "All features in the Professional Plan",
    posts: "Custom AI solutions",
    templates: "400+ Templated",
    view: "Machine learning models",
    support: "24/7 Support",
    category: "monthly",
  },
  {
    heading: "SEO Optimization",
    price: 49,
    user: "per user, per month",
    button: "Get Started",
    profiles: "SEO audits and reports",
    posts: "Keyword research",
    templates: "On-page optimization",
    view: "Link building strategies",
    support: "Monthly performance reports",
    category: "monthly",
  },
];

const Manage = () => {
  const [enabled, setEnabled] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("yearly");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    description: "",
    amount: 0, // Add amount to userData
  });
  const [selectedPlan, setSelectedPlan] = useState<typeof names[number] | null>(null); // Store selected plan
  const [exchangeRate, setExchangeRate] = useState(0); // Store the exchange rate

  // Fetch the exchange rate on component mount
  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await axios.get(
          "https://api.exchangerate-api.com/v4/latest/USD" 
        );
        setExchangeRate(response.data.rates.NGN); // Assuming NGN is the key for Naira
      } catch (error) {
        console.error("Error fetching exchange rate:", error);
        setExchangeRate(1500); // Fallback to a default rate (adjust as needed)
      }
    };

    fetchExchangeRate();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  

  const handlePayment = async () => {
    if (!selectedPlan) {
      alert("Please select a plan first.");
      return;
    }

    if (!exchangeRate) {
      alert("Unable to fetch the exchange rate. Please try again later.");
      return;
    }

    const amountInNaira = selectedPlan.price * exchangeRate; // Convert USD to NGN
    const amountInKobo = Math.round(amountInNaira * 100); // Convert NGN to Kobo

 // Update amount in userData
 setUserData((prevData) => ({
  ...prevData,
  amount: amountInKobo,
}));

console.log("User Email: ", userData.email);
console.log("User Description: ", userData.description);
console.log("Amount (in kobo): ", amountInKobo);

    try {
      const response = await axios.post("/api/paystack", {
        email: userData.email,
        amount: amountInKobo,
        description: userData.description,
      });
      console.log("Request Body: --->", response); // Log the request body to verify


      const { authorization_url } = response.data.data;
      window.location.href = authorization_url;
    } catch (error) {
      console.error("Payment error:", error);
    }
  };

  const toggleEnabled = () => {
    setEnabled(!enabled);
    setSelectedCategory(enabled ? "monthly" : "yearly");
  };

  const filteredData = names.filter(
    (items) => items.category === selectedCategory
  );

  return (
    <div id="services-section">
      <div className="mx-auto max-w-7xl sm:py-20 lg:px-8 my-16">
        <h3 className="text-center text-4xl sm:text-65xl font-black">
          Manage All Your Social Media <br /> Profiles From One Place.
        </h3>

        <div className="md:flex md:justify-around mt-20">
          <div className="flex gap-5 justify-center md:justify-start">
            <Image
              src="/images/manage/right.svg"
              alt="right-icon"
              width={21}
              height={14}
              unoptimized
            />
            <h4 className="text-lg font-semibold">
              Get Started with a Free Consultation
            </h4>
          </div>
          <div className="flex gap-5 justify-center md:justify-start">
            <Image
              src="/images/manage/right.svg"
              alt="right-icon"
              width={21}
              height={14}
              unoptimized
            />
            <h4 className="text-lg font-semibold">
              Start Your Journey with Us Today
            </h4>
          </div>
          <div className="flex gap-5 justify-center md:justify-start">
            <Image
              src="/images/manage/right.svg"
              alt="right-icon"
              width={21}
              height={14}
              unoptimized
            />
            <h4 className="text-lg font-semibold">Cancel Anytime</h4>
          </div>
        </div>

        <div className="mt-6 relative">
          <div className="dance-text mb-5">get 3 months free</div>
          <Image
            src="/images/manage/toggle.svg"
            alt="toggle-image"
            width={24}
            height={24}
            className="toggleImage"
            unoptimized
          />
          <div className="flex justify-center">
            <h3 className="text-sm font-medium mr-5">Billed Yearly</h3>
            <Switch
              checked={enabled}
              onChange={toggleEnabled}
              className={`${
                enabled ? "bg-darkpurple" : "bg-darkpurple"
              } relative inline-flex h-6 w-11 items-center rounded-full`}
            >
              <span className="sr-only text-black">Enable notifications</span>
              <span
                className={`${
                  enabled ? "translate-x-6" : "translate-x-1"
                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
              />
            </Switch>
            <h3 className="text-sm font-medium ml-5">Billed Monthly</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16 mx-5 gap-14 manage">
          {filteredData.map((items, i) => (
            <div className="manageTabs text-center p-10" key={i}>
              <h4 className="text-2xl font-bold mb-3">{items.heading}</h4>
              <h2 className="text-5xl sm:text-65xl font-extrabold mb-3">
                ${items.price}
              </h2>
              <p className="text-sm font-medium text-darkgrey mb-6">
                {items.user}
              </p>
              <button
                onClick={() => {
                  setSelectedPlan(items); // Store selected plan
                  setIsModalOpen(true);
                }}
                className="text-sm font-bold text-blue bg-transparent hover:bg-blue hover:text-white border-2 border-blue rounded-full py-4 px-12 mb-6"
              >
                {items.button}
              </button>
              <hr style={{ color: "darkgrey", width: "50%", margin: "auto" }} />
              <h3 className="text-sm font-medium text-darkgrey mb-3 mt-6">
                {items.profiles}
              </h3>
              <h3 className="text-sm font-medium text-darkgrey mb-3">
                {items.posts}
              </h3>
              <h3 className="text-sm font-medium text-darkgrey mb-3">
                {items.templates}
              </h3>
              <h3 className="text-sm font-medium text-darkgrey mb-3">
                {items.view}
              </h3>
              <h3 className="text-sm font-medium text-darkgrey mb-3">
                {items.support}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg w-96">
            <h2 className="text-xl font-bold mb-4">Payment Details</h2>
            <p className="text-sm mb-4">
              Current Exchange Rate: <strong>1 USD = {exchangeRate} NGN</strong>
            </p>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={userData.email}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Description
                </label>
                <textarea
                  name="description"
                  value={userData.description}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  placeholder="What are you paying for?"
                  rows={3}
                  cols={4}
                  required
                ></textarea>
              </div>
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-sm text-gray-500 font-bold text-blue bg-transparent hover:bg-blue hover:text-white border-2 border-blue rounded-full"
                >
                  Cancel
                </button>
               {/*  <button
                  type="button"
                  onClick={() => {
                    handlePayment();
                    setIsModalOpen(false);
                  }}
                  className="px-4 py-2 text-sm text-white bg-blue border border-blue hover:bg-hoblue rounded-full"
                > */}
                 <button
    type="button"
    onClick={handlePayment}
    
      className="px-4 py-2 text-sm text-white bg-blue border border-blue hover:bg-hoblue rounded-full"
  >
                  Pay Now
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Manage;