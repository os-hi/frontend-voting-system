import useFetch from "../../hooks/useFetch";
import { Card, CardHeader, CardBody, Heading, Box, Grid, GridItem, Text, CardFooter, Button } from '@chakra-ui/react'
import {Link} from 'react-router-dom'
import Banner from "./components/Banner";
import Spinners from "../../components/Spinners";
const Home = () => {
    const url = 'http://localhost:8000/api/events/1'

    const {data: event, isLoading, error} = useFetch(url)

    if (error) return <p>{error}</p>
    if (isLoading) return  <Spinners />
    return ( 
        <div className="w-full h-full flex justify-center items-center gap-6">
            <Banner />
            <Card maxW='xl' maxH='xl'>
                    {event && (
                        <>
                        <CardHeader>
                            <Heading size='lg' fontSize='6xl'>{event.events[0].topic}</Heading>
                        </CardHeader>
                        <CardBody>
                            <Grid templateColumns='repeat(5, 1fr)' gap={12}>
                            <GridItem  mt='6' colSpan={3}>
                                <Text fontWeight='bold' fontSize='lg' >Date</Text>
                                <Text fontSize='md'>{event.events[0].start_date}</Text>
                            </GridItem>
                            <GridItem  mt='6' colSpan={2}>
                                <Text fontWeight='bold' fontSize='lg'>Venue</Text>
                                <Text fontSize='md'>{event.events[0].venue}</Text>
                            </GridItem>
                            </Grid>
                            <Box mt='6'>
                                <Text fontWeight='bold' fontSize='lg'>Description</Text>
                                <Text fontSize='md'>{event.events[0].description}</Text>
                            </Box>
                        </CardBody>
                        <CardFooter>   
                            <Button bg='green' color='white' size='lg' flex='1' mt='6'>
                                <Link to='/login' className='w-full'>Join</Link>
                            </Button>
                        </CardFooter>
                        </>
                    )}
                </Card>
        </div>
     );
}
 
export default Home;

