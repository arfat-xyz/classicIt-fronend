import { Link } from "react-router-dom";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/user/userSlice";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Footer = () => {
  const email = useSelector(selectUser);
  return (
    <>
      <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link to={"/"} className="flex items-center mb-4 sm:mb-0">
              <LazyLoadImage
                alt={"logo"}
                src={`https://classicit.com.bd/assets/image/logo.png`} // use normal <img> attributes as props
                // width={image.width}
                className="h-8 mr-3"
              />
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <Link to={"/"} className="mr-4 hover:underline md:mr-6 ">
                  Home
                </Link>
              </li>
              {!email ? (
                <>
                  <li>
                    <Link
                      to={"/signin"}
                      className="mr-4 hover:underline md:mr-6 "
                    >
                      Sign In
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/signup"}
                      className="mr-4 hover:underline md:mr-6 "
                    >
                      Sign Up
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link
                      to={"/logout"}
                      className="mr-4 hover:underline md:mr-6 "
                    >
                      Logout
                    </Link>
                  </li>
                </>
              )}
            </ul>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <Link
                  to={"https://github.com/arfat-xyz"}
                  className="mr-4 hover:underline md:mr-9 "
                >
                  <BsGithub size="30" />
                </Link>
              </li>
              <li>
                <Link
                  to={"https://www.linkedin.com/in/arfat-rahman/"}
                  className="mr-4 hover:underline md:mr-9 "
                >
                  <BsLinkedin size="30" />
                </Link>
              </li>
              <li>
                <Link
                  to={"https://www.facebook.com/arfat.xyz"}
                  className="mr-4 hover:underline md:mr-9 "
                >
                  <BsFacebook size="30" />
                </Link>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023 <Link to={"https://www.arfat.app/"}>Arfat Rahman</Link>. All
            Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
