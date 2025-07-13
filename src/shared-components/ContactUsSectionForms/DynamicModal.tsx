'use client';
import {
  Box,
  Flex,
  CloseButton,
  Heading,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from '@chakra-ui/react';
import FranchiseForm from './FranchiseForms';
import SupplierForm from './SupplierForm';
import CareerForm from './CareerForm';
import BusinessForm from './BusinessForm';
import MediaCenterForm from './MediaCenterForm';

interface DynamicContentProps {
  isOpen: boolean;
  onClose: () => void;
  cardTitle: {
    en: string;
    ar: string;
  };
  media?: boolean;
}

const DynamicContent: React.FC<DynamicContentProps> = ({
  isOpen,
  onClose,
  cardTitle,
  media,
}) => {
  const renderForm = () => {
    switch (cardTitle.en) {
      case 'Franchise - Partnership':
        return <FranchiseForm />;
      case 'Supplier Registration':
        return <SupplierForm />;
      case 'Careers':
        return <CareerForm />;
      case 'Business Partner':
        return <BusinessForm />;
      case 'Media Registration Form':
        return <MediaCenterForm />;
      default:
        return <FranchiseForm />;
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {media ? (
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay h="100vh" />
          <ModalContent
            maxW={{ base: '90vw', lg: '80vw' }}
            w={{ base: '90vw', lg: '100%' }}
            position="relative"
            mt={{ base: '5rem', lg: '10rem' }}
            pb={'1rem'}
          >
            <ModalCloseButton
              position="absolute"
              top="-40px"
              right="-2px"
              color="#E55A52"
              fontSize="1rem"
              p={3}
              bg="white"
              borderRadius="full"
              zIndex={1}
            />
            {renderForm()}
          </ModalContent>
        </Modal>
      ) : (
        <Flex
          direction="column"
          p={{ base: 0, lg: 0 }}
          borderRadius="md"
          position="relative"
          width="full"
        >
          <Box>{renderForm()}</Box>
        </Flex>
      )}
    </>
  );
};

export default DynamicContent;
