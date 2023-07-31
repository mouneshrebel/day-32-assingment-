import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { Card, Image, Stack, Button, Text, Heading, CardBody, CardFooter } from '@chakra-ui/react';
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import axios from "axios";

export default function StuDetail() {
    const { userid } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState({});

    useEffect(() => {
        axios.get(`https://63a3d79c471b38b206173b15.mockapi.io/users/${userid}`)
            .then((us) => {
                setUser(us.data);
            });
    });

    return (
        <div>
            <h1 style={{ marginLeft: '100px', marginTop: '10px', color: "green", fontWeight: 'bolder', fontFamily: 'cursive' }}>Detailed page of a Student 👩🏻‍🎓✨</h1>
            <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
                style={{ marginLeft: '50px', marginTop: '50px', width: '100%', height: '100%' }}
            >
                <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '200px' }}
                    src={user.avatar}
                    alt='Caffe Latte'
                    style={{ width: '500px' }}
                />

                <Stack>
                    <CardBody style={{ marginLeft: '30px' }}>
                        <Heading size='md'>Id no   :    {user.idno}</Heading><br/>
                        <Text py='2'>
                            <Heading size='md'>Name           : {user.Name}</Heading><br/>
                            <Heading size='md'>Age            : {user.Age}</Heading><br/>
                            <Heading size='md'>Email          : {user.Email}</Heading><br/>
                            <Heading size='md'>Address        : {user.Address}</Heading><br/>
                            <Heading size='md'>Contact Number : {user.ContactNumber}</Heading><br/>
                        </Text>
                    </CardBody>

                    <CardFooter>
                        <Button
                            style={{ marginLeft: '30px' }}
                            onClick={() => navigate(-1)}
                            variant="contained"
                            
                        >
                            <ArrowBackIosIcon />
                            BACK
                        </Button>
                    </CardFooter>
                </Stack>
            </Card>
        </div>
    )
}
