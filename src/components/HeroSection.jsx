import React from 'react';

const HeroSection = () => {
    return (
        <section className="bg-gray-900 text-white py-16">
            <div className="container mx-auto flex flex-col lg:flex-row items-center px-4 lg:px-8">
                {/* Left Side - Text */}
                <div className="lg:w-1/2">
                    <h1 className="text-5xl font-bold mb-4">Run JavaScript Everywhere</h1>
                    <p className="text-lg mb-8">
                        Node.js® is a free, open-source, cross-platform JavaScript runtime environment that lets developers create servers, web apps, command line tools and scripts.
                    </p>
                    <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded inline-flex items-center">
                        <span>Download Node.js (LTS)</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8l8 8 8-8" />
                        </svg>
                    </button>
                    <p className="mt-4 text-sm text-gray-400">
                        Downloads Node.js v22.11.0<sup>1</sup> with long-term support. Node.js can also be installed via <a href="#" className="text-green-500 underline">package managers</a>.
                    </p>
                    <p className="mt-2 text-sm text-gray-400">
                        Want new features sooner? Get <a href="#" className="text-green-500 underline">Node.js v23.1.0</a> instead.
                    </p>
                </div>

                {/* Right Side - Code Block */}
                <div className="lg:w-1/2 mt-8 lg:mt-0 lg:ml-8 bg-gray-800 p-6 rounded-md">
                    <div className="flex items-center justify-between border-b border-gray-700 pb-3 mb-4">
                        <span className="text-green-500">Create an HTTP Server</span>
                        <button className="bg-gray-700 hover:bg-gray-600 text-gray-300 py-1 px-3 rounded text-sm">
                            Copy to clipboard
                        </button>
                    </div>
                    <pre className="text-sm text-gray-300">
                        <code>
                            {`// server.mjs
import { createServer } from 'node:http';

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!\\n');
});

// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});

// run with \`node server.mjs\`
              `}
                        </code>
                    </pre>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
