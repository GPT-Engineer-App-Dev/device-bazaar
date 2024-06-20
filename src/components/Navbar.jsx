import { Box, Flex, Link, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <Box bg="teal.500" p={4}>
      <Flex justify="space-between" align="center">
        <Link as={RouterLink} to="/" color="white" fontWeight="bold" fontSize="xl">
          Electronics Store
        </Link>
        <Link as={RouterLink} to="/products" color="white">
          Products
        </Link>
        <InputGroup width="auto" ml={4}>
          <InputLeftElement pointerEvents="none" children={<FaSearch color="gray.300" />} />
          <Input
            type="text"
            placeholder="Search products"
            value={searchQuery}
            onChange={handleSearchChange}
            bg="white"
            color="black"
          />
        </InputGroup>
      </Flex>
    </Box>
  );
};

export default Navbar;