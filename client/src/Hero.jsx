import {
  Box,
  Text,
  Stack,
  HStack,
  Link,
  Icon,
  Divider,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export default function Hero() {
  return (
    <Box
      minH="100vh"
      bg="#1f2433"
      px={{ base: 6, md: 24 }}
      py={{ base: 20, md: 28 }}
      display="flex"
      alignItems="flex-start"
    >
      <Stack spacing={10} maxW="1100px" w="100%">
        {/* Heading */}
        <Text
          fontSize={{ base: "4xl", md: "6xl" }}
          fontWeight="800"
          letterSpacing="0.02em"
          color="#d7deff"
        >
          Hey! I&apos;m{" "}
          <Box as="span" color="#f5a87f">
            Kyrillos Abdelshaheed
          </Box>
        </Text>

        {/* Body */}
        <Text
          fontSize={{ base: "md", md: "xl" }}
          lineHeight="2"
          color="#9aa6c3"
          maxW="1000px"
        >
          I’m a Computer Science student with experience building software
          projects using Java, JavaScript, and Python. I’ve developed
          applications with React and Spring Boot, built responsive interfaces
          using HTML, CSS, and Chakra UI, worked with databases such as MySQL
          and MongoDB, and managed projects using Git and GitHub.
        </Text>

        {/* Footer links */}
        <HStack
          spacing={6}
          pt={6}
          color="#9aa6c3"
          fontSize={{ base: "sm", md: "lg" }}
        >
          <HStack as={Link} href="https://github.com/" isExternal spacing={3} _hover={{ color: "#f5a87f" }}>
            <Icon as={FaGithub} boxSize={6} />
            <Text>GitHub</Text>
          </HStack>

          <Divider orientation="vertical" h="24px" opacity={0.4} />

          <HStack
            as={Link}
            href="https://www.linkedin.com/"
            isExternal
            spacing={3}
            _hover={{ color: "#f5a87f" }}
          >
            <Icon as={FaLinkedinIn} boxSize={6} />
            <Text>LinkedIn</Text>
          </HStack>

          <Divider orientation="vertical" h="24px" opacity={0.4} />

          <HStack as={Link} href="https://x.com/" isExternal spacing={3} _hover={{ color: "#f5a87f" }}>
            <Icon as={FaXTwitter} boxSize={6} />
            <Text>X</Text>
          </HStack>

          <Divider orientation="vertical" h="24px" opacity={0.4} />

          <HStack as={Link} href="#about" spacing={2} _hover={{ color: "#f5a87f" }}>
            <Text>More about me</Text>
            <ArrowForwardIcon />
          </HStack>
        </HStack>
      </Stack>
    </Box>
  );
}
