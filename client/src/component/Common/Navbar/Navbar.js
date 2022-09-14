import React, { useEffect, useState } from "react";
import { alpha, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MoreIcon from "@material-ui/icons/MoreVert";
import './Navbar.scss'
import { useDispatch, useSelector } from "react-redux";
import {
  getProductByName,
  clearErrors,
  clearMessages,
} from "./../../../store/actions";
import ImageUploading from "react-images-uploading";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepButton from "@material-ui/core/StepButton";
import TextField from "@material-ui/core/TextField";
import { useNavigate } from "react-router-dom";
import SearchIcons from "./../../../assets/icons/Vector.png";
import toast, { Toaster } from "react-hot-toast";
import {addproduct} from "../../../../src/store/actions/product.action";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import { Fade } from "@material-ui/core";
import { Backdrop } from "@material-ui/core";
const steps = ["Step 1", "Step 2", "Step 3"];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  cstmNav: {
    backgroundColor: "white",
    color: "black",
  },
  cstmNav1: {
    backgroundColor: "white",
    color: "black",
    paddingLeft: "245px",
    paddingRight: "80px",
    borderBottom: "1px solid #A8A8A8",
    boxShadow: "none !important",
  },
  navAsuList: {
    fontWeight: "700",
    fontSize: "38px",
    color: "#000000", 
    cursor: "pointer",
    marginLeft:'-250px',
    [theme.breakpoints.up("md")]: {
      width: "150px",  
    },
    [theme.breakpoints.up("lg")]: {
      // width: "200p/x",
      marginLeft:'0px'
    },
  },
  navSell: {
    fontWeight: "500",
    fontSize: "15px",
    color: "#4A4A4A",
    cursor: "pointer",
    backgroundColor: "#FFFFFF",
  },
  cstm_Search_main_div: {
    marginTop: "15px",
    marginBottom: "15px",
    marginLeft: "330px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    border: "1px solid #D9D9D9",
    borderRadius: "47px",
    width: "20rem",
    [theme.breakpoints.up("sm")]: {
      display: "none",
      marginLeft: "25px",
    },
    [theme.breakpoints.up("xs")]: {
      display: "none",
      //  marginLeft:"0px"
      marginLeft: "25px",
    },
    [theme.breakpoints.up("lg")]: {
      display: "flex",
    },
    [theme.breakpoints.up("md")]: {
      display: "flex",
      marginRight: "2rem",
    },
  },
  cstm_search_main_input_div: {
    marginLeft: "30px",
    marginTop: "8px",
  },
  cstm_search_main_input_label: {
    marginBottom: "-15px",
    fontWeight: "500",
    fontSize: "14px",
    marginLeft:"4px"
  },
  cstm_search_main_input: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "53.5%",
    height: "40px",
    paddingLeft: "5px",
    backgroundColor: "inherit",
    outline: "none",
    border: "none",
  },
  cstm_search_main_img: {
    backgroundColor: "red",
    padding: "8px",
    marginRight: "10px",
    borderRadius: "50%",
    cursor: "pointer !important",
  },
}));

export default function PrimarySearchAppBar({ isLogin }) {
  const classes = useStyles();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const [sellFormData, setSellFormData] = React.useState({
    name:"",
    category:"",
    desc:"",
    productPicture:[],

  });
  const formData = new FormData();
  const [images, setImages] = React.useState([]);
  const {categories} = useSelector((state)=>state.categoryReducer)
  const maxNumber = 69;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    
    setSellFormData({...sellFormData, productPicture: [...sellFormData.productPicture,...imageList]});
  };

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleLogout=()=>{
    localStorage.clear()
    toast.success('Logout Successfully');
    setTimeout(() => navigate('/login'), 1000);
    setTimeout(() => window.location.reload(), 2000);
  }



  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  //////////////////////////////////////////////////////
  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    if((sellFormData.name.length>0 && activeStep === 0) || (sellFormData.desc.length>0 && sellFormData.category.length > 0 && activeStep === 1) || (sellFormData.productPicture.length>0 && activeStep === 2) ){ 
      // handleComplete();
      const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? 
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
    }
    else
    {
      toast.error('Please Fill All The Fields');
    }
  };  

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };
  ///////////////////////////////////////////////////////
  
  const handleFirstInput = (e)=>
  {

    setSellFormData({...sellFormData, name: e.target.value});
  }
   
  const handleSecondInput = (e)=>
  {
    setSellFormData({...sellFormData, desc: e.target.value});
  }
  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <p
          style={{ fontWeight: "500", fontSize: "15px", color: "#4A4A4A" }}
          onClick={()=>handleOpen()}
        >
          Sell Something
        </p>
      </MenuItem>
      <MenuItem>
      {
        localStorage.getItem('authenticate') ?
        <p
          style={{ fontWeight: "500", fontSize: "15px", color: "#4A4A4A" }}
          onClick={() => handleLogout()}
        >
          Log Out
        </p>:
        <p
        style={{ fontWeight: "500", fontSize: "15px", color: "#4A4A4A" }}
        onClick={() => navigate("/login")}
      >
        Log In
      </p>
      }
      </MenuItem>
    </Menu>
  );
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const { loading, errors, message } = useSelector(
    (state) => state.authReducer
  );


  useEffect(() => {
    if (errors.length > 0) {
      toast.error(errors);
      dispatch(clearErrors());
    }
    if (message) {
      toast.success(message);
      dispatch(clearMessages());
      setTimeout(() => navigate("/"), 2000);
    }
  }, [errors, message]);

  const handleSearchClick = (e) => {
    e.preventDefault();
  };

  const handleSearch = () => {
    dispatch(getProductByName(name));
    setName("");
  };
  const handleFinishSellForm = () => {
    if(sellFormData.productPicture.length > 0) {
    formData.append("name", sellFormData.name);
    formData.append("desc", sellFormData.desc);
    formData.append("category", sellFormData.category);
    for (var i = 0; i < sellFormData.productPicture.length; i++) {
      formData.append("productPicture", sellFormData.productPicture[i].file);
    }
  

    dispatch(addproduct(formData));
    handleClose();
    setSellFormData(...sellFormData);
    }
    else
    {
      alert("please fill the form");
    }
  }

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    if(localStorage.getItem('authenticate')){
      setOpen(true);
    }
    else{
      toast.error('You Are Not Authenticate Please Login First');
    }
  }
  const handleClose = () => setOpen(false);
  return (
    <>
      {loading ? (
        "Loading"
      ) : (
        <div className={classes.grow}>
          <Toaster
            toastOptions={{
              style: {
                fontSize: "14px",
              },
            }}
          />
          <AppBar
            position="static"
            className={isLogin ? classes.cstmNav1 : classes.cstmNav}
          >
            <Toolbar>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="open drawer"
              >
                {/* <MenuIcon /> */}
              </IconButton>
              <Typography
                className={classes.title}
                variant="h6"
                noWrap
              ></Typography>
              <div>
                <div></div>
                <p className={classes.navAsuList} onClick={() => navigate("/")}>
                  ASU List
                </p>
              </div>
              <div className={classes.cstm_Search_main_div} style={{marginLeft:"280px"}}>
                <div className={classes.cstm_search_main_input_div}>
                  <p className={classes.cstm_search_main_input_label}>Search</p>
                  <input
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="What are you looking for?"
                    className={classes.cstm_search_main_input}
                    onClick={(e) => handleSearchClick(e)}
                  />
                </div>
                <div onClick={() => handleSearch()}>
                  <img
                    src={SearchIcons}
                    alt="image"
                    className={classes.cstm_search_main_img}
                  />
                </div>
              </div>
              <div className={classes.grow} />
              <div className={classes.sectionDesktop}>
                  <p
                    className={classes.navSell}
                    onClick={()=>handleOpen()}
                  >
                    Sell Something
                  </p>
                <IconButton
                  aria-label="show 17 new notifications"
                  color="inherit"
                ></IconButton>
                  {
                    localStorage.getItem('authenticate') ? 
                    <p
                    className={classes.navSell}
                    onClick={() => handleLogout()}
                  >
                    Log out
                  </p>:
                  <p
                  className={classes.navSell}
                  onClick={() => navigate("/login")}
                >
                  Log in
                </p>
                  }
              </div>
              <div className={classes.sectionMobile}>
                <IconButton
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
              </div>
            </Toolbar>
          </AppBar>
          {renderMobileMenu}
          {renderMenu}
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <Box
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 440,
                  backgroundColor: "white",
                  border: "none",
                  outline:'none',
                  borderRadius:'10px',
                  boxShadow: 24,
                  padding: 15,
                }}
              >
                <Stepper nonLinear activeStep={activeStep}>
                  {steps.map((label, index) => (
                    <Step key={label} completed={completed[index]}>
                      <StepButton color="inherit" >
                        {label}
                      </StepButton>
                    </Step>
                  ))}
                </Stepper>
                <div>
                  {allStepsCompleted() ? (
                    <React.Fragment>
                      <Typography sx={{ mt: 2, mb: 1 }}>
                        All steps completed - you&apos;re finished
                      </Typography>
                      <Box
                        sx={{ display: "flex", flexDirection: "row", pt: 2 }}
                      >
                        <Box sx={{ flex: "1 1 auto" }} />
                        <Button onClick={handleReset}>Reset</Button>
                      </Box>
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      {activeStep === 0 ? (
                        <>
                        <h3 style={{textAlign:'center'}}>What Are You Selling Today???</h3>
                        <TextField fullWidth label="name" value={sellFormData.name} onChange={handleFirstInput}/>
                        </>
                      ) : activeStep === 1 ? (
                        <>
                        <TextField fullWidth label="description" value={sellFormData.desc} onChange={handleSecondInput}/>
                        <select onChange={(e)=>setSellFormData({...sellFormData,category:e.target.value})} style={{width:"100%",marginTop:"20px",padding:"7px",border:'none',backgroundColor:'white',borderBottom:"1px solid gray",outline:'none'}}>
                          <option style={{fontWeight:"bold"}}>Select Category</option>
                          {
                            categories.length > 0 &&
                            categories.map((item)=>{
                              return(
                                <option>{item.name}</option>
                              )
                            })
                          }
                        </select>
                        </>
                      ) : activeStep === 2 ? (
                        <ImageUploading
                          multiple
                          value={images}
                          onChange={onChange}
                          maxNumber={maxNumber}
                          dataURLKey="data_url"
                          acceptType={["jpg","jpeg","png"]}
                        >
                          {({ onImageUpload, dragProps }) => (
                            <>
                            <div style={{display:'flex',justifyContent:'center',flexDirection:'row',margin:"auto"}}>
                              <button
                                style={{height:"2rem",width:'6rem',background:'#fff',borderRadius:'10px',border:'1px solid #000',margin:'0.5rem'}}
                                onClick={onImageUpload}
                                {...dragProps}
                              >
                                Upload Images
                              </button>
                              </div>
                              <div style={{textAlign: 'center'}}>
                              {sellFormData.productPicture.length > 0 ? (
                                <>
                                <span style={{color:'#8fc0a9',fontWeight:'bold'}}>{sellFormData.productPicture.length+" "}
                                 Image has been uploaded   
                                 </span>
                                </>
                              ) : (
                                ""
                              )}
                            </div>
                            </>
                          )}
                        </ImageUploading>
                      ) : (
                        ""
                      )}
                      <Box
                        style={{ display: "flex", flexDirection: "row",justifyContent:'space-around',margin:'10px'}}
                      >
                        <Button
                          color="inherit"
                          disabled={activeStep === 0}
                          onClick={handleBack}
                          sx={{ mr: 1 }}
                        >
                          Back
                        </Button>
                        <Box sx={{ flex: "1 1 auto" }} />
                        { activeStep === 2 ? (
                        <Button onClick={handleFinishSellForm} sx={{ mr: 1 }}>
                          Finish
                        </Button>
                        ): (
                        <Button onClick={handleNext} sx={{ mr: 1 }}>
                          Next
                        </Button>
                        )
                        } 
                      </Box>
                    </React.Fragment>
                  )}
                </div>
              </Box>
            </Fade>
          </Modal>
        </div>
      )}
    </>
  );
}
