import React, {Fragment} from "react";
import {Button} from "primereact/button";
import {InputText} from "primereact/inputtext";
import {Menubar}  from "primereact/menubar";
import {Link} from "react-router-dom"
// import {MenubarSub}  from "primereact/components/menubar/MenubarSub";

const items = [
    {
        label:'Home',
        icon:'pi pi-fw pi-home',
        url: '/'
    },
    {
        label:"AI's",
        icon:'pi pi-fw pi-sitemap',
        url: '/home2'
    },
    {
        label:'Teams',
        icon:'pi pi-fw pi-users',
        url: '/home3'
    },
    {
        label:'Biling',
        icon:'pi pi-fw pi-money-bill',
    },
    {
        label:'Profile',
        icon:'pi pi-fw pi-user'
    }
];

class Topbar extends React.Component<any>{

    render(){
        return <Fragment>
            <Menubar model={items}>
                <InputText placeholder="Search" type="text"/>
                <Button label="Logout" icon="pi pi-power-off" style={{marginLeft:4}}/>
            </Menubar>
            {/*<Link to={"/"}>Home</Link>*/}
            {/*<Link to={"/home2"}>Home2</Link>*/}
            {/*<Link to={"/home3"}>Home3</Link>*/}
        </Fragment>

    }
}

export default Topbar