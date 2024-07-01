import {Box, styled} from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { DataContext } from '../Context/DataProvider';

const Container = styled(Box)`
    height: 41vh;
`

const Result = ()=>{

    const {html, css, js} = useContext(DataContext);

    const [src, setSrc] = useState('');

    const srcCode=`
        <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
        </html>
    `

    useEffect(()=>{
        setTimeout(()=>{
            setSrc(srcCode);
        }, 500)
    }, [html, css, js])
    
    return (
        <Container>
            <iframe
                srcDoc={src}
                title="OUTPUT"
                sandbox='allow-scripts'
                width='100%'
                height='100%'
            />
        </Container>
    )
}

export default Result