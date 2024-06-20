import { Box, SimpleGrid, Image, Text, Button, VStack, Input, InputGroup, InputLeftElement, Select, Checkbox, CheckboxGroup, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";

const products = [
  { id: 1, name: "Smartphone", price: 699, category: "Electronics", brand: "BrandA", image: "/images/smartphone.jpg" },
  { id: 2, name: "Laptop", price: 999, category: "Electronics", brand: "BrandB", image: "/images/laptop.jpg" },
  { id: 3, name: "Headphones", price: 199, category: "Accessories", brand: "BrandA", image: "/images/headphones.jpg" },
];

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleBrandChange = (event) => {
    setSelectedBrand(event.target.value);
  };

  const handlePriceRangeChange = (event) => {
    const value = event.target.value.split("-");
    setPriceRange([parseInt(value[0]), parseInt(value[1])]);
  };

  useEffect(() => {
    setFilteredProducts(
      products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (selectedCategory === "" || product.category === selectedCategory) &&
        (selectedBrand === "" || product.brand === selectedBrand) &&
        product.price >= priceRange[0] &&
        product.price <= priceRange[1]
      )
    );
  }, [searchQuery]);

  return (
    <Box p={4}>
      <InputGroup mb={4}>
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
      <Select placeholder="Select category" mb={4} onChange={handleCategoryChange}>
        <option value="Electronics">Electronics</option>
        <option value="Accessories">Accessories</option>
      </Select>
      <Select placeholder="Select brand" mb={4} onChange={handleBrandChange}>
        <option value="BrandA">BrandA</option>
        <option value="BrandB">BrandB</option>
      </Select>
      <Select placeholder="Select price range" mb={4} onChange={handlePriceRangeChange}>
        <option value="0-200">0 - 200</option>
        <option value="200-500">200 - 500</option>
        <option value="500-1000">500 - 1000</option>
      </Select>
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        {filteredProducts.map((product) => (
          <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={product.image} alt={product.name} />
            <VStack p={4}>
              <Text fontWeight="bold">{product.name}</Text>
              <Text>${product.price}</Text>
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