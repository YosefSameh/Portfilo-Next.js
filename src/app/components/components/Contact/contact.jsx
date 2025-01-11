import { animate } from "motion";
import "./contact.css";
import { AnimatePresence, motion, useInView, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import emailjs from '@emailjs/browser';
const Contact = () => {
  const [showPhone, setShowPhone] = useState(true);


  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPhone(false); 
    }, 1400);

    return () => clearTimeout(timer);
  }, []);



  const variants = {
    initial: {
      y: 500,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };
  const form = useRef();
  const [error , setError]  =useState("")
  const [success , setSuccess]  =useState("")
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
  .sendForm('service_ujwipmr', 'template_q4g3zsv', form.current, 'uvrwhjP6DuD0Nxmc5')
  .then(
    () => {
      setSuccess(true);
      console.log("Email sent successfully");
    },
    (error) => {
      console.log("Error:", error.text);
      setError(error.text);
    },
  );

  };
  return (
    <motion.div
      id='contact'
      className="contact container"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContiner" variants={variants}>
        <motion.h1 variants={variants}>Lets Work Together</motion.h1>
        <motion.div variants={variants} className="item">
          <h2>Mail</h2>
          <span>YosefSameh.368@gmail.com</span>
        </motion.div>
        <motion.div variants={variants} className="item">
          <h2>Adress</h2>
          <span>Egypt Cairo</span>
        </motion.div>
        <motion.div variants={variants} className="item">
          <h2>Phone</h2>
          <span>01553044275</span>
        </motion.div>
      </motion.div>

<div className="formContiner">
      {showPhone && (
        <motion.div
          className="phoneSvg"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 1 }}
        >
          <motion.img
            // src="https://www.svgrepo.com/show/527290/phone-calling.svg"
            // width={310}
            // height={310}
            alt=""
          />
        </motion.div>
      )}

      <motion.form
      ref={form} 
      onSubmit={sendEmail}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <input type="text" placeholder="Name" name="name" />
        <input type="email" placeholder="Email" name="email" />
        <textarea  rows={8} placeholder="Message" name="message" />
        <motion.button 
        className="rounded-md"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300 }}
                  >Submit</motion.button>

        {error && "Failed"}
        {success && "Success"}
      </motion.form>
    </div>


    </motion.div>
  );
};

export default Contact;
