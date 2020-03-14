import React, {useState} from "react"
import styled from "styled-components"

import { Container, Heading } from "../../common/components"
import { colors, fonts, media } from "../../common/style"

const ModalBox = styled.div`
    display: block; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 99999999; /* Sit on top */
    padding-top: 100px; /* Location of the box */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    // background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.9); /* Black w/ opacity */
`

const ModalContent = styled.img`
    margin: auto;
    display: block;
    width: 80%;
    max-width: 700px;
    -webkit-animation-name: zoom;
    -webkit-animation-duration: 0.6s;
    animation-name: zoom;
    animation-duration: 0.6s;

    src: ${props => props.src};
`

const Image = styled.img`
    border-radius: 5px;
    transition: 0.3s;
    width: 100%;
    src: ${props => props.src};
    display: none;

    :hover {
        opacity: 0.7;
        cursor: pointer;
    }
`

const Close = styled.span`
    position: absolute;
    top: 35px;
    right: 35px;
    color: #f1f1f1;
    font-size: 40px;
    font-weight: bold;
    transition: 0.3s;

    :hover, :focus{
        color: #bbb;
        text-decoration: none;
        cursor: pointer;
    }
`

export default function(props) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>  
            <Image src={props.src} onClick={() => setIsOpen(!isOpen)}/>
            {isOpen && 
                <ModalBox id="myModal">
                    <Close onClick={() => setIsOpen(!isOpen)}>&times;</Close>
                    <ModalContent id="img01" src={props.src}/>
                </ModalBox>
            }
        </div>
    )
}