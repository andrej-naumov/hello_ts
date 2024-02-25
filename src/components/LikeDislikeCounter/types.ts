export interface LikeDislikeCounterProps {
    likes: number,
    dislikes: number,
    sum:number,
    incrementLikes: ()=>void,
    incrementDislikes: ()=>void,
    resetCounters: ()=>void
}