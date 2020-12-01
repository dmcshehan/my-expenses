import React from "react";
import Title from "./Title";
import AddButton from "./AddButton";
import ColumnHeader from '../ColumnHeader/ColumnHeader'


export default function Header() {
    return (
        <ColumnHeader>
            <Title />
            <AddButton />
        </ColumnHeader>
    );
}
