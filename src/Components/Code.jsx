import { Box , styled} from "@mui/material"
import Editor from "./Editor"
import { useContext } from "react"
import { DataContext } from "../Context/DataProvider"

const Container = styled(Box)`
    display:flex;
    background-color:#060606;
    height:52vh;
`

const Code = ()=>{
    const {html, css, js, setHtml, setCss, setJs} = useContext(DataContext)
    return (
        <Container>
            <Editor 
            heading='HTML' 
            color='red' 
            symbol='/'
            value={html}
            onChange={setHtml}
            />
            <Editor 
            heading='CSS' 
            color='blue' 
            symbol='*'
            value={css}
            onChange={setCss}
            />
            <Editor 
            heading='JS' 
            color='yellow' 
            symbol='( )'
            value={js}
            onChange={setJs}
            />
        </Container>
    )
}

export default Code