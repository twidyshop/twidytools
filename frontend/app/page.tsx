'use client'

import { useState } from 'react'
import { Upload, FileText, Image, Zap, Shield, Clock } from 'lucide-react'

export default function Home() {
  const [isDragging, setIsDragging] = useState(false)

  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Convert files in seconds with our optimized engine'
    },
    {
      icon: Shield,
      title: '100% Secure',
      description: 'Your files are never stored. Everything is deleted after conversion'
    },
    {
      icon: Clock,
      title: 'No Sign-up',
      description: 'Start converting immediately without registration'
    }
  ]

  const tools = [
    { name: 'PDF to Word', icon: FileText, color: 'from-blue-500 to-blue-600' },
    { name: 'Image to PDF', icon: Image, color: 'from-purple-500 to-purple-600' },
    { name: 'Merge PDF', icon: FileText, color: 'from-green-500 to-green-600' },
    { name: 'Compress PDF', icon: Zap, color: 'from-orange-500 to-orange-600' },
    { name: 'Split PDF', icon: FileText, color: 'from-pink-500 to-pink-600' },
    { name: 'Word to PDF', icon: FileText, color: 'from-indigo-500 to-indigo-600' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-sm border-b border-slate-700 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            TwidyTools
          </div>
          <div className="flex gap-4">
            <a href="#features" className="hover:text-blue-400 transition">Features</a>
            <a href="#tools" className="hover:text-blue-400 transition">Tools</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Convert, Merge & Compress<br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Your Documents Instantly
            </span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Free online document converter. No sign-up required. No file size limits. 100% secure and private.
          </p>

          {/* Upload Area */}
          <div
            onDragEnter={() => setIsDragging(true)}
            onDragLeave={() => setIsDragging(false)}
            onDragOver={(e) => e.preventDefault()}
            className={`border-2 border-dashed rounded-lg p-12 transition-all ${
              isDragging
                ? 'border-blue-400 bg-blue-500/10'
                : 'border-slate-600 hover:border-slate-500'
            }`}
          >
            <Upload className="w-16 h-16 mx-auto mb-4 text-slate-400" />
            <p className="text-lg mb-2">Drag and drop your file here</p>
            <p className="text-slate-400 mb-4">or</p>
            <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 px-8 py-3 rounded-lg font-semibold transition-all">
              Select File
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose TwidyTools?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <div key={idx} className="p-8 bg-slate-700/30 rounded-lg border border-slate-600 hover:border-blue-400 transition-all">
                  <Icon className="w-12 h-12 mb-4 text-blue-400" />
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-slate-300">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Available Tools</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {tools.map((tool, idx) => {
              const Icon = tool.icon
              return (
                <div key={idx} className={`bg-gradient-to-br ${tool.color} p-6 rounded-lg hover:shadow-lg transition-all cursor-pointer group`}>
                  <Icon className="w-8 h-8 mb-3 group-hover:scale-110 transition-transform" />
                  <p className="font-semibold">{tool.name}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 py-8 px-4 text-center text-slate-400">
        <p>&copy; 2026 TwidyTools. All rights reserved. Privacy focused & secure.</p>
      </footer>
    </div>
  )
}
