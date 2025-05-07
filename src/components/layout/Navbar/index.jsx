import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FiChevronRight } from 'react-icons/fi';


const megaMenuData = {
  'Products': [
    {
      heading: 'Source and engage',
      items: [
        {
          title: 'LinkedIn Recruiter',
          description: 'Find and hire qualified candidates fast',
          href: '#',
        },
        {
          title: 'Recruiter Lite',
          description: 'Recruiter for low-volume hiring',
          href: '#',
        },
        {
          title: 'LinkedIn Talent Insights',
          description: 'Real-time data for your hiring decisions',
          href: '#',
        },
      ],
     
    },
    {
      heading: 'Post and attract',
      items: [
        {
          title: 'LinkedIn Jobs',
          description: 'Target your jobs to the right people',
          href: '#',
        },
        {
          title: 'LinkedIn Career Pages',
          description: 'Attract talent with employer branding',
          href: '#',
        },
      
      ],
     
    },
    {
      heading: 'Company size',
      items: [
        {
          title: 'Enterprises',
          description: '',
          href: '#',
        },
        {
          title: 'Recruiter Lite',
          description: 'Recruiter for low-volume hiring',
          href: '#',
        },
        {
          title: 'LinkedIn Talent Insights',
          description: 'Real-time data for your hiring decisions',
          href: '#',
        },
      ],
     
    },
    {
      heading: 'Company type',
      items: [
        {
          title: 'LinkedIn Recruiter',
          description: 'Find and hire qualified candidates fast',
          href: '#',
        },
       
        {
          title: 'LinkedIn Talent Insights',
          description: 'Real-time data for your hiring decisions',
          href: '#',
        },
      ],
     
    },
  ],
  'Product Comparison': [],
  'Resources & Support': [
    {
      heading: 'Education',
      items: [
        {
          title: 'Resource Library',
          description: '',
          href: '#',
        },
        {
          title: 'Talent Blog',
          description: '',
          href: '#',
        },
        {
          title: 'Case Studies',
          description: '',
          href: '#',
        },
        {
          title: 'Job Description Templates',
          description: '',
          href: '#',
        },
        {
          title: 'Product FAQ',
          description: '',
          href: '#',
        },
      ],
    },
    {
      heading: 'Coustomers',
      items: [
        {
          title: 'Sign in to Recruiter',
          description: '',
          href: '#',
        },
        {
          title: 'Manage Online Job Posts',
          description: '',
          href: '#',
        },
        {
          title: 'Hiring Integrations',
          description: '',
          href: '#',
        },
        {
          title: 'Customer Learning Center',
          description: '',
          href: '#',
        },
        {
          title: 'Community',
          description: '',
          href: '#',
        },
        {
          title: 'Product Updates',
          description: '',
          href: '#',
        },
      ],
    },
    {
      heading: 'Support',
      items: [
        {
          title: 'Open a Support Ticket',
          description: '',
          href: '#',
        },
        {
          title: 'View General Support Topics',
          description: '',
          href: '#',
        },
      
      ],
    },
   
  ],
};

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isHoveringNav, setIsHoveringNav] = useState(false);
  const [isHoveringMenu, setIsHoveringMenu] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(null);

  const navItems = Object.keys(megaMenuData);
  const shouldShowMegaMenu = isHoveringNav || isHoveringMenu;

  const toggleSubmenu = (item) => {
    setMobileSubmenuOpen(prev => (prev === item ? null : item));
  };

  return (
    <header className="relative z-50 w-full">
      <div className={`fixed top-[40px] left-0 w-full z-40 bg-white ${shouldShowMegaMenu ? '' : 'border-b-3 border-[#2973B1]'} shadow-sm transition-all duration-300`}>
        <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 py-4">
          <div className="flex items-center space-x-2">
            <img src="/your-logo.png" className="h-6" alt="logo" />
            <span className="text-xl font-semibold text-[#2973B1]">BrandName</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 font-semibold text-[#2973B1] text-sm">
            {navItems.map((name) => (
              <div
                key={name}
                className="relative"
                onMouseEnter={() => {
                  setActiveMenu(name);
                  setIsHoveringNav(true);
                }}
                onMouseLeave={() => setTimeout(() => setIsHoveringNav(false), 100)}
              >
                <a href="#" className="hover:text-[#2973B1] relative group transition duration-200 font-bold">
                  {name}
                  <span className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-0.5 bg-[#2973B1] transition-all duration-300"></span>
                </a>
              </div>
            ))}
            <div className="border-l border-gray-900 h-10 opacity-25 mr-4 "></div>
            <a href="#" className="border border-[#2973B1] px-4 py-2 rounded hover:bg-blue-50 font-semibold">
              Contact Us
            </a>
          </nav>

          {/* Mobile Menu Icon */}
          <div className="lg:hidden flex items-center">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-[#2973B1] text-2xl focus:outline-none">
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white px-6 py-4 shadow-md space-y-2">
            {navItems.map((name) => (
              <div key={name}>
                <button
                  onClick={() => toggleSubmenu(name)}
                  className="w-full text-left flex justify-between items-center text-[#2973B1] font-semibold py-2"
                >
                  <span>{name}</span>
                  <FiChevronRight className={`transition-transform ${mobileSubmenuOpen === name ? 'rotate-90' : ''}`} />
                </button>

                {/* Submenu */}
                {mobileSubmenuOpen === name && megaMenuData[name]?.length > 0 && (
                  <div className="ml-4 space-y-3">
                    {megaMenuData[name].map((section, idx) => (
                      <div key={idx}>
                        <h3 className="text-sm font-bold text-gray-700 mb-1">{section.heading}</h3>
                        {section.items.map((item, index) => (
                          <a key={index} href={item.href} className="block text-sm text-gray-600 leading-snug">
                            <span className="font-semibold text-[#2973B1]">{item.title}</span><br />
                            <span className="text-xs">{item.description}</span>
                          </a>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Contact Us */}
            <a href="#" className="block text-center mt-4 border border-[#2973B1] px-4 py-2 rounded hover:bg-blue-50 font-semibold">
              Contact Us
            </a>
          </div>
        )}
      </div>

      {/* Desktop Mega Menu */}
      <div
        className={`hidden lg:block fixed top-[110px] left-0 w-full z-30 transform origin-top transition-all duration-400 ease-in border-b-3 border-[#2973B1] ${
          activeMenu && shouldShowMegaMenu ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'
        }`}
        style={{ backgroundColor: '#f5f5f5' }}
        onMouseEnter={() => setIsHoveringMenu(true)}
        onMouseLeave={() => {
          setIsHoveringMenu(false);
          setTimeout(() => !isHoveringNav && setActiveMenu(null), 200);
        }}
      >
        {activeMenu && megaMenuData[activeMenu]?.length > 0 && (
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6 py-12">
            {megaMenuData[activeMenu].map((section, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">{section.heading}</h3>
                {section.items.map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <a href={item.href} className="text-[#2973B1] font-semibold hover:underline">
                      {item.title}
                    </a>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;










