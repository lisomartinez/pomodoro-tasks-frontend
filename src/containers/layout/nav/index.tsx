import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {Action, Actions, Bar, Icon, StyledLink} from "./styles";

const Nav: React.FC = () => {
    return (
        <Bar>
            <Actions>
                <Icon>
                    <FontAwesomeIcon icon={faBars}/>
                </Icon>
                <Action>
                    <StyledLink to="/">HOME</StyledLink>
                </Action>
                <Action>USER</Action>
                <Action>
                    <StyledLink to="/tasks"> TASKS </StyledLink>
                </Action>
            </Actions>
            <Actions>
                <Action>LOGIN</Action>
                <Action>SEARCH</Action>
            </Actions>
        </Bar>
    );
};

export default Nav;
