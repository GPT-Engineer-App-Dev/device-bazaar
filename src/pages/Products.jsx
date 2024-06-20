import { Box, SimpleGrid, Image, Text, Button, VStack, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { SearchIcon } from "react-icons/fa";

const products = [
  { id: 1, name: "Smartphone", price: "$699", image: "/images/smartphone.jpg" },
  { id: 2, name: "Laptop", price: "$999", image: "/images/laptop.jpg" },
  { id: 3, name: "Headphones", price: "$199", image: "/images/headphones.jpg" },
];

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    setFilteredProducts(
      products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery]);

  return (
    <Box p={4}>
      <InputGroup mb={4}>
        <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.300" />} />
        <Input
          type="text"
          placeholder="Search products"
          value={searchQuery}
          onChange={handleSearchChange}
          bg="white"
          color="black"
        />
      </InputGroup>
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        {filteredProducts.map((product) => (
          <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={product.image} alt={product.name} />
            <VStack p={4}>
              <Text fontWeight="bold">{product.name}</Text>
              <Text>{product.price}</Text>
              <Button as={Link} to={`/products/${product.id}`} colorScheme="teal">
                View Details
              </Button>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Products;