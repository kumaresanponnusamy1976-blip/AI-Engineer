import React, { useState } from 'react';
import { StudentProfile } from '../types/portfolio';
import { Mail, Linkedin, Github, Send, CheckCircle2, Copy, Check, MessageSquare } from 'lucide-react';

interface ContactProps {
  profile: StudentProfile;
}

export const Contact: React.FC<ContactProps> = ({ profile }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      return;
    }
    setSubmitted(true);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const openMailto = () => {
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name || 'Visitor'}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} (${email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-16 md:py-20 border-b border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">
            Get In Touch
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Let's Connect
          </h2>
          <p className="mt-3 text-sm text-slate-600 leading-relaxed">
            Interested in connecting, collaborating on a project, or discussing AI and technology? Feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="p-5 bg-[#F8FAFC] rounded-xl border border-slate-200 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-700">
                  <Mail className="w-4 h-4 text-blue-600" />
                  <span>Email Address</span>
                </div>
                <button
                  onClick={copyEmail}
                  className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-500 hover:text-slate-900 transition-colors"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-600" />
                      <span className="text-emerald-700">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <div className="text-sm font-mono text-slate-900 select-all break-all">
                {profile.email}
              </div>
              <p className="text-[11px] text-slate-500">
                Preferred for college collaboration, hackathon invitations, and mentorship.
              </p>
            </div>

            {/* LinkedIn Card */}
            <div className="p-5 bg-[#F8FAFC] rounded-xl border border-slate-200 space-y-2">
              <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-700">
                <Linkedin className="w-4 h-4 text-blue-600" />
                <span>LinkedIn Profile</span>
              </div>
              <div className="text-sm font-mono text-slate-900 select-all break-all">
                {profile.linkedinUrl}
              </div>
              <p className="text-[11px] text-slate-500">
                Connect with me to view academic milestones, peer discussions, and tech updates.
              </p>
            </div>

            {/* GitHub Card */}
            <div className="p-5 bg-[#F8FAFC] rounded-xl border border-slate-200 space-y-2">
              <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-700">
                <Github className="w-4 h-4 text-slate-800" />
                <span>GitHub Repositories</span>
              </div>
              <div className="text-sm font-mono text-slate-900 select-all break-all">
                {profile.githubUrl}
              </div>
              <p className="text-[11px] text-slate-500">
                Explore source code for beginner Python scripts, algorithms, and web exercises.
              </p>
            </div>

          </div>

          {/* Right Column: Contact Form with Honest Frontend Notice */}
          <div className="lg:col-span-7">
            <div className="bg-[#F8FAFC] p-6 sm:p-8 rounded-xl border border-slate-200">
              
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 mb-1">
                <MessageSquare className="w-4 h-4 text-blue-600" />
                <span>Send a Direct Message</span>
              </div>
              
              <p className="text-xs text-slate-500 mb-5">
                Note: This form is a client-side interface. You can test submitting or use the "Send via Email App" option to launch your mail client.
              </p>

              {submitted ? (
                <div className="p-5 bg-white rounded-lg border border-slate-200 space-y-3 animate-in fade-in duration-200">
                  <div className="flex items-center gap-2 text-emerald-600 font-semibold text-sm">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Message Ready to Dispatch</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Thank you, <strong>{name}</strong>! Since this portfolio is a frontend application without a live backend server, click below to open your email client with your message pre-filled:
                  </p>
                  <div className="flex flex-wrap items-center gap-2 pt-2">
                    <button
                      onClick={openMailto}
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg transition-colors shadow-sm"
                    >
                      Open in Email App
                    </button>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-3 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100"
                    >
                      Write Another Note
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div>
                    <label className="block font-medium text-slate-700 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Professor, Hackathon Organizer, or Peer"
                      className="w-full px-3 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block font-medium text-slate-700 mb-1">Your Email Address *</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. colleague@university.edu"
                      className="w-full px-3 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono"
                    />
                  </div>

                  <div>
                    <label className="block font-medium text-slate-700 mb-1">Message *</label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Share project ideas, questions about Python/AI, or feedback..."
                      className="w-full px-3 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
                    ></textarea>
                  </div>

                  <div className="pt-2 flex items-center justify-between flex-wrap gap-3">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg transition-colors shadow-sm"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Message</span>
                    </button>

                    <span className="text-[11px] text-slate-400">
                      Target: {profile.email}
                    </span>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
