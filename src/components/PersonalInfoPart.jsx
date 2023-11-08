function PersonalInfoPart({ data, setData }) {
  return (
    <div className="space-y-6">
      {/* FirstName  Section */}

      <div className="mt-1">
        <label className="block text-sm font-medium text-gray-700 pb-3">
          First Name
        </label>
        <input
          onChange={(e) => setData({ ...data, firstName: e.target.value })}
          value={data.firstName}
          type="text"
          id="firstName"
          className="block h-10 w-full appearance-none rounded-md border border-gray-300 px-3 py-2
           placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      {/* LastName Section */}

      <div className="mt-1">
        <label className="block text-sm font-medium text-gray-700 pb-3">
          Last Name
        </label>
        <input
          onChange={(e) => setData({ ...data, lastName: e.target.value })}
          value={data.lastName}
          type="text"
          id="lastName"
          className="block h-10 w-full appearance-none rounded-md border border-gray-300 px-3 py-2
           placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      {/*  PhoneNumber Section */}

      <div className="mt-1">
        <label className="block text-sm font-medium text-gray-700 pb-3">
          Phone Number
        </label>
        <input
          onChange={(e) => setData({ ...data, phoneNumber: e.target.value })}
          value={data.phoneNumber}
          type="text"
          id="phoneNumber"
          className="block h-10 w-full appearance-none rounded-md border border-gray-300 px-3 py-2
           placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        />
      </div>
    </div>
  );
}
export default PersonalInfoPart;
