import React, {useState, useEffect } from "react";
import Navbar from "../../component/Common/Navbar/Navbar";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { getCategory, getProduct,clearMessages,getProductByCategoryid,getAllProductBypage } from "../../store/actions/index";
import { useDispatch, useSelector } from "react-redux";
import heart from "../../../src/assets/icons/heart.png";
import { useNavigate } from "react-router-dom";
import InfiniteScroll from 'react-infinite-scroll-component';
import "./Home.scss";
import Right from "../../assets/icons/arrow-right.png";
import Left from "../../assets/icons/left.png";

const Home = ({ showAlert }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { categories } = useSelector((state) => state.categoryReducer);
  const { products, message,productCount } = useSelector((state) => state.productReducer);
  const [showLeftBtn, setShowLeftBtn] = useState(false);
  const [showRightBtn, setShowRightBtn] = useState(true);

  useEffect(() => {
    dispatch(getCategory());
    dispatch(getProduct());
  }, []);

  const handleCategory =(id)=>{
    dispatch(getProductByCategoryid(id))
  }

  const fetchMoreData=()=>{
    const pageLimit = 8
    let pageNo = Math.ceil((products.length / pageLimit)+1)
    if(products.length<productCount){
      dispatch(getAllProductBypage(pageNo));
    }
  }

  useEffect(() => {
    if (showAlert) {
      alert("You Are Not Login Kindly Login First");
    }
  }, [showAlert]);
  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 100;
    if (slider.scrollLeft >= 561) {
      setShowRightBtn(false);
      setShowLeftBtn(true);
    } else {
      setShowRightBtn(true);
      setShowLeftBtn(true);
    }
  };
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 100;
    if (slider.scrollLeft <= 0) {
      setShowLeftBtn(false);
      setShowRightBtn(true);
    } else {
      setShowLeftBtn(true);
      setShowRightBtn(true);
    }
  };
  return (
    <>
      <Navbar isLogin="true" />
      {message ? (
        <Container className="no_product_found">{message}</Container>
      ) : (
        <>
        <Container >
        <div
          style={{ display: "flex"}}
          className="category"
        >
          <div
            onClick={slideLeft}
            style={
              showLeftBtn
                ? {
                    display: "block",
                    fontSize: "3rem",
                    marginTop: "1.5rem",
                    cursor: "pointer",
                  }
                : {
                    display: "none",
                    fontSize: "3rem",
                    marginTop: "1.5rem",
                    cursor: "pointer",
                  }
            }
          >
            <img src={Left} alt="image" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "fit-content",
              overflowX: "hidden",
              scrollBehavior: "smooth",
              textAlign: "center",
            }}
            className="category_box"
            id="slider"
          >
            {categories.map((item) => (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "2rem",
                  textAlign: "center",
                }}
                className="category-item"
              >
                <img src={`${process.env.REACT_APP_ROOT}/uploads/${item.image}`} alt="image" width="40px" height="40px" style={{cursor: "pointer"}} />
                <br></br>
                <span onClick={()=>handleCategory(item._id)} style={{marginTop:'-15px',cursor: "pointer"}}>{item.name}</span>
              </div>
            ))}
          </div>
          <div
            onClick={slideRight}
            style={
              showRightBtn
                ? {
                    display: "block",
                    fontSize: "3rem",
                    marginTop: "1.5rem",
                    cursor: "pointer",
                  }
                : {
                    display: "none",
                    fontSize: "3rem",
                    marginTop: "1.5rem",
                    cursor: "pointer",
                  }
            }
          >
            <img src={Right} alt="image" />
          </div>
        </div>
          </Container>
          <InfiniteScroll
    dataLength={products}
    next={fetchMoreData}
   style={{overflow:'hidden'}}
    hasMore={products.length<productCount}
    loader={<h4>Loading...</h4>}
  >
    <>
    <Container>
    <Grid container spacing={6} className="product_grid">
            {products &&
              products.map((data, ind) => {
                return (
                  <Grid item lg={3} md={4} sm={4.5} xs={6}  key={ind}>
                    <div className="product_grid_main_div">
                      {data.productPicture.length > 0 ? (
                        <>
                          <img
                            src={`${process.env.REACT_APP_ROOT}/uploads/${data.productPicture[0].img}`}
                            onClick={() => navigate(`product/${data._id}`)}
                            style={{width:"100%",height:"100%"}}
                            className="product_grid_img"
                            alt="image"
                          />
                          <div className="product_grid_img_div">
                            <img
                              src={heart}
                              alt="image"
                              style={{ marginTop: "30px",marginRight:"10px" }}
                            />
                          </div>
                        </>
                      ) : (
                        <>
                          <img
                            src={""}
                            onClick={() => navigate(`product/${data._id}`)}
                            className="product_grid_img"
                            style={{width:"100%",height:"100%"}}
                            alt="image"
                          />
                          <div className="product_grid_img_div">
                            <img
                              src={heart}
                              alt="image"
                              style={{ marginTop: "30px" }}
                            />
                          </div>
                        </>
                      )}
                      <p>
                        {data.desc} <br></br>bathroom lease<br></br>(August 1
                        2022 -July 31
                      </p>
                    </div>
                  </Grid>
                );
              })}
          </Grid>
          </Container>
    </>
  </InfiniteScroll>
        </>
      )}
    </>
  );
};

export default Home;
