'use client'

import Image from "next/image";
import Link from "next/link";
import { CircleUser } from "lucide-react";
import React from "react";

export default function Home() {
  return (
    <>
      <div className="min-h-screen">
        {/* Main content */}
        <div className="container">
          {/* Header with navigation */}
          <header className="header">
            <div className="profile-header">
              <div className="profile-icon">
                <CircleUser className="icon" size={30} />
              </div>
              <div>
                <h1 className="name">JANITH KAVISHAN</h1>
                <p className="subtitle">Computer Science Student</p>
              </div>
            </div>

            <nav className="nav">
              <Link href="/resume" className="nav-link">
                Resume
              </Link>
              <span className="separator">|</span>
              <Link href="/research" className="nav-link">
                Research
              </Link>
              <span className="separator">|</span>
              <Link href="/outreach" className="nav-link">
                Outreach
              </Link>
              <span className="separator">|</span>
              <Link href="/personal" className="nav-link">
                Personal
              </Link>
            </nav>
          </header>

          {/* Main profile section */}
          <main className="main">
            {/* Profile image */}
            <div className="image-container">
              <Image
                src="/jk1.jpg"
                alt="Dalya Baron"
                width={300}
                height={300}
                className="profile-image"
                priority
              />
            </div>

            {/* Profile content */}
            <div className="content">
              <h2 className="main-name">Janith Kavishan</h2>
              <h3 className="section-title">An overview of my background:</h3>
              <p className="description">
                I am a Computer Science undergraduate at the University of Ruhuna,
                with a strong interest in software and web development.
                I have hands-on experience in building web applications 
                and a solid foundation in programming 
                languages such as Java, PHP, and C#. 
                I am passionate about learning new technologies, solving real-world 
                problems through code, and contributing to collaborative development environments. 
                My goal is to grow as a software developer and apply 
                my technical skills to create efficient, user-focused solutions.
              </p>

              {/* Mobile navigation circles 
              <div className="mobile-nav">
                <Link href="/resume" className="nav-circle resume">
                  <span>Resume</span>
                </Link>
                <Link href="/research" className="nav-circle research">
                  <span>Research</span>
                </Link>
                <Link href="/outreach" className="nav-circle outreach">
                  <span>Outreach</span>
                </Link>
                <Link href="/personal" className="nav-circle personal">
                  <span>Personal</span>
                </Link>
              </div>*/}
            </div>
          </main>
        </div>
      </div>

      {/* Scoped CSS */}
      <style jsx>{`
        .min-h-screen {
          min-height: 100vh;
          background: linear-gradient(135deg, #a3d9d3 0%, #66b3a6 100%);
          position: relative;
          overflow: hidden;
        }

        /* Wave background effect */
        .min-h-screen::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgba(255,255,255,0.1)" fill-opacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,245.3C960,224,1056,160,1152,149.3C1248,139,1344,181,1392,202.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>') repeat-x bottom;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 4rem;
        }

        .profile-header {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .profile-icon {
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 50%;
          background-color: #b3e5e0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .icon {
          color: #2c7a74;
        }

        .name {
          font-size: 1.25rem;
          font-weight: bold;
          text-transform: uppercase;
          color: #000;
        }

        .subtitle {
          font-size: 0.875rem;
          color: #444;
        }

        .nav {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .nav-link {
          font-size: 1rem;
          font-weight: 500;
          text-transform: uppercase;
          color: #000;
          text-decoration: none;
        }

        .nav-link:hover {
          text-decoration: underline;
        }

        .separator {
          color: #000;
        }

        .main {
          display: flex;
          flex-direction: row;
          gap: 3rem;
          align-items: flex-start;
        }

        .image-container {
          width: 18rem;
          height: 18rem;
          border-radius: 50%;
          overflow: hidden;
          flex-shrink: 0;
        }

        .profile-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .content {
          max-width: 36rem;
        }

        .main-name {
          font-size: 3rem;
          font-weight: bold;
          text-transform: uppercase;
          margin-bottom: 1.5rem;
          color: #000;
        }

        .section-title {
          font-size: 1.5rem;
          font-weight: bold;
          text-transform: uppercase;
          margin-bottom: 1rem;
          color: #000;
        }

        .description {
          font-size: 1rem;
          color: #333;
          line-height: 1.75;
          margin-bottom: 2rem;
        }

        .mobile-nav {
          display: flex;
          justify-content: flex-start;
          gap: 1rem;
          margin-top: 2rem;
        }

        .nav-circle {
          width: 6rem;
          height: 6rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: opacity 0.3s;
        }

        .nav-circle:hover {
          opacity: 0.9;
        }

        .nav-circle span {
          font-size: 1rem;
          font-weight: bold;
          color: #000;
          text-transform: uppercase;
        }

        .resume {
          background-color: #b8d95a;
        }

        .research {
          background-color: #f39c12;
        }

        .outreach {
          background-color: #5ecfcf;
        }

        .personal {
          background-color: #cccccc;
        }

        @media (max-width: 768px) {
          .main {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .image-container {
            width: 16rem;
            height: 16rem;
          }

          .mobile-nav {
            justify-content: center;
          }

          .nav {
            display: none;
          }
        }
      `}</style>
    </>
  );
}