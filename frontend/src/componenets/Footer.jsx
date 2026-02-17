const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto py-8 border-t border-gray-100 text-center">
      <p className="text-sm text-gray-400 font-medium">
        &copy; {currentYear} Academic Student Portal. All rights reserved.
      </p>
      <div className="flex justify-center gap-6 mt-2">
        <a
          href="#"
          className="text-xs text-gray-400 hover:text-blue-600 transition-colors"
        >
          Privacy Policy
        </a>
        <a
          href="#"
          className="text-xs text-gray-400 hover:text-blue-600 transition-colors"
        >
          Terms of Service
        </a>
        <a
          href="#"
          className="text-xs text-gray-400 hover:text-blue-600 transition-colors"
        >
          Support
        </a>
      </div>
    </footer>
  );
};

export default Footer;
