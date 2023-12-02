import './App.css';
import { AiFillAlipayCircle } from "react-icons/ai";
import { motion } from "framer-motion";


function App() {
  return (
    <motion.h1 
      className="text-3xl font-bold underline text-red-500 bg-blue-500"
      animate={{
        opacity: 0,
        transition: {
          delay: 1
        }
      }}
    >
      Hello world! <AiFillAlipayCircle />
    </motion.h1>
  );
}

export default App;
