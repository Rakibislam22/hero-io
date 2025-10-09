import React from "react";
import { Mail, Twitter, Github, Linkedin } from "lucide-react";
import logo from '../assets/logo.png'

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">

          <div className="flex-1 min-w-[220px]">
            <a href="/" className="inline-flex items-center gap-1 text-white text-2xl font-semibold"> <img className='w-10' src={logo} alt="" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#632EE3] to-[#9F62F2] inline-block">HERO.IO</span>
            </a>
            <p className="mt-4 text-sm text-gray-400 max-w-xs">
              HERO.IO — build, ship, and scale faster. We provide simple, powerful tools to help teams
              create delightful products. Join our community and level up your workflow.
            </p>

            <div className="mt-6 flex items-center gap-4">
              <a href="#" aria-label="Twitter" className="group">
                <Twitter className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a href="#" aria-label="GitHub" className="group">
                <Github className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a href="#" aria-label="LinkedIn" className="group">
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-6">
            <div>
              <h4 className="text-sm font-semibold text-gray-200">Product</h4>
              <ul className="mt-3 space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">Features</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">Pricing</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">Integrations</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">Changelog</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-200">Company</h4>
              <ul className="mt-3 space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">About</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">Careers</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">Press</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">Contact</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-200">Resources</h4>
              <ul className="mt-3 space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">Docs</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">Guides</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">Community</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">API</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex-1 min-w-[240px]">
            <h4 className="text-sm font-semibold text-gray-200">Get updates</h4>
            <p className="mt-2 text-sm text-gray-400">Join our newsletter for product updates, beta invites, and tips.</p>

            <form className="mt-4 flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="footer-email" className="sr-only">Email address</label>
              <div className="relative flex-1">
                <input
                  id="footer-email"
                  type="email"
                  placeholder="you@company.com"
                  required
                  className="w-full rounded-md bg-gray-900 border border-gray-800 px-3 py-2 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 btn font-semibold hover:from-[#632EE3] hover:to-[#7f31ec]  bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white px-6 py-5 border-none"
              >
                <Mail className="w-4 h-4" />
                Subscribe
              </button>
            </form>

            <p className="mt-3 text-xs text-gray-500">We respect your privacy. Unsubscribe anytime.</p>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-800 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} HERO.IO — All rights reserved.</p>

          <div className="flex items-center gap-4 text-sm text-gray-400">
            <a href="#" className="hover:text-white">Terms</a>
            <span className="text-gray-700">•</span>
            <a href="#" className="hover:text-white">Privacy</a>
            <span className="text-gray-700">•</span>
            <a href="#" className="hover:text-white">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
