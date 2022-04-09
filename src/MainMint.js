import { useState } from "react";
import{ ethers, BigNumber } from "ethers";
import { Box, Button, Flex, Text, Input } from "@chakra-ui/react"
import Kongz from "./Kongz/Kongz.json";

const KongzAddress = "0x0aee4e215fd9c07093fc7c31f67028e291c633c5";
console.log("This is body")
const MainMint = ({ accounts, setAccounts}) => {
    const [mintAmount, setMintAmount] = useState(1);
    const isConnected = Boolean(accounts[0]);

    
    async function handleMint() {
    console.log("after function")
        if (window.ethereum) {
            console.log("insidewindow .ethheereum")
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                KongzAddress,
                Kongz.abi,
                signer
            );
            try {
                const response = await contract.mint(BigNumber.from(mintAmount), {
                    value: ethers.utils.parseEther((0.01 * mintAmount).toString()),
                });
                console.log('response: ', response);
            }   catch (err) {
                console.log("error: ", err)
            }
        }
    }

    const handleDecrement = () => {
        if (mintAmount <= 1) return;
        setMintAmount(mintAmount - 1);
    };

    const handleIncrement = () => {
        if (mintAmount >= 10) return;
        setMintAmount(mintAmount + 1);
    };

    return (
        <Flex justify="center" align="center" height="70vh" padding="150px">
            <Box width="520px">
                <div>
                    <Text className="ThunderDemo" fontSize="40px" textShadow="0 5px #000000">Enhanced Apes Collection</Text>
                        <Text
                            fontSize="20px"
                            letterSpacing="-5.5%"
                            fontFamily="poppins"
                            textShadow="0 2px 2px #00000"
                        >
                            A collection of 10,000 Enhanced Apes NFTs—unique digital collectibles 
                            residing on the BSC blockchain.
                        </Text>
                    </div>
                    {isConnected ? (
                    <div>
                        <Flex align="center" justify="center">
                            <Button 
                               backgroundColor="#f7cd2a"
                               borderRadius="5px"
                               boxShadow="0 2px 2px 1px #f7cd2a"
                               color="white"
                               cursor="pointer"
                               fontFamily="inherit"
                               padding="15px"
                               marginTop="10px"
                               onClick={handleDecrement}
                            >
                                -
                            </Button>
                            <Input
                                readOnly
                                fontFamily="inherit"
                                width="100px"
                                height="40px"
                                textAlign="center"
                                paddingLeft="15px"
                                marginTop="10px"
                                type="number" 
                                value={mintAmount} 
                            />
                            <Button
                                backgroundColor="#f7cd2a"
                                borderRadius="5px"
                                boxShadow="0 2px 2px 1px #f7cd2a"
                                color="white"
                                cursor="pointer"
                                fontFamily="inherit"
                                padding="15px"
                                marginTop="10px"
                                onClick={handleIncrement}
                            >
                                +
                            </Button>
                        </Flex>
                        <Button
                            backgroundColor="#f7cd2a"
                            borderRadius="5px"
                            boxShadow="0 2px 2px 1px #f7cd2a"
                            color="white"
                            cursor="pointer"
                            fontFamily="inherit"
                            padding="15px"
                            marginTop="10px"
                            onClick={handleMint}
                        >
                            Mint Now
                        </Button>
                    </div>
                ) : (
                    <p>You must be connected to Mint</p>
                )}
            </Box>    
        </Flex>
    
    );
};

export default MainMint; 