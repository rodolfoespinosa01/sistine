

function Header() {
    return (
        <header className="bg-amber-50 text-black p-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center space-x-4">
        {/* <div className="h-8 w-8 bg-gray-300 rounded-full"></div> */}
        <span className="text-xl font-bold">Sistine</span>
      </div>

      {/* Navigation */}
      <nav className="flex items-center space-x-4">
        <ul className="flex space-x-4">
          <li className="hover:text-gray-400"><a href="/">Home</a></li>
          <li className="hover:text-gray-400"><a href="/">Explore</a></li>
          <li className="hover:text-gray-400"><a href="/">Cart</a></li>
        </ul>
        <div className="flex space-x-4">
          <a href="/" className="hover:text-gray-400">Log In</a>
          <a href="/" className="hover:text-gray-400">Sign Up</a>
        </div>
      </nav>
    </header>
    );
}

export default Header