import React, { useEffect } from "react";
import Container from "@material-ui/core/Container";
import Navbar from "../../component/Common/Navbar/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductByid } from ".././../store/actions/index";
import Grid from "@material-ui/core/Grid";
import star from "../../../src/assets/icons/star.png";
import drive from "../../../src/assets/icons/drive.png";
import {
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./product.scss";
import group from "../../assets/icons/Group 1000002398.png";
import { BASE_URL } from "../../constants";
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, productByid } = useSelector((state) => state.productReducer);
  const classes = useStyles();
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  useEffect(() => {
    dispatch(getProductByid(id));
  }, []);

  const handleShowAllImage = (images) => {
    navigate("/product/images", { state: images });
  };
  return (
    <>
      <Navbar isLogin="true" />
      <Container>
        {loading ? (
          "Loading"
        ) : (
          <>
            <div style={{ marginTop: "20px" }}>
              <p className="product_desc_div">
                {productByid.desc} {productByid.subDesc}
              </p>
              <p className="product_desc_date">
                (August 1 2022 - July 31 2022)
              </p>
            </div>
            <Grid container spacing={2} style={{ marginTop: "2px" }}>
              <Grid item lg={6} md={5} sm={12} xs={12}>
                {productByid?.productPicture?.map((item, index) =>
                  index === 0 ? (
                    <img
                      src={`${process.env.REACT_APP_ROOT}/uploads/${item.img}`}
                      alt="image"
                      style={{
                        borderTopLeftRadius: "10px",
                        borderTopBottomRadius: "10px",
                        height: "25rem",
                        width: "98%",
                        borderRadius: "10px",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    ""
                  )
                )}
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <Grid container spacing={1}>
                  {productByid?.productPicture?.map((item, index) =>
                    index > 0 &&
                    index + 1 !== productByid?.productPicture.length ? (
                      <Grid item lg={6} md={6} sm={6} xs={12}>
                        <img
                          src={`${process.env.REACT_APP_ROOT}/uploads/${item.img}`}
                          alt="image"
                          style={{
                            height: "12rem",
                            width: "100%",
                            borderRadius: "10px",
                          }}
                        />
                      </Grid>
                    ) : index + 1 === productByid?.productPicture.length ? (
                      <Grid item lg={6} md={6} sm={6} xs={12}>
                        <div style={{ position: "relative" }}>
                          <img
                            src={`${BASE_URL}/uploads/${item.img}`}
                            alt="image"
                            style={{
                              height: "12rem",
                              width: "100%",
                              borderRadius: "10px",
                              // margin:"10px"
                            }}
                          />
                          <div
                            style={{
                              borderRadius: "11px",
                              padding: "3px",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              position: "absolute",
                              bottom: 0,
                              right: 0,
                              border: "1px solid black",
                              marginBottom: "25px",
                              // marginLeft:'20px',
                              backgroundColor: "white",
                            }}
                          >
                            <img
                              src={group}
                              alt="image"
                              style={{ paddingLeft: "8px" }}
                            />
                            <h4
                              style={{ padding: "0px 8px", cursor: "pointer" }}
                              onClick={() =>
                                handleShowAllImage(productByid.productPicture)
                              }
                            >
                              Show all photos
                            </h4>
                          </div>
                        </div>
                      </Grid>
                    ) : (
                      ""
                    )
                  )}
                </Grid>
              </Grid>
            </Grid>
          </>
        )}
        <span>Posted 12 days ago in Housing for Rent/Sale</span>{" "}
        <span>Verified Student</span>
        <Grid container spacing={10}>
          <Grid item lg={8}>
            <div style={{ margin: "15px 0px" }}>
              <p>Greta L Frederick-Graves</p>
              <p>1 bedroom - 1 bath at The District</p>
            </div>
            <hr></hr>
            <div style={{ marginTop: "30px" }}>
              <Grid container>
                <Grid item lg={1}>
                  <img src={drive} alt="image" />
                </Grid>
                <Grid item lg={11}>
                  <p>Drive Right in</p>
                  <span>
                    Looking to reassign my lease at The District. 1bd/1ba in a
                    4x4 Luxe unit.
                  </span>
                </Grid>
              </Grid>
              <Grid container style={{ marginTop: "30px" }}>
                <Grid item lg={1}>
                  <img src={star} alt="image" />
                </Grid>
                <Grid item lg={11}>
                  <p>Drive Right in</p>
                  <span>
                    Looking to reassign my lease at The District. 1bd/1ba in a
                    4x4 Luxe unit.
                  </span>
                </Grid>
              </Grid>
            </div>
          </Grid>
          <Grid
            item
            lg={4}
            style={{ border: "1px solid #D9D9D9", marginTop: "60px" }}
          >
            <div>
              <h5 className="product_desc_price">$1095.00</h5>
              <div style={{ border: "1px solid #BCBCBC" }}>
                <Grid container style={{ borderBottom: "1px solid #BCBCBC" }}>
                  <Grid item lg={6}>
                    <p>To:</p>
                    <p>01/08/2022</p>
                  </Grid>
                  <Grid
                    item
                    lg={6}
                    style={{
                      borderLeft: "1px solid #BCBCBC",
                      paddingLeft: "8px",
                    }}
                  >
                    <p>From:</p>
                    <p>01/08/2022</p>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item lg={12}>
                    <FormControl
                      className={classes.formControl}
                      style={{ width: "95%" }}
                    >
                      <p>Appartment:</p>
                      <InputLabel id="demo-simple-select-label">
                        1 Appartment
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        onChange={handleChange}
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>

                    <Button
                      variant="contained"
                      style={{
                        backgroundColor: "#DF1462",
                        color: "white",
                        margin: "20px 70px",
                        width: "60%",
                      }}
                    >
                      Make Offer
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Product;
