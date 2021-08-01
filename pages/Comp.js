import React from 'react'
import Header from './header'
import Form from './Container'
import Introduction from './introduction'
import Footer from './Footer'
import Result from './Result'
import { Context } from "./store/store";
import {useContext} from 'react'

function Comp() {
    const [state, dispatch] = useContext(Context);
    
    return (
        <div>
            
        <Header></Header>
        <div>
        {!state.flag && <Introduction></Introduction>}
        {!state.flag && <Form></Form>}
        {state.flag && <Result></Result>}
        <Footer></Footer>
        </div>
        </div>
    )
}

export default Comp
