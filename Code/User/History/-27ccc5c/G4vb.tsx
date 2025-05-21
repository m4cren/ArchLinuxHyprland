import { Grid, GridItem, Show } from "@chakra-ui/react";

const Layout = () => {
    return (
        <Grid
            templateAreas={{
                base: `"nav" "main"`,
                lg: `"nav nav" "aside main`,
            }}
        >
            <GridItem area="nav">Navigation Bar</GridItem>
            <Show>
                <GridItem area="aside">Aside</GridItem>
            </Show>
            <GridItem area="main">Main</GridItem>
        </Grid>
    );
};

export default Layout;
