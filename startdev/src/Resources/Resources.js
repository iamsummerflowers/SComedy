import React from 'react';
import './Resources.css';
import { useState } from 'react';
// import {footerConfig} from '../Data/footerConfig';



function Resources() {

  // const currentYear = new Date().getFullYear();

  return (
              <section className="py-20 px-6 bg-gradient-to-b from-[#1a1a1a] to-[#2B2B2B]">
                <div className="max-w-5xl mx-auto">
                  {/* Investing Resources */}
                  <div className="mb-16">
                    <h2 className="font-display text-4xl font-bold text-[#D4AF37] mb-8">Investing Resources</h2>
                    
                    {/* NerdWallet */}
                    <div className="bg-[#2B2B2B] border-l-4 border-[#D4AF37] p-6 rounded-lg mb-6 hover:shadow-lg transition-shadow">
                      <h3 className="text-xl font-bold text-[#F5F5DC] mb-3">Nerd Wallet</h3>
                      <p className="text-[#F5F5DC]/80 mb-4">Looking for objective advice, expert info, and helpful tools to answer your money questions? Turn to the Nerds.</p>
                      <a
                        href="https://www.nerdwallet.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-fit inline-block bg-[#8B1538] hover:bg-[#A91E4A] text-white font-bold px-6 py-2 rounded-lg transition-colors"
                      >
                        NerdWallet: Make all the right money moves →
                      </a>
                    </div>

                    {/* Google Finance */}
                    <div className="bg-[#2B2B2B] border-l-4 border-[#D4AF37] p-6 rounded-lg mb-6 hover:shadow-lg transition-shadow">
                      <h3 className="text-xl font-bold text-[#F5F5DC] mb-3">Google Finance</h3>
                      <p className="text-[#F5F5DC]/80 mb-4">Stock Market Prices, Real-time Quotes & Business News</p>
                      <a
                        href="https://www.google.com/finance/beta"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-fit inline-block bg-[#8B1538] hover:bg-[#A91E4A] text-white font-bold px-6 py-2 rounded-lg transition-colors"
                      >
                        Visit Google Finance →
                      </a>
                    </div>

                    {/* Yahoo Finance */}
                    <div className="bg-[#2B2B2B] border-l-4 border-[#D4AF37] p-6 rounded-lg mb-6 hover:shadow-lg transition-shadow">
                      <h3 className="text-xl font-bold text-[#F5F5DC] mb-3">Yahoo Finance</h3>
                      <p className="text-[#F5F5DC]/80 mb-4">Stock Market Live, Quotes, Business & Finance News</p>
                      <a
                        href="https://finance.yahoo.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-fit inline-block bg-[#8B1538] hover:bg-[#A91E4A] text-white font-bold px-6 py-2 rounded-lg transition-colors"
                      >
                        Visit Yahoo Finance →
                      </a>
                    </div>

                    {/* My Favorites */}
                    <div className="bg-[#3D3D3D] p-8 rounded-lg mb-6">
                      <h3 className="text-2xl font-bold text-[#D4AF37] mb-6">My Favorites (Great Websites with Investor Learning Tools)</h3>
                      <div className="space-y-4">
                        <div className="flex items-start gap-4">
                          <span className="w-fit text-[#D4AF37] text-2xl">•</span>
                          <div>
                            <h4 className="font-bold text-[#F5F5DC] mb-2">Fidelity</h4>
                            <a
                              href="https://www.fidelity.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-400 hover:text-blue-300 underline"
                            >
                              Fidelity Investments – Retirement Plans, Investing, Brokerage, Wealth Management, Financial Planning and Advice, Online Trading →
                            </a>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <span className="w-fit text-[#D4AF37] text-2xl">•</span>
                          <div>
                            <h4 className="font-bold text-[#F5F5DC] mb-2">TD Ameritrade</h4>
                            <a
                              href="https://www.schwab.com/td-ameritrade"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-400 hover:text-blue-300 underline"
                            >
                              Online Stock Trading, Investing, Brokerage | TD Ameritrade →
                            </a>
                          </div>
                        </div>

                        <div className="w-fit flex items-start gap-4">
                          <span className="w-fit text-[#D4AF37] text-2xl">•</span>
                          <div>
                            <h4 className="font-bold text-[#F5F5DC] mb-2">MarketWatch</h4>
                            <p className="text-[#F5F5DC]/80 mb-2">MarketWatch is a website that provides financial information, business news, analysis, and stock market data. Along with The Wall Street Journal and Barron's, it is a subsidiary of Dow Jones & Company, a property of News Corp.</p>
                            <a
                              href="https://www.marketwatch.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-400 hover:text-blue-300 underline"
                            >
                              MarketWatch: Stock Market News – Financial News →
                            </a>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <span className="w-fit text-[#D4AF37] text-2xl">•</span>
                          <div>
                            <h4 className="font-bold text-[#F5F5DC] mb-2">Candlestick Analysis</h4>
                            <a
                              href="https://www.candlesticker.com/Default.aspx?lang=en"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-400 hover:text-blue-300 underline"
                            >
                              Candlestick Analysis, by Americanbulls.com →
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Technology & Open Source Software */}
                  <div className="mb-16">
                    <h2 className="font-display text-4xl font-bold text-[#D4AF37] mb-8">Technology Websites - Open Source Software</h2>
                    <p className="text-[#F5F5DC]/80 mb-6 text-lg">If you can't afford a specific software, visit these sites and search for an alternative:</p>
                    
                    <div className="space-y-6">
                      {/* PortableApp & SourceForge */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-[#2B2B2B] border-l-4 border-[#D4AF37] p-6 rounded-lg hover:shadow-lg transition-shadow">
                          <h3 className="text-xl font-bold text-[#F5F5DC] mb-3">PortableApp.com</h3>
                          <p className="text-[#F5F5DC]/80 mb-4">Free, open source portable applications that run without installation.</p>
                          <a
                            href="https://portableapps.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-fit inline-block bg-[#8B1538] hover:bg-[#A91E4A] text-white font-bold px-6 py-2 rounded-lg transition-colors"
                          >
                            Visit PortableApps →
                          </a>
                        </div>

                        <div className="bg-[#2B2B2B] border-l-4 border-[#D4AF37] p-6 rounded-lg hover:shadow-lg transition-shadow">
                          <h3 className="text-xl font-bold text-[#F5F5DC] mb-3">SourceForge</h3>
                          <p className="text-[#F5F5DC]/80 mb-4">Repository of free and open source software projects.</p>
                          <a
                            href="https://sourceforge.net/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-fit inline-block bg-[#8B1538] hover:bg-[#A91E4A] text-white font-bold px-6 py-2 rounded-lg transition-colors"
                          >
                            Visit SourceForge →
                          </a>
                        </div>
                      </div>

                      {/* Alternative Graphics Editor */}
                      <div className="bg-[#2B2B2B] border-l-4 border-[#D4AF37] p-6 rounded-lg hover:shadow-lg transition-shadow">
                        <h3 className="text-xl font-bold text-[#F5F5DC] mb-2">🎨 Alternative Graphics Editor</h3>
                        <h4 className="font-bold text-[#D4AF37] mb-3">GIMP – GNU Image Manipulation Program</h4>
                        <p className="text-[#F5F5DC]/80 mb-4">Free and open-source image editor. A powerful alternative to Photoshop.</p>
                        <a
                          href="https://www.gimp.org/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-fit inline-block bg-[#8B1538] hover:bg-[#A91E4A] text-white font-bold px-6 py-2 rounded-lg transition-colors"
                        >
                          Visit GIMP →
                        </a>
                      </div>

                      {/* Alternative to Microsoft Office */}
                      <div className="bg-[#2B2B2B] border-l-4 border-[#D4AF37] p-6 rounded-lg hover:shadow-lg transition-shadow">
                        <h3 className="text-xl font-bold text-[#F5F5DC] mb-4">📄 Alternative to Microsoft Office</h3>
                        <div className="space-y-3">
                          <div>
                            <h4 className="font-bold text-[#D4AF37] mb-2">Apache OpenOffice</h4>
                            <a
                              href="https://www.openoffice.org/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-400 hover:text-blue-300 underline"
                            >
                              Visit Apache OpenOffice →
                            </a>
                          </div>
                          <div>
                            <h4 className="font-bold text-[#D4AF37] mb-2">LibreOffice</h4>
                            <a
                              href="https://www.libreoffice.org/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-400 hover:text-blue-300 underline"
                            >
                              Visit LibreOffice →
                            </a>
                          </div>
                        </div>
                      </div>

                      {/* Linux Alternative to Windows */}
                      <div className="bg-[#2B2B2B] border-l-4 border-[#D4AF37] p-6 rounded-lg hover:shadow-lg transition-shadow">
                        <h3 className="text-xl font-bold text-[#F5F5DC] mb-2">🐧 Linux Alternative to Windows</h3>
                        <h4 className="font-bold text-[#D4AF37] mb-3">Ubuntu</h4>
                        <p className="text-[#F5F5DC]/80 mb-4">Free, open-source Linux operating system. A great alternative to Windows or macOS.</p>
                        <a
                          href="https://ubuntu.com/download/desktop"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-fit inline-block bg-[#8B1538] hover:bg-[#A91E4A] text-white font-bold px-6 py-2 rounded-lg transition-colors"
                        >
                          Download Ubuntu →
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Miscellaneous */}
                  <div>
                    <h2 className="font-display text-4xl font-bold text-[#D4AF37] mb-8">Miscellaneous</h2>
                    
                    <div className="bg-[#2B2B2B] border-l-4 border-[#D4AF37] p-6 rounded-lg hover:shadow-lg transition-shadow">
                      <h3 className="text-xl font-bold text-[#F5F5DC] mb-3">References/Library Online</h3>
                      <p className="text-[#F5F5DC]/80 mb-4">The Internet Archive's Guggenheim Library Collection - Free texts, books, and documents available for download, borrowing, and streaming.</p>
                      <a
                        href="https://archive.org/details/guggenheimlibrary"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-fit inline-block bg-[#8B1538] hover:bg-[#A91E4A] text-white font-bold px-6 py-2 rounded-lg transition-colors"
                      >
                        Browse Archive.org →
                      </a>
                    </div>
                  </div>
                </div>
              </section>

  );
}

export default Resources;