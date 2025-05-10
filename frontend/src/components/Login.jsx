import { useNavigate } from "react-router-dom";

export default function Login({ isOpen, onClose }){

    const navigate = useNavigate();

    function handleLogin(){
        navigate("/Dashboard")
    }
 
    return (
        <>
        {/* Backdrop */}
        <div
          className={`fixed inset-0 bg-black/40 transition-opacity duration-300 z-40 ${
            isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={onClose}
        />
  
        {/* Slide-in Panel */}
        <div
          className={`fixed top-0 right-0 h-full w-full sm:w-1/2 lg:w-1/3 bg-blue-50 shadow-xl z-50 transform transition-transform duration-500 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-8 h-full flex flex-col justify-center relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
            >
              &times;
            </button>
            <h2 className="text-3xl font-semibold mb-6 text-gray-800">Hello! Welcome 👋</h2>
  
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  placeholder="your@example.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-100"
                />
              </div>
              <button onClick={handleLogin}
                className="w-full bg-green-400  py-2 rounded-lg hover:bg-green-500 transition duration-300"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </>
      );
    };