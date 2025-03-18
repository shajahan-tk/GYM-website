const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold flex items-center">
            <span className="text-white">GY</span>
            <span className="text-orange-500">M</span>
          </h2>
          <p className="text-gray-400 mt-3 text-sm">
  Unlock your full potential with the right training and mindset. Whether you're lifting, running, or stretching, every rep brings you closer to your fitness goals. Stay strong, stay committed, and push beyond limits!
</p>

          {/* Social Icons */}
          <div className="flex space-x-3 mt-4">
            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-youtube"></i></a>
            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-gray-400 hover:text-white"><i className="far fa-envelope"></i></a>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-bold mb-3">Useful Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Blog</a></li>
            <li><a href="#" className="hover:text-white">Classes</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-bold mb-3">Support</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">Login</a></li>
            <li><a href="#" className="hover:text-white">My Account</a></li>
            <li><a href="#" className="hover:text-white">Subscribe</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Tips & Guides */}
        <div>
          <h3 className="text-lg font-bold mb-3">Tips & Guides</h3>
          <ul className="space-y-3">
            <li>
              <a href="#" className="text-gray-400 hover:text-white block">
                <strong>Physical fitness may help prevent depression, anxiety</strong>
              </a>
              <p className="text-xs text-gray-500">3 min read | 20 Comments</p>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white block">
                <strong>Fitness: The best exercise to lose belly fat...</strong>
              </a>
              <p className="text-xs text-gray-500">3 min read | 20 Comments</p>
            </li>
          </ul>
        </div>

      </div>
      {/* Bottom Section */}
      <div className="text-center mt-8 text-gray-500 text-sm border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} GYM. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
