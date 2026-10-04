"use client";

import {
  Box,
  Toaster as ChakraToaster,
  Portal,
  Spinner,
  Stack,
  Text,
  Toast,
  createToaster,
} from "@chakra-ui/react";

export const toaster = createToaster({
  placement: "top-start",
  pauseOnPageIdle: true,
});

export const Toaster = () => {
  return (
    <Portal>
      <ChakraToaster toaster={toaster} insetInline={{ mdDown: "4" }}>
        {(toast) => (
          <Toast.Root
            width={{ md: "sm" }}
            bg="#dab7b8"
            borderRadius="0"
            border="2px solid"
            borderTopColor="#f3e4e4"
            borderLeftColor="#f3e4e4"
            borderRightColor="#9f8081"
            borderBottomColor="#9f8081"
            p="2px"
          >
            <Box
              border="2px solid"
              borderTopColor="#c59fa1"
              borderLeftColor="#c59fa1"
              borderRightColor="#f0dede"
              borderBottomColor="#f0dede"
              px={3}
              py={2}
              w="100%"
            >
              {toast.type === "loading" ? (
                <Spinner size="sm" color="blue.solid" />
              ) : (
                <Toast.Indicator />
              )}
              <Stack gap="1" flex="1" maxWidth="100%">
                {toast.title && <Toast.Title>{toast.title}</Toast.Title>}
                {toast.description && (
                  <Toast.Description>
                    <Text color="black">{toast.description}</Text>
                  </Toast.Description>
                )}
              </Stack>
              {toast.action && (
                <Toast.ActionTrigger>{toast.action.label}</Toast.ActionTrigger>
              )}
              {toast.closable && <Toast.CloseTrigger />}
            </Box>
          </Toast.Root>
        )}
      </ChakraToaster>
    </Portal>
  );
};
