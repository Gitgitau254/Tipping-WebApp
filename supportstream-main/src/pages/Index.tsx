import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Shield, Gift, ChevronDown, Zap, Smartphone, CreditCard, Clock, CheckCircle2, BarChart3, Users, Globe2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
const Index = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const loadAnimations = async () => {
      await import("framer-motion");
    };
    loadAnimations();
  }, []);
  return <div className="min-h-screen bg-gradient-radial bg-[size:100%_100%] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-dots bg-[size:20px_20px] opacity-50" />
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-primary/10">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="text-xl font-bold text-gray-900">
            support<span className="text-primary">stream</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-primary transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-primary transition-colors">How it Works</a>
            <a href="#pricing" className="text-gray-600 hover:text-primary transition-colors">Pricing</a>
            <a href="/tip/demo" className="text-gray-600 hover:text-primary transition-colors">Demo Page</a>
          </nav>
          <button className="px-4 py-2 bg-primary/10 text-primary-dark hover:bg-primary/20 rounded-lg transition-colors">
            Sign In
          </button>
        </div>
      </header>
      
      {/* Hero Section */}
      <section className="relative container px-4 pt-32 pb-16 md:pt-40 md:pb-24">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} className="text-center max-w-4xl mx-auto">
          <motion.div initial={{
          scale: 0.9,
          opacity: 0
        }} animate={{
          scale: 1,
          opacity: 1
        }} transition={{
          delay: 0.2
        }} className="mb-8">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary-dark font-semibold text-sm backdrop-blur-sm border border-primary/20">
                <Zap className="w-4 h-4 mr-2" />
                Fast M-Pesa Payments
              </span>
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary-dark font-semibold text-sm backdrop-blur-sm border border-primary/20">
                <Clock className="w-4 h-4 mr-2" />
                Setup in 60 Seconds
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-primary-dark via-primary to-primary-light bg-clip-text text-transparent">
              Get Paid Instantly<br />For Your Work
            </h1>
            <p className="text-gray-600 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Create your personalized tipping page and start accepting payments through M-Pesa and cards in minutes.
            </p>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.4
        }} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button onClick={() => navigate("/tip/demo")} className="group inline-flex items-center px-8 py-4 bg-primary hover:bg-primary-hover text-primary-foreground rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-primary/20">
              Create Your Page
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
            <button onClick={() => navigate("/tip/demo")} className="inline-flex items-center px-8 py-4 bg-white/80 hover:bg-white text-gray-800 rounded-xl font-medium border border-gray-200 transition-all duration-300 backdrop-blur-sm">
              View Demo
            </button>
          </motion.div>

          <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 0.6
        }} className="flex justify-center items-center space-x-8 text-gray-500 text-sm">
            <span className="flex items-center">
              <CheckCircle2 className="w-4 h-4 mr-2 text-primary" />
              No Registration Fee
            </span>
            <span className="flex items-center">
              <CheckCircle2 className="w-4 h-4 mr-2 text-primary" />
              Instant Withdrawals
            </span>
            <span className="flex items-center">
              <CheckCircle2 className="w-4 h-4 mr-2 text-primary" />
              24/7 Support
            </span>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section - NEW */}
      <section className="container px-4 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.1
        }} viewport={{
          once: true
        }} className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">50K+</div>
            <div className="text-gray-600">Active Users</div>
          </motion.div>
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} viewport={{
          once: true
        }} className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">10M+</div>
            <div className="text-gray-600">Tips Processed</div>
          </motion.div>
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.3
        }} viewport={{
          once: true
        }} className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
            <div className="text-gray-600">Uptime</div>
          </motion.div>
        </div>
      </section>

      {/* How It Works - NEW */}
      <section id="how-it-works" className="container px-4 py-16 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-600">Get started in three simple steps</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <StepCard number="1" title="Create Your Page" description="Sign up and customize your tipping page in minutes" icon={<Globe2 className="w-6 h-6 text-primary" />} />
          <StepCard number="2" title="Share Your Link" description="Share your unique tipping link with your audience" icon={<Users className="w-6 h-6 text-primary" />} />
          <StepCard number="3" title="Receive Tips" description="Get instant payments directly to your M-Pesa" icon={<BarChart3 className="w-6 h-6 text-primary" />} />
        </div>
      </section>

      {/* Payment Methods Section */}
      <section className="container px-4 py-16 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Accept Tips Your Way</h2>
          <p className="text-gray-600">Multiple payment options for your convenience</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div initial={{
          opacity: 0,
          x: -20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.6
        }} viewport={{
          once: true
        }} className="relative bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-card-border">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent rounded-xl" />
            <div className="relative">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Smartphone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">M-Pesa Payments</h3>
              <p className="text-gray-600 mb-4">Quick and easy mobile money transfers with instant confirmation</p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 mr-2 text-primary" />
                  STK Push for one-tap payments
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 mr-2 text-primary" />
                  Paybill/Till Number support
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 mr-2 text-primary" />
                  Instant transaction confirmation
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          x: 20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.6
        }} viewport={{
          once: true
        }} className="relative bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-card-border">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent rounded-xl" />
            <div className="relative">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <CreditCard className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Card Payments</h3>
              <p className="text-gray-600 mb-4">Accept international payments from cards worldwide</p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 mr-2 text-primary" />
                  Visa & Mastercard accepted
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 mr-2 text-primary" />
                  Secure payment processing
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 mr-2 text-primary" />
                  Lower transaction fees
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container px-4 py-16 md:py-24 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-gray-600">Everything you need to start accepting tips</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Feature icon={<Sparkles className="h-6 w-6 text-primary" />} title="Lightning Fast Setup" description="Get your personalized tipping page ready in under 60 seconds" />
          <Feature icon={<Shield className="h-6 w-6 text-primary" />} title="Secure Payments" description="Trust in our robust security with M-Pesa and card payments" />
          <Feature icon={<Gift className="h-6 w-6 text-primary" />} title="Instant Withdrawals" description="Access your earnings immediately via M-Pesa" />
        </div>
      </section>

      {/* Sample Tipping Card */}
      

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-md border-t border-primary/10 py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-xl font-bold text-gray-900 mb-4">
                support<span className="text-primary">stream</span>
              </div>
              <p className="text-gray-600 text-sm">
                The fastest way to receive tips through M-Pesa and cards.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-600">
            © 2024 supportstream. All rights reserved.
          </div>
        </div>
      </footer>
    </div>;
};
const Feature = ({
  icon,
  title,
  description
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => <motion.div initial={{
  opacity: 0,
  y: 20
}} whileInView={{
  opacity: 1,
  y: 0
}} transition={{
  duration: 0.6
}} viewport={{
  once: true
}} className="group hover:scale-105 transition-transform duration-300">
    <div className="relative bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-card-border h-full">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent rounded-xl" />
      <div className="relative">
        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  </motion.div>;
const StepCard = ({
  number,
  title,
  description,
  icon
}: {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}) => <motion.div initial={{
  opacity: 0,
  y: 20
}} whileInView={{
  opacity: 1,
  y: 0
}} transition={{
  duration: 0.6
}} viewport={{
  once: true
}} className="relative bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-card-border text-center">
    <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent rounded-xl" />
    <div className="relative">
      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
        {icon}
      </div>
      <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary-dark text-sm font-semibold mb-4">
        Step {number}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </motion.div>;
export default Index;