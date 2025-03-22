import styles from "./HeroStyles.module.css";
import profileImg from "../../assets/profile-picture.PNG";
import Icon from "@mdi/react";
import { mdiWhiteBalanceSunny } from "@mdi/js";
import { mdiMoonWaningCrescent } from "@mdi/js";
import { mdiLinkedin } from "@mdi/js";
import { mdiGithub } from "@mdi/js";
import { mdiSpotify } from "@mdi/js";
import CV from "../../assets/Okan-Altun-cv.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon =
    theme === "light" ? mdiWhiteBalanceSunny : mdiMoonWaningCrescent;
  const socialIconColor = theme === "light" ? "#000" : "#fff";

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={profileImg}
          alt="Profile Picture of Okan Altun"
        />
        <Icon
          path={themeIcon}
          size={1}
          className={styles.colorMode}
          onClick={toggleTheme}
          color="var(--text-color)"
        />
      </div>
      <div className={styles.info}>
        <h1>
          Okan
          <br />
          Altun
        </h1>
        <h2>Junior Software Developer</h2>
        <span>
          <a
            href="https://www.linkedin.com/in/okan-altun-478a30336/"
            target="_blank"
          >
            <Icon path={mdiLinkedin} size={1.5} color={socialIconColor} />
          </a>
          <a href="https://github.com/itsYuuuka" target="_blank">
            <Icon path={mdiGithub} size={1.5} color={socialIconColor} />
          </a>
          {/* <a
            href="https://open.spotify.com/user/wm9hzk1b3o0vt02yjmk683jrj?si=779e88c2fdd84ebf"
            target="_blank"
          >
            <Icon path={mdiSpotify} size={1.5} color={socialIconColor} />
          </a> */}
        </span>
        <p className={styles.description}>
          As a full-stack developer with a passion for both frontend and backend
          development, I’m continuously expanding my skills to build seamless,
          end-to-end digital experiences.
        </p>
        <a href={CV} download>
          <button className="hover">My Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
