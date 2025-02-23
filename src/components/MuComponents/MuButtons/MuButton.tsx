import React, { ReactFragment, ReactNode, useState } from "react";
import styles from "./MuButtons.module.css";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { ClipLoader } from "react-spinners";

/**
 * TODO: Make Single and Powerful Button Component(Multi-Purpose)
 * TODO: Remove unused buttons
 */

export const MuButton = (props: {
    text: string; // text of button
    type?: "button" | "submit" | "reset"; // type of button
    icon?: ReactJSXElement; // button icon
    style?: React.CSSProperties; // button style if wanted
    className?: string; // button class name if wanted
    onClick?: React.MouseEventHandler; // onclick event if wanted
    onSubmit?:any;
    isLoading?: boolean; // show loading spinner if neccessary.
    disabled?: boolean; //disable the button if needed
    buttonUrl?: string; // for styling purposes
    submit?: boolean; // for styling purposes
}) => {
    return (
        <button
            className={props.className ? props.className : styles.btn}
            style={{
                background:
                    `${props.buttonUrl}` === window.location.pathname
                        ? "#DEE6FF"
                        : "",
                color:
                    `${props.buttonUrl}` === window.location.pathname
                        ? "#5570F1"
                        : "",
                ...props.style
            }}
            onClick={props.onClick}
            onSubmit={props.onSubmit}
            disabled={props.disabled}
            type={props.type?props.type:'button'}
            //When there are more than two button with type submit
            //pressing enter wont submit the form
            //buttons default to submit if left undefined
        >
            {props.icon && <div className={styles.btn_icon}>{props.icon}</div>}
            <span>{props.text}</span>
            {props.isLoading && (
                <ClipLoader
                    size={20}
                    color="#ff"
                    className={styles.btn_loader}
                />
            )}
        </button>
    );
};

export const MuButtonLight = (props: {
    text: string; // text of button
    type?: "button" | "submit" | "reset"; // type of button
    icon?: ReactJSXElement; // button icon
    style?: React.CSSProperties; // button style if wanted
    className?: string; // button class name if wanted
    onClick?: React.MouseEventHandler; // onclick event if wanted
}) => {
    return (
        <button
            className={props.className ? props.className : styles.btn_light}
            style={props.style}
            onClick={props.onClick}
            type={props.type?props.type:'button'}
        >
            {props.icon && <div className={styles.btn_icon}>{props.icon}</div>}
            <p>{props.text}</p>
        </button>
    );
};

// dropdown button
// need texts of main button and texts of sub buttons

export const DropDownButtons = (props: {
    text: string; // text of main button
    icon?: ReactJSXElement; // main button icon
    style?: React.CSSProperties; // main button style if wanted
    onClick?: React.MouseEventHandler; // onclick event if wanted
    listOfDropBtn?: ReactNode[]; // list of text for sub buttons and the count of button will calculate by this
    display?: string; // this is for hide and display the sub buttons
}) => {
    return (
        <div className={styles.dropdown_btn_container}>
            <div
                className={styles.dropdown_btn}
                style={{
                    ...props.style,
                    marginBottom: props.display === "0" ? "" : "4px",
                    padding: props.icon ? "" : "6px 12px"
                }}
                onClick={props.onClick}
            >
                {props.icon && (
                    <div className={styles.btn_icon}>{props.icon}</div>
                )}
                <p>{props.text}</p>
                {/* arrow icon */}
                <div
                    className={styles.arrow_icon}
                    style={{
                        transform:
                            props.display === "0"
                                ? "rotate(0deg)"
                                : "rotate(180deg)"
                    }}
                >
                    <svg
                        width="12"
                        height="8"
                        viewBox="0 0 12 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1 1L6 6L11 1"
                            stroke="#9297aa"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </div>
            <div
                className={styles.drop_view}
                style={{
                    maxHeight: props.display === "0" ? "0" : "fit-content"
                }}
            >
                {props.listOfDropBtn?.map(btn => btn)}
            </div>
        </div>
    );
};

export const SingleButton = (props: {
    text: string; // text of main button
    icon?: ReactJSXElement; // main button icon
    style?: React.CSSProperties; // main button style if wanted
    onClick?: React.MouseEventHandler; // onclick event if wanted
    link?: string;
}) => {
    return (
        <div className={styles.createBtnContainer} style={props.style}>
            <a href={props.link} target="_blank">
                <MuButton
                    className={styles.createBtn}
                    text={props.text}
                    icon={props.icon}
                    onClick={props.onClick}
                />
            </a>
        </div>
    );
};

type Props = {
    text: string;
    type?: any;
    onHoverBackground?: string;
    onHoverColor?: string;
    backgroundColor?: string;
    color?: string;
    onButtonClick?: any;
    margin?: string;
    padding?: string;
    "font-size"?: string,
    borderColor?: string;
    icon?: ReactJSXElement;
    isLoading?: boolean; // show loading spinner if neccessary.
    disabled?: boolean;
};

export const PowerfulButton = (props: Props) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const style = {
        backgroundColor: props.backgroundColor || "#456FF6",
        color: props.color || "#f5f7f9",
        padding: props.padding || "0.6rem 0.9rem",
        borderRadius: "10px",
        border: `2px solid ${props.borderColor || "#456FF6"}`,
        margin: props.margin || "0",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        "font-size" : props["font-size"] || "17px",
        ...(isHovered && {
            backgroundColor: props.onHoverBackground || "#00204c",
            color: props.onHoverColor || "#f5f7f9"
        })
    };
    return (
        <div className={styles.powerfullButton}>
            <button
                style={style}
                type={props.type || "button"}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={props.onButtonClick}
                disabled={props.disabled}
            >
                {props.icon}
                {" "}
                {props.text}
                {props.isLoading && (
                <ClipLoader
                    size={20}
                    color="#ff"
                    className={styles.btn_loader}
                />
            )}
            </button>
        </div>
    );
};
