import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => (
  <Box bg="teal.500" p={4}>
    <Flex justify="space-between" align="center">
      <Link as={RouterLink} to="/" color="white" fontWeight="bold" fontSize="xl">
        Electronics Store
      </Link>
      <Link as={RouterLink} to="/products" color="white">
        Products
      </Link>
    </Flex>
  </Box>
);

export default Navbar;