import React from 'react';
import Hooks from '../../components/hooks';
import Greeting from '../../components/greeting';
 
function Pages(props) {
    return(
        <div>
        <h1>ini halaman home</h1>
        <Greeting nama='soocolor'/>
        <Greeting nama='adzania'/>
        <Hooks/>
        </div>
    )
}
export default Pages;