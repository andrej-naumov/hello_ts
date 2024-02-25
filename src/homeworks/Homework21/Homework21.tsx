import React,  { useState } from 'react';
import LikeDislikeCounter from "../../components/LikeDislikeCounter/LikeDislikeCounter";
import { LikeDislikeCounterProps } from '../../components/LikeDislikeCounter/types';

function Homework21() {

  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);



  const incrementLikes = () => {
    setLikes(likes + 1);
  };

  const incrementDislikes = () => {
    setDislikes(dislikes + 1);
  };

  const resetCounters = () => {
    setLikes(0);
    setDislikes(0);
  };

  const props: LikeDislikeCounterProps = {
    likes: likes,
    dislikes: dislikes,
    sum: likes - dislikes,
    incrementLikes: incrementLikes,
    incrementDislikes: incrementDislikes,
    resetCounters: resetCounters
  };

    return <div><LikeDislikeCounter{...props} /></div>
}


export default Homework21;