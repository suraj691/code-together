import {Box, styled} from '@mui/material';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import {Controlled as ControlledEditor} from 'react-codemirror2'
import '../App.css'

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import { useState } from 'react';

const Heading = styled(Box)`
    background: #1d1e22;
    display: flex;
    padding: 9px 12px;
`;

const Header = styled(Box)`
    background: #060606;
    display: flex;
    color:#AAAEBC;
    font-weight:700;
    justify-content:space-between;
`
 const Container = styled(Box)`
    flex-grow:1;
    flex-basic:0;
    display:flex;
    flex-direction:column;
    padding:0px 8px 8px;
`

const Editor = ({heading, color, symbol, value, onChange})=>{

    const handleChange = (editor, data, value)=>{
        onChange(value);
    }

    const [icon, setIcon] = useState(true);


    return(
        <Container style={{
        flexGrow: icon ? 1 : 0, 
        }}>
            <Header>
                <Heading>
                    <Box
                    component="span"
                    style={{
                        background:color,
                        height:20,
                        width:20,
                        display:'flex',
                        placeContent:'center',
                        marginRight:5,
                        borderRadius:5,
                        paddingBottom:2,
                        color:'#000'
                    }}
                    >
                        {symbol}
                    </Box>
                        {heading}
                </Heading>
                <CloseFullscreenIcon 
                    fontSize='small'
                    style={{alignSelf:'center'}}
                    onClick={()=>setIcon(Icon=>!Icon)}
                />
            </Header>
            <ControlledEditor
            className='controlled-editor'
            value={value}
            onBeforeChange={handleChange}
            options={{
                theme: 'material',
                lineNumbers: true
              }}

            />
        </Container>
    )
}
export default Editor