import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('idle');
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    // 1. Extract values from the form
    const formData = new FormData(formRef.current);
    const name = formData.get('user_name');
    const email = formData.get('user_email');
    const message = formData.get('user_message');

    // 2. Create the mailto link
    const mailtoLink = `mailto:Ruchitha@example.com?subject=Portfolio Inquiry from ${name}&body=From: ${name} (${email})%0D%0A%0D%0AMessage:%0D%0A${message}`;

    // 3. Simulate the sending feel and trigger the email app
    setTimeout(() => {
      window.location.href = mailtoLink; // Opens the user's email client
      setStatus('success');
      formRef.current.reset(); 
      
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  const contactInfo = [
    { icon: <Mail size={20} />, text: "Ruchitha@example.com", label: "Email" },
    { icon: <Phone size={20} />, text: "+91 91000 00000", label: "Phone" },
    { icon: <MapPin size={20} />, text: "Bengaluru, India", label: "Location" },
  ];

  return (
    <section id="contact" className="py-32 px-6 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-16 items-start"
        >
          {/* Left Side */}
          <div className="space-y-12">
            <div>
              <h2 className="text-6xl font-black text-white mb-6 tracking-tighter leading-none">
                Let's <span className="text-blue-500 italic">Connect.</span>
              </h2>
              <p className="text-gray-400 text-lg font-light max-w-sm leading-relaxed">
                Have a vision? I have the tools to build it. Reach out for collaborations or just a friendly hello.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, i) => (
                <div key={i} className="flex items-center gap-5 group">
                  <div className="p-4 bg-white/5 rounded-2xl text-blue-500 border border-white/5 group-hover:border-blue-500/50 transition-all">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">{info.label}</p>
                    <p className="text-white font-medium">{info.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4 pt-4">
              <a href="https://linkedin.com" target="_blank" className="p-4 bg-white/5 rounded-2xl text-gray-400 hover:text-white hover:bg-blue-600 transition-all">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com" target="_blank" className="p-4 bg-white/5 rounded-2xl text-gray-400 hover:text-white hover:bg-gray-800 transition-all">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Right Side: Added 'name' attributes to inputs so the data can be grabbed */}
          <div className="bg-[#111] p-8 md:p-12 rounded-[3rem] border border-white/5 shadow-2xl relative overflow-hidden">
            <div className="absolute top-[-10%] right-[-10%] w-40 h-40 bg-blue-600/10 rounded-full blur-[80px]" />

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5 relative z-10">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-2">Full Name</label>
                <input 
                  name="user_name" type="text" placeholder="Your Name" required
                  className="w-full p-5 bg-white/5 border border-white/10 rounded-2xl text-white focus:border-blue-500 focus:bg-white/10 outline-none transition-all placeholder:text-gray-700"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-2">Email Address</label>
                <input 
                  name="user_email" type="email" placeholder="email@example.com" required
                  className="w-full p-5 bg-white/5 border border-white/10 rounded-2xl text-white focus:border-blue-500 focus:bg-white/10 outline-none transition-all placeholder:text-gray-700"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-2">Message</label>
                <textarea 
                  name="user_message" placeholder="Tell me about your project..." rows="4" required
                  className="w-full p-5 bg-white/5 border border-white/10 rounded-2xl text-white focus:border-blue-500 focus:bg-white/10 outline-none transition-all placeholder:text-gray-700 resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={status !== 'idle'}
                className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest text-[11px] flex items-center justify-center gap-3 transition-all active:scale-95 ${
                  status === 'success' ? 'bg-green-500 text-white' : 'bg-blue-600 text-white hover:bg-blue-500 shadow-xl shadow-blue-600/20'
                }`}
              >
                {status === 'idle' && <><Send size={16}/> Send Message</>}
                {status === 'sending' && <span className="animate-pulse">Opening Mail App...</span>}
                {status === 'success' && <><CheckCircle size={16}/> Success!</>}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;