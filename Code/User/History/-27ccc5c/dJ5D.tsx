import { Grid, GridItem, Show } from "@chakra-ui/react";

const Layout = () => {
    return (
        <Grid
            templateAreas={{
                base: `"nav" "main"`,
                lg: `"nav nav" "aside main"`,
            }}
        >
            <GridItem area="nav" bg={"coral"}>
                Navigation Bar
            </GridItem>

            <GridItem area="aside" bg={"green"}>
                Aside
            </GridItem>

            <GridItem area="main" bg={"pink"}>
                Main
            </GridItem>
        </Grid>
    );
};

export default Layout;
