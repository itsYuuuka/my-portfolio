import Icon from "@mdi/react";

function SkillList({ src, skill }) {
  return (
    <span>
      <Icon path={src} size={0.8} color="var(--text-color)" />
      <p>{skill}</p>
    </span>
  );
}

export default SkillList;
