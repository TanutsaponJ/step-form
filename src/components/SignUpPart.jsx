function SignUpPart({ data, setData }) {
  return (
    <div className="space-y-6">
      {/* Username  Section */}

      <div className="mt-1">
        <label className="block text-sm font-medium text-gray-700 pb-3">
          Username
        </label>
        <input
          onChange={(e) => setData({ ...data, username: e.target.value })}
          value={data.username}
          type="text"
          id="username"
          className="block h-10 w-full appearance-none rounded-md border border-gray-300 px-3 py-2
           placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      {/* E-mail Section */}

      <div className="mt-1">
        <label className="block text-sm font-medium text-gray-700 pb-3">
          Email
        </label>
        <input
          onChange={(e) => setData({ ...data, email: e.target.value })}
          value={data.email}
          type="email"
          id="email"
          className="block h-10 w-full appearance-none rounded-md border border-gray-300 px-3 py-2
           placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      {/*  Password Section */}

      <div className="mt-1">
        <label className="block text-sm font-medium text-gray-700 pb-3">
          Password
        </label>
        <input
          onChange={(e) => setData({ ...data, password: e.target.value })}
          value={data.password}
          type="password"
          id="password"
          className="block h-10 w-full appearance-none rounded-md border border-gray-300 px-3 py-2
           placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      {/* Confirm Password */}

      <div className="mt-1">
        <label className="block text-sm font-medium text-gray-700 pb-3">
          Confirm Password
        </label>
        <input
          onChange={(e) =>
            setData({ ...data, confirmPassword: e.target.value })
          }
          value={data.confirmPassword}
          type="password"
          id="confirm-password"
          className="block h-10 w-full appearance-none rounded-md border border-gray-300 px-3 py-2
           placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        />
      </div>
    </div>
  );
}
export default SignUpPart;
