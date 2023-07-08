import React from "react";
import MenuButton from "./MenuButton";

export default class Menu extends React.Component {
    render() {
        return (
            <div className="Menu">
                <MenuButton name="Главная"></MenuButton>
                <MenuButton name="Акции"></MenuButton>
                <MenuButton name="Техподдержка"></MenuButton>
            </div>
        )
    }
}