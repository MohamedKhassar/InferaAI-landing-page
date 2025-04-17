
export const fadeOut=(delay=.1)=>{
    return {
        initial:{
            opacity:0
        },
        animate:{
            opacity:1,
            transition:{
                duration:.6,
                delay,
                ease:"easeIn"
            }
        }
    }
}