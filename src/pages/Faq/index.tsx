import { Card,CardBody,CardHeader, Heading,Accordion,AccordionItem,AccordionButton,AccordionPanel,Flex,Text,Container} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'


function Faq() {
    return(
       <>
        <main className="w-full h-screen flex justify-center items-center">
          <Card >
           <CardHeader>
                <Heading size='6xl' fontSize='6xl'> Frequently Asked Questions </Heading>
          </CardHeader>
          <CardBody>
          <Flex
               align={'center'}
               justify={'center'}>
               <Container>
                 <Accordion allowMultiple width="100%" maxW="8xl" rounded="lg">
                   <AccordionItem>
                     <AccordionButton
                       display="flex"
                       alignItems="center"
                       justifyContent="space-between"
                       p={4}>
                       <Text color="#170F49" fontSize="2xl" fontWeight="bold">What is the purpose of this HackVote?</Text>
                       <ChevronDownIcon fontSize="24px" />
                     </AccordionButton>
                     <AccordionPanel pb={4}>
                       <Text color="gray.600">
                         Lorem ipsum dolor sit amet consectetur. Sit morbi odio tellus aliquam ut scelerisque.
                         Neque dui risus euismod ornare sit hendrerit fringilla faucibus.
                       </Text>
                     </AccordionPanel>
                   </AccordionItem>
                   <AccordionItem>
                     <AccordionButton
                       display="flex"
                       alignItems="center"
                       justifyContent="space-between"
                       p={4}>
                       <Text color="#170F49" fontSize="2xl" fontWeight="bold">What happens in case of a tie or a close vote?</Text>
                       <ChevronDownIcon fontSize="24px" />
                     </AccordionButton>
                     <AccordionPanel pb={4}>
                       <Text color="gray.600">
                       Lorem ipsum dolor sit amet consectetur. Sit morbi odio tellus aliquam ut scelerisque.
                        Neque dui risus euismod ornare sit hendrerit fringilla faucibus.
                       </Text>
                     </AccordionPanel>
                   </AccordionItem>
                   <AccordionItem>
                     <AccordionButton
                       display="flex"
                       alignItems="center"
                       justifyContent="space-between"
                       p={4}>
                       <Text color="#170F49" fontSize="2xl" fontWeight="bold">What do I do if I encounter technical issues ?</Text>
                       <ChevronDownIcon fontSize="24px" />
                     </AccordionButton>
                     <AccordionPanel pb={4}>
                       <Text color="gray.600">
                             Lorem ipsum dolor sit amet consectetur. Sit morbi odio tellus aliquam ut scelerisque.
                             Neque dui risus euismod ornare sit hendrerit fringilla faucibus.
                       </Text>
                     </AccordionPanel>
                   </AccordionItem>
                    <AccordionItem>
                   <AccordionButton
                    display="flex"
                     alignItems="center"
                     justifyContent="space-between"
                      p={4}>
                      <Text color="#170F49" fontSize="2xl" fontWeight="bold"> What is a Squad Leader?</Text>
                      <ChevronDownIcon fontSize="24px" />
                      </AccordionButton>
                      <AccordionPanel pb={4}>
                      <Text color="gray.600">
                      Lorem ipsum dolor sit amet consectetur. Sit morbi odio tellus aliquam ut scelerisque.
                       Neque dui risus euismod ornare sit hendrerit fringilla faucibus.
                       </Text>
                        </AccordionPanel>
                         </AccordionItem>
                 </Accordion>
               </Container>
             </Flex>
            </CardBody>
            </Card>
          </main>
         </>
    )
}

export default Faq