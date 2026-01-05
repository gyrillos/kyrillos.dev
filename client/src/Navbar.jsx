import {
  Box,
  Flex,
  HStack,
  Button,
  Image,
  IconButton,
  Stack,
  Collapse,
  useDisclosure,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import logo from './assets/k_logo_transparent.png'

const Links = ['Home', 'About', 'Projects', 'Contact']

const NavLink = ({ children }) => (
  <Button
    variant="ghost"
    color="white"
    _hover={{ color: '#f5a87f'}}
  >
    {children}
  </Button>
)

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Box bg="#393752" w="100%" px="50px" py="20px">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Image src={logo} h="40px" alt="Logo" />

        {/* Desktop links */}
        <HStack spacing={8} display={{ base: 'none', md: 'flex' }}>
          {Links.map((link) => (
            <NavLink key={link}>{link}</NavLink>
          ))}
        </HStack>

        {/* Mobile hamburger */}
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Toggle Menu"
          display={{ base: 'flex', md: 'none' }}
          onClick={onToggle}
          color="white"
          _hover={{ color: '#f5a87f', bg: 'whiteAlpha.200' }}
          variant="ghost"
        />
      </Flex>

      {/* Mobile menu (animated) */}
      <Collapse in={isOpen} animateOpacity>
        <Box mt={3} display={{ md: 'none' }}>
          <Stack as="nav" spacing={2} pb={2}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </Stack>
        </Box>
      </Collapse>
    </Box>
  )
}
