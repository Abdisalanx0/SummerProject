
import React from 'react';
import { Box, Button, VStack, Heading } from "@chakra-ui/react";

const Hello: React.FC = () => {
  return (
    <Box className="flex items-center justify-center h-screen bg-gray-100">
      <VStack spacing={12}>
        <Heading className="text-4xl font-bold">
          Welcome to the summer project
        </Heading>
        <Button colorScheme="teal" size="lg">
          Click Me
        </Button>
      </VStack>
    </Box>
  );
}

export default Hello;
