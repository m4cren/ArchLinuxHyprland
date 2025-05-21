import { Grid } from "@chakra-ui/react";

const Layout = () => {
    return (
        <Grid
            templateAreas={{
                base: `"nav" "main"`,
                lg: `"nav nav" "aside main`,
            }}
        ></Grid>
    );
};

export default Layout;
