import { Add, Remove } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Cart = () => {
    console.log(React.Children.count)
    return (
        <Container>
            <Navbar />
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag(3)</TopText>
                        <TopText>Your Wishlist(0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>

                        <Product>
                            <ProductDetail>
                                <Image src="http://cdn.shopify.com/s/files/1/1279/2135/products/image_9af9ac16-cfc4-4279-86ef-6399741b2d39_grande.png?v=1566960328" />
                                <Details>
                                    <ProductName><b>Product:</b> Jean Jacket</ProductName>
                                    <ProductId><b>ID:</b> 123-456-333</ProductId>
                                    <ProductColor color="royalblue" />
                                    <ProductSize><b>Size:</b> 36.5</ProductSize>
                                </Details>
                            </ProductDetail>

                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add />
                                    <ProductAmount>2</ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice>Rs. 549</ProductPrice>
                            </PriceDetail>
                        </Product>

                        <Product>
                            <ProductDetail>
                                <Image src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWFRgWFRYZGBYaHRweGRwcHBwcGBwcHhkaHBoYFhgcIS4lHB4tHxwZJjgmKy8xNTU1HCQ7QDs0Py40NTEBDAwMEA8QHxISHjEhJCs0NDQ0NDQ0MTQ0NDQ0NDQxNDQ0NDUxNDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIARoAswMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAAAwIEBQYHAQj/xAA/EAACAQIDBAgCBwgBBQEAAAABAgADEQQSIQUGMVEHEyJBYXGBkaHBQlJygpKx8BQjMmKistHhwhVjg9LxJP/EABkBAQADAQEAAAAAAAAAAAAAAAABAgMEBf/EACERAQEAAgIDAAMBAQAAAAAAAAABAhEDMRIhQSIyUUIT/9oADAMBAAIRAxEAPwDr8REBERAREQEREBES02ntKlh6bVa7imi2uxudToAANWJ5AXgXcTjm8HS5WLZcHTVEB/iqDM7D7IICD1J8phF6VNp6dukf/ENfOx/KE6d+ic53J6S1xL9TilWlVt2GUkI5HFbNcq3IXN9fXoqm4uOBhD2IiAiIgIiICIiAiIgIiICIiAiIgIiIFNRwoLMbAAknkALkz523r3gr7TrkoH6pNKdMa5RwzNw7TcTyvbgJ2jpBqVF2dijSUs5TLYccrMquwtyQufSaZujsFaNFCR2iATzJOpJ9ZXLLTXiw8q5zS3Vxji4pEDxsPhxkW0N38RRXM63A421tO4KoGlpYbWpgoxK5hY3Ep5Vv/wAcXCesN1I0YEEEHUEG4I8Z2Xoo3vaqTha5GbLemwAAYKO0pA0zW1042J8+PYuwdgOFzb3me6Pqjf8AUMJYXPWj2KsGPopM0ctfSkRElUiIgIiICIiAiIgIiICIiAiIgIiIHhF9DwnNsJthxVejURF6tghy5wQSSEvmFiDY2I5TpU1DFYJM5cqM4J87gymTfh7Yfbe2GoEdlMpIF2LcT9lTaT4TGl7hlAI0Nr2B7wQRcS86hXurAHv1ky4dFWwAHlM/bpci352Yq4wKgCioFJ5AsbEkDxF5tWxN0UwuNwFRKjuWdg4bLa5oVGzJl4AZWuCT3ay/rYLPj8+UELSygkG2YtpbyFz6zbdjYEvX65rZaYdE8XYjOw5ZQCune7jul8bbZGOeOMxtrZYiJo5SIiAiIgIiICIiAiIgIiICIiAiIgJp+81VqdTsiwbtZrE256KDfUH3m4TXt8cRTp0kdzlOcIvjmBuD4WF/uyLN9L8eXjl7a1hMeQcyhnJ49l7+mYeUyT4oFb8LzFU9o0kuFe55Fsx14Wln+0VqhuqEKSbF+z65eJ+Ez067lL092zimyuKYLPkbIFBzFiLIABqTmI4c5v8Auxs04bC0aLG7IgDHmxJZib95YmaXQZsMDWVesdFZ8pOXNlU9jNbs+dpvuycetejTrLorqGtxIPepPMG49JbFz81u4vIiJdiREQEREBERAREQEREBERAREpdwASxAA4kmwA5knhAqlLsACSQANSToAOZPdNO2/v8A0aV0w69c/DNe1MHz4t6aeM5vtveHEYk/vahK9yDsoPJBx8zc+M0x47e/SNukbd6QcPSulAde/MG1Ieb/AEvu38xOabZ27XxL5675gL5VAsi6/RX5m5POYwNKHa83x45OkW7Z7ZG8D0ew4z0+X0l+ye8eBm77NxCOudTdT3kcLdx5cJylXy+UyeA2xURHRAO1rc30BUggDnw1mXLwy+5214+Wz1emU3g28ajFKelPgTwLa6+S/nK9298q+EGQKtSje+VtCL6ko44a62II8prDPpaUhjL48eMx1pnllcruu5bD3ywmJsqvkqHTI9lYnkpvlb0N/CbFPmrLr5zad3998Th7KW62mPouSSB/I/FfW48JTLi/iJk7ZEwW7+9OHxeiMUqWuabaN4le5h5eoEzsyss7WIiJAREQEREBERAREQE5p0ibcz1P2ZD2E1qW+k3cp5hfz8p0LaWK6qlUqfURm8yASB72nCMTULEljck3J7ySbkn1mvFju7Vyq3J08tP16S2txvJnbXz/AEJ71YtOlVCyygyYiUFZAhHjJKItfx+X6+M9CRSTQwlG3jPBPWHCVKsD1VnjJwMrAlTCBNRxLIyOrFXVgykcQRqD7gec7ru9tYYnDpWGhYWYfVYaMvlfUeBE4Bn/ANfOdG6Jsf261AnQqHUeIIV/cFPaZcmO5tMdMiInOsREQEREBERAREQNa3/xOTBuL2LsqD3zH4KZxytOi9J+Mu1KiPohnYefZX+1/ec7q2nVxTWKmXa0qHS/LWXFOrcDlYSGqRaW+FqaDwH5S9QyB4SgJCvKs0kUMsoRRr6SUayKgNWHl85CVBUk+RlYUz1uOnOM3GBVIcTVsJ7VqWlhiHvYcyB8zFonQHT9eJm19HeKKY6lyfOh9UJH9SrNaQaS62diTTq06o+g6PpyVg1h52lcpuaH0TE8VgQCNQdQfA8J7ORciIgIiICIiAiJHiq4RHdjZUVmJ5BQST8IHGt7Mb1uKrPxUNkX7KdnTzsT6zXqrSutWB1DAkcdechZhz8p24zUZoMU9hLDDVLgHmD8TNp3MwX7Rj6CEXVGNR/JBmF/DPkHrIN/d3xgsWVQWo1Bnp8lBbtoPsnh4Mspll+Wk6WCd/if8f7k19ZBhvo+V/f/AOy5Hj+tZohQBxlFM6nnb/MlFv1aUpxPlAoub8O+UE8ZJbj5ylpCVtX7vWQnAVTT/aQt6KuKbN9V2TMLjla2vMgd8nxA0nRNjbLB3erXHada1bzNN7ofakszzukxz6lqJUhlvhn0k4M0Q7huFtHr8FTJPaT923mlsvuhQzY5znoixIK4infgyOPG4ZWI/CvuJ0acmU1lVp0RESqSIiAiIgJhd8gTgcTa+lNibccosW/pBmalNRAwKsLqwII5gixHtJnq7HzkjAjRO/jb5y3e/wBH/XvzmQxuH6qo9E3JR2S3f2WKi/teW9bDhhqJ2fGbeuhrZ7F8RiSBlsKSnvzXDuPK3V+d/CZjphwIfBJUt2qdVde/K90I8sxQ/dEw/RLtSnSaphWbK1R89O/8LHKFZByaygjnry123pIdV2biM3AhAPtGqmX42PpObLfl7WnTi9Dh+u6XBPyltQXsj3+cuROpV4s8AnoiB4bWkDnWSuZE0hKGtwP65zvG6OEB2bhqbDR8Omb76Xb+4zhFbh+vGfQ+wmU4bDlD2Oqp5T/LkW3wmPL8THzaaL0nak4s6Eo4Pcw0N5P1j24ew/zJ9r7RfFYqriDezuStu5B2UH4QvxnqIAJpjvSG79D9FjiKz3NlphTxtd3Ui/j2GnW5z3ogwlqFetrepUCDyRb393b2nQpzZ38lp0RESqSIiAiIgIiIHKukzdt0qHFUhdHt1oHFWFhnP8rC2vcfOaRSLcD8Z9FOgIIIBBFiCLgg8QR3icZ3+3YOFqdZTTNh3OmpvTbvQn6vep8x3a78efyq5RrVZR5Eagg2II1BBHAzObwb3VcTgEw7qxqrUUu+hD00VyGPeHDBL6a2vzA1xKy9yfH/AFJLBvo/785rljMkI6NUEC2suwZj8TTyqxRbEEWsPfQeR+EuTcqCp4gcZKE9/GeXlzg9lYmomdKLMvAHMgB+zmYXl3htgVyf3gWkttWYg+gVSbmReTGfV5x5XqViH/XCQsZc1MPVDlOqqFr2sEb0PDh4yHH4eqjZaiFDYEA24c+MeUvVR42IH4Td9m75quxzQV//ANILUEA/iVDr1mnAKjZQfrL520CpUY9kKb9/l4SfBIBp3HhK2TKo2ro0go0lYpu7KiKWdyAqqCWJ5AT2rw5CdU6M91jQT9prKRWqCyKw1ROZB4O3E8hYaaiTnl4wkZrcTY9TC4NaVUAVMzMwBuBmOgJGhNrXtNjiJy27u1yIiQEREBERAREQEjxFBHRkdQ6MLMrC4I5ESSIHLd5OjhlLPhe2vHqybOPBWJsw8DY+c0RbIzIwZHGjBwVZTyII0M+jZx/pbpg4xDbXqU/vqd83487bqq2NSLpf+K9+4cJmN3sGtaqFIuijMw8BYAepI9LzV2Tl7TZ9y8WEqPpckLYHldry/JlZjatxyXKStwx+FrZT1FREP8ykrp4AjumqbQ3fx9XV6yML6AM6C/doEm4YwLUQq6un8yMVbnoy62lpgsIlOmyio73Ym9TM7DgMim9rC3C3fOGXTv8AHy9e2v8AW7UpFafVpUJAIe4ygcO01xr32tfzmbxOy2q0rV8pq27LDUI3IcxfjzEqr0K5ZAlamifS/csHB7rXexuL6295fvUUIcoJtxc3A8/H0jy97no8fVlu45hXYrdeBBII8RxEgu5IAFyTZQBcknQBVGpPgJcbeqWxFSw1uP7QTw77yjYVUpiaDk/w1aZ9A6k/Cd8y3jt52U1lY6nuRuT1QWvi1DVeKUzYrT5Fu5n+C+J1G/QYnLlbburEREgIiICIiAiIgIiICIiAnIelNr41fCin99Q/OdenEekHE58fW5JkUfdQX/qLTXi/ZGTXGp3kL4UZgwJDAWDAkH3EuqdpXOnUs9qrzB7broNTn00vofUgay5TeR9A6XS9yQxvbvyg6X9ZiiItKXhxvxec2c+tkXeagNcrgjhZQT7sxlhtPel3BWimT+d2Lt5gcAZhykdWJWcGMWy5sqtEokm7NmbvJ4k8zFQEXtofnLojWW9SX1IyfSOFrZ0RxwdVb8QB+clmG3Pq5sDhSePVIPwqF+UzM5L2uRESAiIgIiICIiAiIgIiIAT5529Xz4ms/wBao5HkXJHwtPoV2sCeQJ9p8312JseevvN+Gdq16h8JI51kVKSt/FN50qrczy8VDwkYMkSCeiUrKl4GBSxlo51l2xlo3GRUu4dHWIz7Poc1zIfuuwHwtNmnPeiDF3oVqV9UcOPAOtvzRvedCnHlNZVadEREqkiIgIiICIiAiIgIiIFptapkoVW+rTc+yMZ881hYDyE73vY9sFiT/wBpx7qV+c4NiBpOjh6qtU0TKn4iRUjJG4zadISOOEpBlTSMyUJAJUTxlKHWVEQKSdJZudZOzaGW9YyuSXQuh1/32IXvKIfwuw/5Tq84r0U4jLjwO6pSdfUFXHwQztU5c/2WnRERKJIiICIiAiIgIiICIiBrfSBXyYGrzfKo9XW/9IacXqJpOtdKNS2EQc6yD2Rz8pye06eGelMu1pSOslPG8jIs0kUXmgleRtK+I/XKeWkoep3Tys2krQcJTW5QKAuktcQJfNwllXkZdJZjcatk2hhT/Pl/GrJ/yE+gJ837Ee2JoMLllq0jYanSop4ek+kDObk7iYRETNYiIgIiICIiAiIgIiIGJ3i2CmMRUd3QK+YFct7hWXXMp0sxmkbxbiU6NMPTqOxzAHMFIsQdRlA1vadNmP29TzYd/ABvwsG/IGXxyssnxFjky7nlrEVgPApr69qTLuQ9r9ev4D/7zbaSaCXIHZm3lUaaE+6brxqr6Ke7wJkWB3ez1FQ1LBnVb5dRmNr2v4zc8dwmN2RSLYmkB9dW9FIY/AGaS/japbd6awNk2LjObK7Lw7lJAPHjpMlgt1kcZmd/u5R+YMyO1aAStWX+c+xdyPzEyWyk7Ak39dolu2OTc+gOLVD95R+SyKvuthlN8jtbXVzbzbUaec2pJaY6mrXuL+fD2mUy9+2lZ/dWgqYZMqqobMwyiwsWOUjzWx9ZmJa7MYGjTtwyL/aBLqc+XdTOiIiQkiIgIiICIiAiIgIiICUVqYZWU8GBB9RaVxA0jBMcoU8V0P5S8AuJHiqZSs69xckeAbtD01+EkBAHj4Tfe0MbtDQSTdIAYkX45Gt53X5XkW0zprz0lW6qE4pTyVifbL+bTS/pWf1HvNhsuJc9z5WH4LH4gz3ZZ7P685c72YhWxAUcUUBvMgsPgRLTAHQ2ie8Ij/TKJLPHvlB8JeI0xO3quWmT4Skm60vTbd1q2fC02+0PZ2HymWmI3UTLhKIta63/ABMWv8Zl5hl3UzoiIkJIiICIiAiIgIiICIiAiIgW9bBU3N2QE89e6efsNP6g+MuYjdFlU2TQb+KmD53/AMyvDbPpU2LIgViLEi97ctZdRJ3TUWOJ2TQd8701ZyAMxvewvYaHxMJsegvCmo9T/mX0Sd3+motv+nUvqD4/5kVbY+HdcrU1KnWxvx95fRK+VFNNAoCqAAAAAOAA0AEqiICIiAiIgIiIH//Z" />
                                <Details>
                                    <ProductName><b>Product:</b> Kurta</ProductName>
                                    <ProductId><b>ID:</b> 333-232-111</ProductId>
                                    <ProductColor color="#31317e" />
                                    <ProductSize><b>Size:</b> 36.5</ProductSize>
                                </Details>
                            </ProductDetail>

                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add />
                                    <ProductAmount>1</ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice>Rs. 1299</ProductPrice>
                            </PriceDetail>
                        </Product>

                        <Product>
                            <ProductDetail>
                                <Image src="https://i.pinimg.com/736x/11/dc/f0/11dcf08215bf7c55d2b980be73341950.jpg" />
                                <Details>
                                    <ProductName><b>Product:</b> Crop Top</ProductName>
                                    <ProductId><b>ID:</b> 163-655-696</ProductId>
                                    <ProductColor color="#ca9b8f" />
                                    <ProductSize><b>Size:</b> 36.5</ProductSize>
                                </Details>
                            </ProductDetail>

                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add />
                                    <ProductAmount>1</ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice>Rs. 1499</ProductPrice>
                            </PriceDetail>
                        </Product>

                    </Info>
                    <Summary>
                        <SummarWrapper>
                            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                            <SummaryItem>
                                <SummaryItemText>Subtotal</SummaryItemText>
                                <SummaryItemPrice>Rs. 3896</SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem>
                                <SummaryItemText>Estimated Shipping</SummaryItemText>
                                <SummaryItemPrice>Rs. 50</SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem>
                                <SummaryItemText>Shipping Discount</SummaryItemText>
                                <SummaryItemPrice>Rs. -50</SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem type="total">
                                <SummaryItemText>Total</SummaryItemText>
                                <SummaryItemPrice>Rs. 3896</SummaryItemPrice>
                            </SummaryItem>
                            <SummaryButton>CHECKOUT NOW</SummaryButton>
                        </SummarWrapper>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Cart;

const Container = styled.div``;

const Wrapper = styled.div`
    padding: 20px;
`;

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

const TopButton = styled.button`
    padding: 20px 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${(props => props.type === "filled" && "none")};
    background-color: ${(props => props.type === "filled" ? "black" : "transparent")};
    color: ${(props => props.type === "filled" && "white")};
    outline: none;
`;

const TopTexts = styled.div``;

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0 10px;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Info = styled.div`
    flex: 3;
`;


const Product = styled.div`
    display: flex;
    justify-content: space-between;

    border: 1px solid #e9e9e9;
    border-radius: 20px;
    margin: 20px 0;
`;

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`;

const Image = styled.img`
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 20px;
`;

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
`;
const ProductSize = styled.span``;

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    
    > :nth-child(1), > :nth-child(3) {
        cursor: pointer;
    }
    
    > :nth-child(2) {
        padding: 0 18px;
        border: 1px solid teal;
        border-radius: 5px;
        text-align: center;
    }

`;

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
`;

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
`;

const Summary = styled.div`
    flex: 1;
    padding: 20px;
    margin: 0 20px;
    position: relative;
`;

const SummarWrapper = styled.div`
    border: 0.5px solid lightgray;
    border-radius: 10px;
    width: 100%;
    height: 50vh;
    padding: 20px;
    
    position: sticky;
    top: 30%;
`;

const SummaryTitle = styled.h1`
    font-weight: 200;
    margin-top: 20px;
`;

const SummaryItem = styled.div`
    margin: 30px 0;
    display: flex;
    justify-content: space-between;

    font-weight: ${props => props.type === "total" && "500"};
    font-size: ${props => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const SummaryButton = styled.button`
    padding: 15px;
    width: 100%;
    cursor: pointer;
    background-color: #202020;
    color: #e0e0e0;
    border: none;

    :hover {
        opacity: 0.9;
    }
`;