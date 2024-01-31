"use client";
import React, { ReactNode } from "react";
import { styled } from "@mui/material/styles";
import Link from "next/link";

interface Props {
  children?: ReactNode;
  disabled?: boolean;
  width?: string;
  height?: string;
  margin?: string;
  size?: "large" | "middle" | "small" | "tiny";
  type?: "button" | "submit" | "reset";
  color?: string;
  onClick?: () => void;
  onMouseDown?: () => void;
  href?: string;
}

function Button(props: Props) {
  const style = {
    // width: props.width ? props.width : "100%",
    // height: props.height ? props.height : "100%",
    // margin: props.margin ? props.margin : "10px",
    backgroundColor: props.color
      ? `rgba(204, 204, 204, 1)`
      : `rgba(246, 161, 83, 1)`,
  };
  return (
    <>
      {props.href && !props.disabled ? (
        <>
          <Link href={props.href}>
            <Button2
              onClick={() => props.onClick && props.onClick()}
              type={props.type}
              className={`button ${props.size} ${props.color}`}
              color={props.color}
              style={style}
            >
              <ButtonDiv>{props.children ? props.children : null}</ButtonDiv>
            </Button2>
          </Link>
        </>
      ) : (
        <Button2
          onClick={() => props.onClick && props.onClick()}
          type={props.type}
          className={`button ${props.size} ${props.color}`}
          style={style}
        >
          <ButtonDiv>{props.children ? props.children : null}</ButtonDiv>
        </Button2>
      )}
    </>
  );
}

const Button2 = styled("button")<Props>(({ color }) => ({
  borderRadius: `23px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: "311px",
  height: `46px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  cursor: "pointer",
  backgroundColor: `${
    color === "sub" ? "rgba(204, 204, 204, 1)" : "rgba(246, 161, 83, 1)"
  }`,
  boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
  margin: `10px`,
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Rubik`,
  fontWeight: `500`,
  fontSize: `12px`,
  letterSpacing: `2px`,
  textDecoration: `none`,
  lineHeight: `20px`,
  textTransform: `uppercase`,
  "&:hover": {
    backgroundColor: `rgba(200, 130, 50, 1)`,
  },
  "&:active": {
    backgroundColor: `rgba(150, 100, 30, 1)`,
  },
  "&:focus": {
    outline: "none",
    boxShadow: `0px 0px 8px rgba(0, 0, 0, 0.5)`,
  },
  "&:disabled": {
    backgroundColor: `rgba(150, 150, 150, 1)`,
    cursor: "not-allowed",
  },
}));

const ButtonDiv = styled("div")(({ theme }) => ({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Rubik`,
  fontWeight: `500`,
  fontSize: `12px`,
  letterSpacing: `2px`,
  textDecoration: `none`,
  lineHeight: `20px`,
  textTransform: `uppercase`,
  position: `absolute`,
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
}));

export default Button;
