import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SkillCard =({ skill })=>{
    return (
        <li style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
            <FontAwesomeIcon icon={skill.icon} />
            {skill.name}
        </li>
    );
};

export default SkillCard;