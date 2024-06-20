import { Box, Image, Text, VStack, Button } from "@chakra-ui/react";
import { useParams, Link } from "react-router-dom";

const products = [
  { id: 1, name: "Smartphone", price: "$699", description: "A high-end smartphone with a great camera.", image: "/images/smartphone.jpg" },
  { id: 2, name: "Laptop", price: "$999", description: "A powerful laptop for all your needs.", image: "/images/laptop.jpg" },
  { id: 3, name: "Headphones", price: "$199", description: "Noise-cancelling headphones for immersive sound.", image: "/images/headphones.jpg" },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <Text>Product not found</Text>;
  }

  return (
    <Box p={4}>
      <Image src={product.image} alt={product.name} />
      <VStack p={4}>
        <Text fontWeight="bold" fontSize="2xl">{product.name}</Text>
        <Text>{product.price}</Text>
        <Text>{product.description}</Text>
        <Button as={Link} to="/products" colorScheme="teal">
          Back to Products
        </Button>
      </VStack>
    </Box>
  );
};

export default ProductDetail;