const ProfileSection = () => {
  return (
    <main className="bg-white w-full max-w-7xl mx-auto">
      <section className="lg:px-28 px-4 lg:pt-10 pb-10 lg:pb-28">
        <div className="w-fit lg:w-full flex flex-col lg:flex-row justify-start lg:justify-between items-center gap-4 lg:gap-0 ">
          <p className="poppins lg:mb-16">
            <span className="text-[#808080]">Home /</span> My Account
          </p>
          <p className="poppins lg:mb-16">
            Welcome! <span className="text-[#db4444]">Al Emran</span>
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 mt-6 lg:mt-0">
          {/* left */}
          <div className="w-full lg:w-3/12 flex flex-col gap-3">
            <h5 className="text-base font-medium poppins">Manage My Account</h5>
            <div className="flex flex-col gap-1.5 justify-center px-4">
              <a href className="text-sm poppins hover:text-[#DB4444]">
                My Profile
              </a>
              <a href className="text-sm poppins hover:text-[#DB4444]">
                Address Book
              </a>
              <a href className="text-sm poppins hover:text-[#DB4444]">
                My Payment Options
              </a>
            </div>
            <h5 className="text-base font-medium poppins">My Orders</h5>
            <div className="flex flex-col gap-1.5 justify-center px-4 ">
              <a href className="text-sm poppins hover:text-[#DB4444]">
                My Returns
              </a>
              <a href className="text-sm poppins hover:text-[#DB4444]">
                My Cancellations
              </a>
            </div>
            <h5 className="text-base font-medium poppins">My WishList</h5>
          </div>
          {/* right */}
          <div className="w-full lg:w-9/12 flex flex-col gap-6 px-3 lg:px-14 py-8 shadow">
            <h3 className="text-[#DB4444] text-xl font-medium poppins">
              Edit Your Profile
            </h3>
            {/* name */}
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-col flex gap-2 w-full lg:w-1/2">
                <h6 className="text-base poppins">First Name</h6>
                <input
                  type="text"
                  name
                  id
                  placeholder="Md"
                  className="bg-[#F5F5F5] pl-4 py-2 rounded poppins text-[#9CA3AF]"
                />
              </div>
              <div className="flex-col flex gap-2 w-full lg:w-1/2">
                <h6 className="text-base poppins">Last Name</h6>
                <input
                  type="text"
                  name
                  id
                  placeholder="Rimel"
                  className="bg-[#F5F5F5] pl-4 py-2 rounded poppins text-[#9CA3AF]"
                />
              </div>
            </div>
            {/* email & address */}
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-col flex gap-2 w-full lg:w-1/2">
                <h6 className="text-base poppins">Email</h6>
                <input
                  type="email"
                  name
                  id
                  placeholder="rimel1111@gmail.com"
                  className="bg-[#F5F5F5] pl-4 py-2 rounded poppins text-[#9CA3AF]"
                />
              </div>
              <div className="flex-col flex gap-2 w-full lg:w-1/2">
                <h6 className="text-base poppins">Address</h6>
                <input
                  type="text"
                  name
                  id
                  placeholder="Kingston, 5236, United State"
                  className="bg-[#F5F5F5] pl-4 py-2 rounded poppins text-[#9CA3AF]"
                />
              </div>
            </div>
            {/* password change */}
            <div className="flex flex-col gap-3">
              <h6 className="text-base poppins">Password Changes</h6>
              <input
                type="password"
                name
                id
                placeholder="Current Password "
                className="bg-[#F5F5F5] pl-6 py-2 rounded poppins text-[#9CA3AF]"
              />
              <input
                type="password"
                name
                id
                placeholder="New Password "
                className="bg-[#F5F5F5] pl-6 py-2 rounded poppins text-[#9CA3AF]"
              />
              <input
                type="password"
                name
                id
                placeholder="Confirm New Password "
                className="bg-[#F5F5F5] pl-6 py-2 rounded poppins text-[#9CA3AF]"
              />
            </div>
            {/* button */}
            <div className="flex flex-row justify-end items-center gap-6">
              <p className="text-base font-medium cursor-pointer">Cancel</p>
              <button
                type="submit"
                className="py-3 px-8 rounded-md bg-[#db4444] text-white text-base font-medium poppins"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProfileSection;
