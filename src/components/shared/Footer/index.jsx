const Footer = () => {
  return (
    <div>
      <footer className="w-full bg-black">
        <div className="max-w-7xl mx-auto pt-16 lg:pt-10">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 items-start justify-between px-8 lg:px-28 lg:mb-10">
            {/* col 1 */}
            <div className="w-fit flex flex-col gap-3 lg:gap-5">
              <h3 className="text-3xl font-bold text-white">Exclusive</h3>
              <h4 className="text-white text-xl font-semibold">Subscribe</h4>
              <p className="text-white text-[16px] poppins">
                Get 10% of your first order
              </p>
              <div className="relative">
                <input
                  className="bg-transparent border-2 border-[#FFF] py-3 pl-4 pr-6 rounded-md outline-none text-white"
                  type="text"
                  name
                  id
                  placeholder="Enter your Email"
                />
                <img
                  src="./assets/icon/icon-send.svg"
                  alt
                  className="absolute top-3.5 right-3 h-6 cursor-pointer"
                />
              </div>
            </div>
            {/* col 2 */}
            <div className="w-fit flex flex-col gap-3 lg:gap-5">
              <h4 className="text-white text-2xl font-semibold">Support</h4>
              <p className="text-white text-base poppins">
                111 Bijoy sarani, Dhaka, <br />
                DH 1515, Bangladesh.
              </p>
              <p className="text-white poppins">exclusive@gmail.com</p>
              <p className="text-white poppins">+88015-88888-9999</p>
            </div>
            {/* col 3 */}
            <div className="w-fit flex flex-col gap-3 lg:gap-4">
              <h4 className="text-white text-2xl font-semibold">Account</h4>
              <a href="./profile.html" className="text-white text-base">
                My Account
              </a>
              <a href="./login.html" className="text-white text-base">
                Login/Register
              </a>
              <a href="./cart.html" className="text-white text-base">
                Cart
              </a>
              <a href="./wishlist.html" className="text-white text-base">
                Wishlist
              </a>
              <a href="./checkout.html" className="text-white text-base">
                Shop
              </a>
            </div>
            {/* col 4 */}
            <div className="w-fit flex flex-col gap-3 lg:gap-4">
              <h4 className="text-white text-2xl font-semibold">Quick Link</h4>
              <a href className="text-white text-base">
                Privacy Policy
              </a>
              <a href className="text-white text-base">
                Terms Of Use
              </a>
              <a href className="text-white text-base">
                FAQ
              </a>
              <a href="./contact.html" className="text-white text-base">
                Contact
              </a>
            </div>
            {/* col 5 */}
            <div className="w-fit flex flex-col gap-3 lg:gap-5">
              <h4 className="text-white text-xl font-medium">Download App</h4>
              <p className="text-[#afafaf] text-xs font-medium poppins">
                Save $3 with App New User Only
              </p>
              <div className="flex flex-row gap-3">
                <div className>
                  <img src="./assets/image/Qr Code.svg" className="h-20" alt />
                </div>
                <div className="flex flex-col gap-2">
                  <a href>
                    <img
                      src="./assets/image/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo.svg"
                      className="w-28"
                      alt
                    />
                  </a>
                  <a href>
                    <img
                      src="./assets/image/AppStore.svg"
                      className="w-28"
                      alt
                    />
                  </a>
                </div>
              </div>
              <div className="flex flex-row gap-7">
                <a href>
                  <img
                    src="./assets/icon/Icon-Facebook.svg"
                    alt
                    className="h-8"
                  />
                </a>
                <a href>
                  <img
                    src="./assets/icon/Icon-Twitter.svg"
                    alt
                    className="h-8"
                  />
                </a>
                <a href>
                  <img
                    src="./assets/icon/icon-instagram (1).svg"
                    alt
                    className="h-8"
                  />
                </a>
                <a href>
                  <img
                    src="./assets/icon/Icon-Linkedin (1).svg"
                    alt
                    className="h-8"
                  />
                </a>
              </div>
            </div>
          </div>
          <p className="text-[#3D3D3D] text-sm lg:text-xl py-2 text-center border-t border-[#141414] poppins">
            © Copyright @alemran22 2024. All right reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
