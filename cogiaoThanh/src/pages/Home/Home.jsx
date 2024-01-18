import React from "react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Button, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="container">
      <img
        src="https://scontent.fhan5-9.fna.fbcdn.net/v/t39.30808-6/404459673_1596338350900730_2596019738672476333_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFK2-ms9oUjnXs2fNoi9Ke1m89iTCgviTibz2JMKC-JONlj61FfGdSaREKgbvXdDwmTotwaU2TYRLXGNGsFPmUj&_nc_ohc=CWua0T8nWtMAX9knt6B&_nc_ht=scontent.fhan5-9.fna&oh=00_AfCPJNWZlO3JcLteRtsEKJYPHmublFLyViH5iPtS3bae8g&oe=65667B32"
        alt=""
        width={200}
      />
      <Button
        rightIcon={<ArrowForwardIcon />}
        variant="outline"
        size="lg"
        background="red"
        border={0}
        padding={10}
        color="white"
        borderRadius={99}
        cursor="pointer"
      >
        <Link to={"/about"} style={{ textDecoration: "none", color: "white" }}>
          Bám vào đây nè cậu :3
        </Link>
      </Button>
    </div>
  );
};

export default Home;
