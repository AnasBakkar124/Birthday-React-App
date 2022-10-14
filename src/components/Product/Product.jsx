import React from "react";
import { Card, Button, Row, Col } from "antd";
import Products from "../Products";
import Data from "../../Data";

import { ShoppingCartOutlined } from "@ant-design/icons";

const Product = () => {
	const { Meta } = Card;

	return (
		<>
			<div className="site-card-border-less-wrapper">
				<div >
						<Row style={{ justifyContent: "space-around" }}>
							<Col>
              {Data.slice().map((card) => {
					return (
								<Card
									hoverable
									style={{ width: 240, justifyContent: "space-around" ,margin :"10px"}}
									cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" style={{ justifyContent: "space-around" }} />}
								>
									<p>Name: {card.name}</p>
									<p>Price: {card.price}</p>

									<Button aria-label="Add to Cart">
										<ShoppingCartOutlined />
									</Button>
								</Card>
                );
				})}
        
							</Col>
              <Col>
              <Card
					hoverable 
					style={{
						width: 240,
					}}
					cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
				>
					<Meta title="Europe Street beat" description="www.instagram.com" />
				</Card>
              </Col>
						</Row>
            </div>
				
				
        
			</div>
		</>
	);
};

export default Product;
