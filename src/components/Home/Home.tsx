import { FaLinkedinIn, FaFacebook } from "react-icons/fa6";

import img from "../../assets/abdo.jpeg";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const textVariants = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center lg:px-8 sm:px-6 px-4 mt-20 md:mt-0 overflow-hidden"
    >
      <div>
        <h3 className="flex items-center justify-center gap-2 text-center text-gray-600 mb-4 font-bold relative top-0  md:-top-10">
          <span className=" w-4 h-4 left-91.25 top-1 rounded-full  bg-green-600 animate-pulse"></span>
          Available for Opportunities
        </h3>
        <div className="flex justify-between items-center gap-8 md:flex-row flex-col">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.1 }}
            className="w-80  h-96 overflow-hidden rounded-full"
          >
            <img
              src={img}
              alt="my image"
              className="object-cover cursor-pointer"
              decoding="async"
              fetchPriority="high"
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={containerVariants}
            viewport={{ once: false }}
            className=" capitalize text-center space-y-4 font-bold"
          >
            <motion.p
              variants={textVariants}
              className="text-2xl text-gray-600 "
            >
              hello, i'm
            </motion.p>
            <motion.h3 variants={textVariants} className="text-5xl">
              Abdelrahman Said
            </motion.h3>
            <motion.p
              variants={textVariants}
              className="text-2xl text-gray-600 "
            >
              Electrical Technical Office Engineer
            </motion.p>

            <div className="flex justify-center gap-5 my-9">
              <a
                className="p-3 hover:text-blue-600 rounded-full bg-[#8ba1a14d] hover:shadow-black hover:shadow-xl hover:scale-110 transition duration-300"
                href="https://www.linkedin.com/in/abdelrahman-said-361096308/"
                target="_blank"
              >
                <FaLinkedinIn size={19} />
              </a>
              <a
                className="p-3 hover:text-blue-600 rounded-full bg-[#8ba1a14d] hover:shadow-black hover:shadow-xl hover:scale-110 transition duration-300"
                href="https://web.facebook.com/ABODASAID0"
                target="_blank"
              >
                <FaFacebook size={19} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
