import React from "react";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        blanditiis earum voluptas distinctio, laborum libero cupiditate aperiam
        quia veniam. Pariatur animi explicabo quasi alias iure praesentium
        cupiditate itaque accusamus voluptate. Impedit tempora corrupti quisquam
        voluptatibus asperiores quia, magni quos, blanditiis placeat repellat
        enim obcaecati nemo esse eos voluptatum, porro commodi architecto.
        Adipisci earum eaque natus possimus dolor tenetur fugiat vitae! Tenetur
        corrupti accusantium facilis natus, minus id mollitia quod, nobis quos,
        dicta a molestias ab autem illum dolor quis porro. Voluptates eveniet,
        sint expedita ipsam odit esse! Quasi, omnis earum. Esse tempore
        molestias quam porro natus excepturi saepe eius, temporibus alias, odit,
        quisquam facilis. Provident, amet eius consequuntur voluptatibus
        deserunt voluptatem, ullam exercitationem fuga omnis quod quae minima
        quia. Nobis. Atque beatae ipsum cupiditate magnam animi, incidunt
        laboriosam est hic. Autem neque nostrum officiis voluptatum quas sit
        dolorem dicta! Corrupti a, excepturi nemo culpa inventore numquam ad
        tempora odio quibusdam. Atque, ratione expedita? Rerum, sunt veritatis.
        Hic accusamus harum ullam repudiandae excepturi optio distinctio alias
        qui enim doloribus sint, vitae a! Aspernatur nam corporis sed velit
        veniam illo expedita sapiente. Veniam, ad at eius blanditiis voluptas
        error quod dolorem totam eos sapiente qui non explicabo porro voluptatum
        nesciunt facilis eveniet quia, itaque consequatur nemo iusto magni.
        Fugit, fugiat. Omnis, facere?
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10"></div>
    </>
  );
};

export default About;
