const HEAD=(
    <div style={{
        width:"30px",
        height:"30px",
        borderRadius:"100%",
        border:"10px solid black",
        position:"absolute",
        top:"50px",
        right:"-20px"

    }}/>
)
const BODY=(
    <div style={{
        width:"10px",
        height:"50px",
        background:"black",
        position:"absolute",
        top:"100px",
        right:"0px"

    }}/>
)
const RIGHT_ARM=(
    <div style={{
        width:"60px",
        height:"10px",
        background:"black",
        position:"absolute",
        top:"140px",
        right:"-60px",
        rotate:"-30deg",
        transformOrigin:"left bottom"

    }}/>
)
const LEFT_ARM=(
    <div style={{
        width:"60px",
        height:"10px",
        background:"black",
        position:"absolute",
        top:"140px",
        right:"10px",
        rotate:"30deg",
        transformOrigin:"right bottom"

    }}/>
)
const RIGHT_LEG=(
    <div style={{
        width:"70px",
        height:"10px",
        background:"black",
        position:"absolute",
        top:"140px",
        right:"-60px",
        rotate:"60deg",
        transformOrigin:"left bottom"

    }}/>
)
const LEFT_LEG=(
    <div style={{
        width:"70px",
        height:"10px",
        background:"black",
        position:"absolute",
        top:"140px",
        right:"0px",
        rotate:"-60deg",
        transformOrigin:"right bottom"

    }}/>
)
const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]
type HangmanDrawingProps = {
    numberOfGuesses: number
  }
export function HangmanDrawing({numberOfGuesses}:HangmanDrawingProps){
    return ( <div style={{
        position:"relative"
    }}>
        {BODY_PARTS.slice(0, numberOfGuesses)}
        <div style={{
            
            height:"50px",
            width:"10px",
            background:"black",
            position:"absolute",
            top:0,
            right:0
        }}/>
        <div style={{
            height:"10px",
            width:"150px",
            background:"black",
            marginLeft:"100px"
        }}/>
        <div style={{
            height:"300px",
            width:"10px",
            background:"black",
            marginLeft:"100px"
        }}/>
        <div style={{
            height:"10px",
            width:"200px",
            background:"black"
        }}/>
    </div> 
    )
}