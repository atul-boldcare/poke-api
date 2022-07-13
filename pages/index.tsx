import type { NextPage } from "next";
import Pokemon from "../components/Pokemon";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Pokemon />
        </div>
    );
};

export default Home;
