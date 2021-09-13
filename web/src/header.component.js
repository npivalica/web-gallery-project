import React from 'react';
import { Flex, Button, Text } from '@chakra-ui/react';

function Header({
    isUploading = false, //state of the upload button
    onPhotoSelect, //will be triggered when user selects a new photo to upload
}) {
    return (
        <Flex
            px="8"
            py="8"
            justify="space-between"
        >
            <Text
                as="div"
                fontSize="xl"
                fontWeight="bold"
            >                
                Web Gallery Project
            </Text>

            <Flex align="end">
                <Button
                    size="md"
                    variant="outline"
                    colorScheme="blue"
                    isLoading={isUploading}
                    loadingText="Uploading..."
                >
                    Upload Photo
                </Button>
            </Flex>
        </Flex>
    );
};

export default Header;