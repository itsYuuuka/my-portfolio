import styles from "./SkillsStyles.module.css";
import { mdiCheckCircleOutline } from "@mdi/js";
import SkillList from "../../common/SkillList";

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>

      <h2>Frontend</h2>
      <div className={styles.skillList}>
        <SkillList src={mdiCheckCircleOutline} skill="HTML"></SkillList>
        <SkillList src={mdiCheckCircleOutline} skill="CSS"></SkillList>
        <SkillList src={mdiCheckCircleOutline} skill="JavaScript"></SkillList>
        <SkillList src={mdiCheckCircleOutline} skill="Vue.js"></SkillList>
        <SkillList
          src={mdiCheckCircleOutline}
          skill="TypeScript"
        ></SkillList>
        <SkillList
          src={mdiCheckCircleOutline}
          skill="React"
        ></SkillList>
        <SkillList
          src={mdiCheckCircleOutline}
          skill="Angular (in progress)"
        ></SkillList>
      </div>
      <hr />

      <h2>Backend</h2>
      <div className={styles.skillList}>
        <SkillList src={mdiCheckCircleOutline} skill="Java"></SkillList>
        <SkillList src={mdiCheckCircleOutline} skill="Spring Boot"></SkillList>
        <SkillList
          src={mdiCheckCircleOutline}
          skill="Spring Security"
        ></SkillList>
        <SkillList src={mdiCheckCircleOutline} skill="Hibernate"></SkillList>
        <SkillList src={mdiCheckCircleOutline} skill="Postman"></SkillList>
      </div>
      <hr />

      <h2>Tools</h2>
      <div className={styles.skillList}>
        <SkillList src={mdiCheckCircleOutline} skill="IntelliJ" />
        <SkillList src={mdiCheckCircleOutline} skill="VS Code" />
        <SkillList src={mdiCheckCircleOutline} skill="Git" />
      </div>
      <hr />

      <h2>Databases</h2>
      <div className={styles.skillList}>
        <SkillList src={mdiCheckCircleOutline} skill="MySQL" />
        <SkillList src={mdiCheckCircleOutline} skill="MariaDB" />
      </div>
      <hr />

      <h2>Styling</h2>
      <div className={styles.skillList}>
        <SkillList src={mdiCheckCircleOutline} skill="Vuetify" />
        <SkillList src={mdiCheckCircleOutline} skill="Bootstrap" />
        <SkillList src={mdiCheckCircleOutline} skill="Tailwind CSS" />
      </div>
    </section>
  );
}

export default Skills;
