import { Grid, GridItem } from "@chakra-ui/react";

const Layout = () => {
    return (
        <Grid
            templateAreas={{
                base: `"nav" "main"`,
                lg: `"nav nav" "aside main`,
            }}
        >
            <GridItem area="nav">Navigation Bar</GridItem>
            <GridItem area="aside">Aside</GridItem>
            <GridItem area="main">Main</GridItem>
        </Grid>
    );
};

export default Layout;
