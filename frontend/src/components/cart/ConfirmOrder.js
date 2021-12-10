import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Confirm.css";
import MetaData from "../layout/MetaData";
import CheckoutSteps from "./CheckoutSteps";
import Box from "@material-ui/core/Box";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import BadgeIcon from "@mui/icons-material/Badge";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";

import List from "@material-ui/core/List";
import FlagIcon from "@mui/icons-material/Flag";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@mui/icons-material/Home";

import { useSelector } from "react-redux";
import { Avatar, IconButton } from "@material-ui/core";

const ConfirmOrder = ({ history }) => {
    const { cartItems, shippingInfo } = useSelector((state) => state.cart);
    const { user } = useSelector((state) => state.auth);

    // Calculate Order Prices
    const itemsPrice = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );
    const shippingPrice = itemsPrice > 200 ? 0 : 25;
    const taxPrice = Number((0.05 * itemsPrice).toFixed(2));
    const totalPrice = (itemsPrice + shippingPrice + taxPrice).toFixed(2);

    const processToPayment = () => {
        const data = {
            itemsPrice: itemsPrice.toFixed(2),
            shippingPrice,
            taxPrice,
            totalPrice,
        };

        sessionStorage.setItem("orderInfo", JSON.stringify(data));
        history.push("/payment");
    };

    useEffect(() => {
        const app = document.getElementsByClassName("App")[0];
        app.classList.add("shipConfirm");

        return () => {
            app.classList.remove("shipConfirm");
        };
    }, []);

    const UserInfo = () => {
        return (
            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    "& > :not(style)": {
                        m: 1,
                    },
                    justifyContent: "center",
                }}
            >
                <Stack
                    direction={`${window.innerWidth < 561 ? "column" : "row"}`}
                    spacing={2}
                >
                    <Paper
                        sx={{ p: 2, width: 380 }}
                        className="confirm_order_container-item"
                    >
                        <Typography
                            variant="h3"
                            sx={{ fontWeight: 500 }}
                            component="div"
                            gutterBottom
                        >
                            Shipping Info
                        </Typography>

                        <List>
                            <ListItem style={{ display: "block", paddingLeft: 0 }}>
                                <Box>
                                    <ListItem>
                                        <Stack
                                            direction="row"
                                            spacing={2}
                                            className="stack_item__confirm"
                                        >
                                            <Stack
                                                direction="row"
                                                spacing={1}
                                                style={{ lineHeight: "1.5" }}
                                            >
                                                <BadgeIcon />
                                                <strong className="subtitle_confirm">Name:</strong>
                                            </Stack>
                                            <ListItemText
                                                primary={user && user.name}
                                                sx={{ fontWeight: 500 }}
                                                className="list_item_text_confirm"
                                            />
                                        </Stack>
                                    </ListItem>
                                </Box>
                            </ListItem>
                            <ListItem style={{ display: "block", paddingLeft: 0 }}>
                                <Box>
                                    <ListItem>
                                        <Stack
                                            direction="row"
                                            spacing={2}
                                            className="stack_item__confirm"
                                        >
                                            <Stack direction="row" spacing={1}>
                                                <ContactPhoneIcon />
                                                {window.innerWidth < 401 ? (
                                                    <strong className="subtitle_confirm">Phone:</strong>
                                                ) : (
                                                    <strong className="subtitle_confirm">
                                                        Phone Number:
                                                    </strong>
                                                )}
                                            </Stack>
                                            <ListItemText
                                                primary={shippingInfo.phoneNo}
                                                sx={{ fontWeight: 500 }}
                                                className="list_item_text_confirm"
                                            />
                                        </Stack>
                                    </ListItem>
                                </Box>
                            </ListItem>
                            <ListItem style={{ display: "block", paddingLeft: 0 }}>
                                <Box>
                                    <ListItem>
                                        <Stack
                                            direction="row"
                                            spacing={2}
                                            className="stack_item__confirm"
                                        >
                                            <Stack direction="row" spacing={1}>
                                                <HomeIcon />
                                                <strong className="subtitle_confirm">Addres:</strong>
                                            </Stack>
                                            <ListItemText
                                                primary={`${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.postalCode}`}
                                                sx={{ fontWeight: 500 }}
                                                className="list_item_text_confirm"
                                            />
                                        </Stack>
                                    </ListItem>
                                </Box>
                            </ListItem>
                            <ListItem style={{ display: "block", paddingLeft: 0 }}>
                                <Box>
                                    <ListItem>
                                        <Stack
                                            direction="row"
                                            spacing={2}
                                            className="stack_item__confirm"
                                        >
                                            <Stack direction="row" spacing={1}>
                                                <FlagIcon />
                                                <strong className="subtitle_confirm">Country:</strong>
                                            </Stack>
                                            <ListItemText
                                                primary={shippingInfo.country}
                                                sx={{ fontWeight: 500 }}
                                                className="list_item_text_confirm"
                                            />
                                        </Stack>
                                    </ListItem>
                                </Box>
                            </ListItem>
                        </List>
                    </Paper>

                    <Paper
                        sx={{ p: 2, width: 380 }}
                        className="confirm_order_container-item"
                    >
                        <Typography
                            variant="h3"
                            sx={{ fontWeight: 500 }}
                            component="div"
                            gutterBottom
                        >
                            Order Summary
                        </Typography>

                        <List>
                            <ListItem style={{ display: "block", paddingLeft: 0 }}>
                                <Box>
                                    <ListItem>
                                        <Stack
                                            direction="row"
                                            spacing={2}
                                            className="stack_item__confirm"
                                        >
                                            <Stack
                                                direction="row"
                                                spacing={1}
                                                style={{ lineHeight: "1.5" }}
                                            >
                                                <BadgeIcon />
                                                <strong className="subtitle_confirm">Subtotal:</strong>
                                            </Stack>
                                            <ListItemText
                                                primary={itemsPrice.toFixed(2)}
                                                className="list_item_text_confirm"
                                            />
                                        </Stack>
                                    </ListItem>
                                </Box>
                            </ListItem>
                            <ListItem style={{ display: "block", paddingLeft: 0 }}>
                                <Box>
                                    <ListItem>
                                        <Stack
                                            direction="row"
                                            spacing={2}
                                            className="stack_item__confirm"
                                        >
                                            <Stack direction="row" spacing={1}>
                                                <ContactPhoneIcon />
                                                <strong className="subtitle_confirm">Shipping:</strong>
                                            </Stack>
                                            <ListItemText
                                                primary={shippingPrice}
                                                sx={{ fontWeight: 500 }}
                                                className="list_item_text_confirm"
                                            />
                                        </Stack>
                                    </ListItem>
                                </Box>
                            </ListItem>
                            <ListItem style={{ display: "block", paddingLeft: 0 }}>
                                <Box>
                                    <ListItem>
                                        <Stack
                                            direction="row"
                                            spacing={2}
                                            className="stack_item__confirm"
                                        >
                                            <Stack direction="row" spacing={1}>
                                                <HomeIcon />
                                                <strong className="subtitle_confirm">Tax:</strong>
                                            </Stack>
                                            <ListItemText
                                                primary={taxPrice}
                                                sx={{ fontWeight: 500 }}
                                                className="list_item_text_confirm"
                                            />
                                        </Stack>
                                    </ListItem>
                                </Box>
                            </ListItem>
                            <ListItem style={{ display: "block", paddingLeft: 0 }}>
                                <Box>
                                    <ListItem>
                                        <Stack
                                            direction="row"
                                            spacing={2}
                                            className="stack_item__confirm"
                                        >
                                            <Stack direction="row" spacing={1}>
                                                <FlagIcon />
                                                <strong className="subtitle_confirm">Total:</strong>
                                            </Stack>
                                            <ListItemText
                                                primary={totalPrice}
                                                sx={{ fontWeight: 500 }}
                                                className="list_item_text_confirm"
                                            />
                                        </Stack>
                                    </ListItem>
                                </Box>
                            </ListItem>
                        </List>
                    </Paper>
                </Stack>
            </Box>
        );
    };

    return (
        <Fragment>
            <MetaData title={"Confirm Order"} />

            <CheckoutSteps shipping confirmOrder />

            <UserInfo />

            <Box
                 sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    "& > :not(style)": {
                        m: 1,
                    },
                    justifyContent: "center",
                }}
            >
                <Stack
                    direction="column"
                    spacing={2}
                    sx={{ marginBottom: "8%", mt: '5%', justifyContent: "center" }}
                >
                    <Paper sx={{ p: 2, width: '72ch' }} className="confirm_order_container-item-pS">
                        <Typography
                            variant="h3"
                            sx={{ fontWeight: 500 }}
                            component="div"
                            gutterBottom
                        >
                            Product Summary
                        </Typography>
                        {cartItems.map((item, index) => {
                            return (
                                <Stack
                                    direction="row"
                                    key={index}
                                    spacing={2}
                                    sx={{ justifyContent: "space-between" }}
                                >
                                    <IconButton
                                        className="iconBtn"
                                        style={{
                                            borderRadius: "8rem",
                                            width: "67%",
                                            marginBottom: "1rem",
                                            borderBottom: "1px solid darkseagreen",
                                        }}
                                    >
                                        <Link
                                            to={`/product/${item.product}`}
                                            style={{ width: "100%" }}
                                        >
                                            <Stack
                                                direction="row"
                                                spacing={2}
                                                sx={{ justifyContent: "space-between" }}
                                            >
                                                <Avatar
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="avatar_img_sidebar_confirm"
                                                />
                                                {window.innerWidth < 561 && (
                                                    <Stack
                                                        direction={
                                                            window.innerWidth < 500 ? "column" : "row"
                                                        }
                                                        spacing={2}
                                                        className="stack_product_calc"
                                                    >
                                                        <ListItemText
                                                            primary={item.name}
                                                            id="list_item_text_confirm"
                                                            style={{
                                                                textTransform: "capitalize",
                                                                maxWidth: "fit-content",
                                                                color: "#000000",
                                                            }}
                                                        />
                                                        <p
                                                            style={{ placeSelf: "center" }}
                                                            className="calc_price_info"
                                                        >
                                                            {item.quantity} x ${item.price} ={" "}
                                                            <b>
                                                                ${(item.quantity * item.price).toFixed(2)}
                                                            </b>
                                                        </p>
                                                    </Stack>
                                                )}
                                                <ListItemText
                                                    primary={item.name}
                                                    className="hide_listItem-confirm"
                                                    id="list_item_text_confirm"
                                                    style={{
                                                        textTransform: "capitalize",
                                                        maxWidth: "fit-content",
                                                        color: "#000000",
                                                    }}
                                                />
                                            </Stack>
                                        </Link>
                                    </IconButton>
                                    <Box
                                        sx={{ display: "flex" }}
                                        className="hide_listItem-confirm"
                                    >
                                        <p style={{ placeSelf: "center" }}>
                                            {item.quantity} x ${item.price} ={" "}
                                            <b>${(item.quantity * item.price).toFixed(2)}</b>
                                        </p>
                                    </Box>
                                </Stack>
                            );
                        })}
                    </Paper>
                    <Button
                        variant="contained"
                        style={{ fontSize: "1.6rem", margin: "5% auto 0" }}
                        onClick={processToPayment}
                    >
                        Proceed to Payment
                    </Button>
                </Stack>
            </Box>
        </Fragment>
    );
};

export default ConfirmOrder;
