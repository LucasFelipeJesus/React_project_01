import {  Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import Topo from "../topApp";
import Rodape from "../rodape";


interface LayoutProps {
    children: React.ReactNode;
    
}
function Layout(props: LayoutProps) {
    const { children } = props;
  return (
    <>  
    
    <Grid className="grid" templateColumns="1fr" gap={3} templateRows="64px auto 64px" >
        <GridItem rowSpan={1} colSpan={1} >
            <Topo />
        </GridItem>
        <GridItem  rowSpan={2} colSpan={1} >
        
            {children}
           
            </GridItem>
            <GridItem rowSpan={1} colSpan={1} >
                <Rodape />
            </GridItem>                
    </Grid>

    </>    
  );
}
export default Layout;