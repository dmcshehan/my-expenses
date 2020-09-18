import React from "react";
import { Typography } from "antd";
import { Link } from "react-router-dom";
import { image, name, tile, imageWrapper } from "./Tile.module.css";

const { Text } = Typography;

export default function Tile({ icon, title, link }) {
  return (
    <Link to={link}>
      <div className={tile}>
        <div className={imageWrapper}>
          <img src={icon} className={image} alt='' />
        </div>
        <Text className={name} strong={true}>
          {title}
        </Text>
      </div>
    </Link>
  );
}
