import { useState } from "react";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  Copy, 
  Share2, 
  Heart, 
  MessageCircle, 
  Coffee, 
  Gift, 
  ChevronDown, 
  Clock, 
  CreditCard, 
  Smartphone,
  Shield 
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const TipPage = () => {
  const navigate = useNavigate();
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [message, setMessage] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);

  const predefinedAmounts = [50, 100, 500, 1000];

  return (
    <div className="min-h-screen bg-gradient-radial bg-[size:100%_100%] relative">
      <div className="absolute inset-0 bg-gradient-dots bg-[size:20px_20px] opacity-50" />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-primary/10">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <button 
            onClick={() => navigate("/")}
            className="text-gray-600 hover:text-primary flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-full" title="Share">
              <Share2 className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full" title="Copy Link">
              <Copy className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 pt-24 pb-24">
        <div className="max-w-2xl mx-auto">
          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="mb-6">
              <div className="h-24 w-24 mx-auto rounded-full bg-gradient-to-r from-primary to-primary-light p-1">
                <div className="w-full h-full rounded-full bg-white overflow-hidden">
                  <img 
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=John" 
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h1 className="text-2xl font-bold mt-4">John Doe</h1>
              <p className="text-gray-600">Street Performer & Musician</p>
            </div>
            <p className="text-gray-600 max-w-lg mx-auto">
              Bringing music to the streets of Nairobi. Your support helps me continue creating and performing. Thank you! 🎵
            </p>
            <div className="flex items-center justify-center gap-6 mt-6">
              <div className="text-center">
                <div className="text-xl font-bold text-gray-900">2.5k</div>
                <div className="text-sm text-gray-600">Supporters</div>
              </div>
              <div className="h-10 w-px bg-gray-200"></div>
              <div className="text-center">
                <div className="text-xl font-bold text-gray-900">KES 150k+</div>
                <div className="text-sm text-gray-600">Received</div>
              </div>
            </div>
          </motion.div>

          {/* Tip Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-card-border p-8 mb-8"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent rounded-2xl" />
            <div className="relative">
              {/* Amount Selection */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">Select Amount</h3>
                <div className="grid grid-cols-2 gap-4">
                  {predefinedAmounts.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => setSelectedAmount(amount)}
                      className={`py-3 rounded-xl font-medium transition-all duration-200 ${
                        selectedAmount === amount
                          ? "bg-primary text-primary-foreground"
                          : "bg-white/50 hover:bg-white text-gray-800 border border-gray-200"
                      }`}
                    >
                      KES {amount}
                    </button>
                  ))}
                </div>
                <div className="mt-4">
                  <input
                    type="number"
                    placeholder="Custom Amount"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount(null);
                    }}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">Add a Message</h3>
                <textarea
                  placeholder="Say something nice... (optional)"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 min-h-[100px]"
                />
                <div className="flex items-center gap-2 mt-2">
                  <input
                    type="checkbox"
                    id="anonymous"
                    checked={isAnonymous}
                    onChange={(e) => setIsAnonymous(e.target.checked)}
                    className="rounded border-gray-300 text-primary focus:ring-primary/20"
                  />
                  <label htmlFor="anonymous" className="text-sm text-gray-600">
                    Tip anonymously
                  </label>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="space-y-4">
                <button className="w-full flex items-center justify-between px-6 py-4 bg-[#4CAF50]/10 hover:bg-[#4CAF50]/20 text-[#2E7D32] rounded-xl transition-all duration-200">
                  <div className="flex items-center gap-3">
                    <Smartphone className="w-5 h-5" />
                    <span className="font-medium">Pay with M-Pesa</span>
                  </div>
                  <ChevronDown className="w-5 h-5" />
                </button>
                <button className="w-full flex items-center justify-between px-6 py-4 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-xl transition-all duration-200">
                  <div className="flex items-center gap-3">
                    <CreditCard className="w-5 h-5" />
                    <span className="font-medium">Pay with Card</span>
                  </div>
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Recent Tips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="relative bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-card-border p-8"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent rounded-2xl" />
            <div className="relative">
              <h3 className="text-lg font-semibold mb-6">Recent Support</h3>
              <div className="space-y-6">
                <RecentTip
                  name="Sarah K."
                  amount={500}
                  message="Amazing performance yesterday! Keep it up! 🎸"
                  time="2 hours ago"
                />
                <RecentTip
                  name="Anonymous"
                  amount={100}
                  message="Love your music!"
                  time="5 hours ago"
                />
                <RecentTip
                  name="Mike W."
                  amount={1000}
                  message="Your talent is incredible. Never stop playing!"
                  time="1 day ago"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-md border-t border-primary/10 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center text-sm text-gray-600">
            <p className="mb-4">Protected by secure payment processing</p>
            <div className="flex items-center justify-center gap-4 mb-4">
              <Clock className="w-4 h-4 text-primary" />
              <CreditCard className="w-4 h-4 text-primary" />
              <Shield className="w-4 h-4 text-primary" />
            </div>
            <p>© 2024 supportstream. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const RecentTip = ({ name, amount, message, time }: { name: string; amount: number; message: string; time: string }) => (
  <div className="flex items-start gap-4 pb-6 border-b border-gray-100 last:border-0 last:pb-0">
    <div className="h-10 w-10 rounded-full bg-gradient-to-r from-primary to-primary-light p-0.5">
      <div className="w-full h-full rounded-full bg-white overflow-hidden">
        <img 
          src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
    <div className="flex-1">
      <div className="flex items-start justify-between mb-1">
        <h4 className="font-medium">{name}</h4>
        <span className="text-primary-dark font-medium">KES {amount}</span>
      </div>
      <p className="text-gray-600 text-sm mb-1">{message}</p>
      <div className="flex items-center gap-4 text-xs text-gray-500">
        <span>{time}</span>
        <button className="flex items-center gap-1 hover:text-primary transition-colors">
          <Heart className="w-3 h-3" />
          Like
        </button>
        <button className="flex items-center gap-1 hover:text-primary transition-colors">
          <MessageCircle className="w-3 h-3" />
          Reply
        </button>
      </div>
    </div>
  </div>
);

export default TipPage;
