import React from 'react';
import {
    DashboardContainer,
    DashboardTitle,
    DashboardCardContainer,
    DashboardCard, CardImg,
    CardName,
    CardPrice,
    CardSelect,
    SelectedCardContainer,
    SelectCardDescription,
    DeliveryAddressContainer,
    DeliveryForm,
    DeliveryButton
} from './dashboard-styles.js';
import { useNavigate } from 'react-router-dom';
import LargeImg from '../../assets/images/large-bowl.jpg';
import SmallImg from '../../assets/images/small-bowl.jpg';
import Input from '../../components/Input/input.jsx';

export const Dashboard = () => {
    const [selectCard, setSelectCard] = React.useState(null);
    const [deliveryDetails, setDeliveryDetails] = React.useState({
        deliveryName: '',
        deliveryContact: '',
        deliveryAddress: '',
        deliveryPincode: ''
    });

    const navigate = useNavigate();

    // React.useEffect(() => {
    //     // Check if user is logged in, if not redirect to login
    //     const isLoggedIn = localStorage.getItem('isLoggedIn');
    //     if (!isLoggedIn) {
    //         navigate('/login');
    //     }
    // }, [navigate]);


    const CardsData = [
        {
            img: LargeImg,
            name: 'Large bowl',
            description: 'A large bowl for your favorite meals',
            price: 100,
        },
        {
            img: SmallImg,
            name: 'Small bowl',
            description: 'A small bowl for your favorite meals',
            price: 80,
        }
    ]

    const handleSelectCard = (card) => {
        setSelectCard(card);
    }

    const handleChange = (event) => {
        event.preventDefault();
        setDeliveryDetails((prevData) => ({
            ...prevData, [event?.target?.name]: event?.target?.value
        }));
    }
    const handleDeliveryAddress = (event) => {
        event.preventDefault();
        const deliveryName = deliveryDetails?.deliveryName;
        const deliveryContact = deliveryDetails?.deliveryContact;
        const deliveryAddress = deliveryDetails?.deliveryAddress;
        const deliveryPincode = deliveryDetails?.deliveryPincode;

        if (deliveryName && deliveryContact && deliveryAddress) {
            console.log(`Order placed for ${selectCard?.name} with delivery details: 
            Name: ${deliveryName}, 
            Contact: ${deliveryContact}, 
            Address: ${deliveryAddress}
            PinCode: ${deliveryPincode}
            `);

            alert('Order placed successfully!');
            navigate('/');
        } else {
            alert('Please fill in all delivery details.');
        }
    }
    return (
        <DashboardContainer>
            <DashboardTitle>Welcome, Naga!</DashboardTitle>
            <DashboardCardContainer>
                {CardsData.map((card, index) => (
                    <DashboardCard key={index}>
                        <CardImg src={card?.img} alt={card?.name} />
                        <CardName>{card?.name}</CardName>
                        {/* <p>{card.description}</p> */}
                        <CardPrice>Price: ₹{card?.price}</CardPrice>
                        <CardSelect onClick={() => handleSelectCard(card)}>Select</CardSelect>
                    </DashboardCard>
                ))}
            </DashboardCardContainer>
            {selectCard && <SelectedCardContainer>
                <SelectCardDescription>{`You have selected ${selectCard?.name} - ₹${selectCard.price} `}</SelectCardDescription>
            </SelectedCardContainer>}

            <DeliveryAddressContainer>
                <DeliveryForm onSubmit={handleDeliveryAddress}>
                    <Input type='text' label='Delivery Name' name='deliveryName' required onChange={handleChange} />
                    <Input type='text' label='Delivery Contact' name='deliveryContact' required onChange={handleChange} />
                    <Input type='text' label='Delivery Address' name='deliveryAddress' required onChange={handleChange} />
                    <Input type='number' label='Delivery Pincode' max={6} name='deliveryPincode' required onChange={handleChange} />
                    <DeliveryButton type='submit' >Place Order</DeliveryButton>
                </DeliveryForm>
            </DeliveryAddressContainer>
        </DashboardContainer >
    );
}
export default Dashboard;