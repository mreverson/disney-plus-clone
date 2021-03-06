import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { useParams } from "react-router-dom";
import db from "../firebase";

function Detail() {
    const { id } = useParams();
    const [ movie, setMovie] = useState();

    useEffect(() => {
        db.collection("movies").doc(id).get()
        .then((doc) => {
            if (doc.exists){
                console.log(doc.data())
                setMovie(doc.data());
            }else{

            }
        })
    }, [])


    return (
        <Container>
            { movie && (
            <>
                <Background>
                    <img src={movie.backgroundImg} alt="" />
                </Background>
                <ImageTitle>
                    <img src={movie.titleImg} alt="" />
                </ImageTitle>
                <Controls>
                    <PlayButton>
                        <img src="/images/play-icon-black.png" alt="" />
                        <span>PLAY</span>
                    </PlayButton>
                    <TrailerButton>
                        <img src="/images/play-icon-white.png" alt="" />
                        <span>TRAILER</span>
                    </TrailerButton>
                    <AddButton>
                        <span>+</span>  
                    </AddButton>
                    <GroupWatchButton>
                        <img src="/images/group-icon.png" alt="" />
                    </GroupWatchButton>
                </Controls>

                <Subtitle>
                    {movie.subTitle}
                </Subtitle>
                <Description>
                    {movie.description}
                </Description>
            </>)}
            
        </Container>
    )
}

export default Detail

const Container = styled.main` 
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    padding-top: 30px;

`
const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    opacity: 0.5;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
const ImageTitle = styled.div`
    height: 30vh;
    min-height: 170px;
    width: 35vw;
    min-width: 200px;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`
const Controls = styled.div`
    display:flex;
    align-items: center;
`
const PlayButton = styled.button`
    cursor: pointer;
    display:flex;
    align-items: center;
    height: 56px;
    background: rgb(249,249,249);
    border: none;
    border-radius: 4px;
    font-size: 15px;
    letter-spacing: 1.8px;
    padding: 0 24px;
    margin-right: 22px;

    &:hover {
        background: rgb(198,198,198);
    }

`
const TrailerButton = styled(PlayButton)`
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
`
const AddButton = styled.button`
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid #ffffff;
    background-color: rgba(0, 0, 0, 0.6);
    cursor: pointer;
    margin-right: 16px;

    span {
        font-size: 30px;
        color: #ffffff;
    }
`
const GroupWatchButton = styled(AddButton)`
    background-color: rgb(0, 0, 0)
`

const Subtitle = styled.div`
    color: rgb(249,249,249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;
`
const Description = styled.div`
    max-width: 760px;
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249,249,249);
`
