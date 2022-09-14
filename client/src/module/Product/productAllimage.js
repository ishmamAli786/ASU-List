import React from 'react'
import {useLocation} from 'react-router-dom';
import Container from "@material-ui/core/Container";
import Navbar from "../../component/Common/Navbar/Navbar";
import share from "../../../src/assets/icons/share.png";
import hearts from "../../../src/assets/icons/hearts.png";
import Grid from "@material-ui/core/Grid";




const ProductAllimage = () => {
    const {state} = useLocation();
  return (
    <>
    <Navbar isLogin="true"/>
    <Container>
    <div style={{marginTop:"60px"}}>
        <div style={{float:"right",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <div>
            <img src={share} alt="share" style={{marginRight:"5px"}}/>
            <span>Share</span>
        </div>
        <div style={{marginLeft:"15px"}}>
            <img src={hearts} alt="share" style={{marginRight:"5px"}}/>
            <span>Share</span>
        </div>
        </div>
        <div style={{width:"65%",margin:"0 auto"}}>
            <Grid container spacing={2}>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <img src={`${process.env.REACT_APP_ROOT}/uploads/${state[0].img}`} alt="image" style={{borderRadius:"10px", height:"25rem",
                    width:"100%",}}/>
                </Grid>
            {/* </Grid> */}
            {state.map((item,index)=>{
                return (
                    index >0 ? (
           
                <Grid item lg={6} md={6} sm={6} xs={12}>
                    <img src={`${process.env.REACT_APP_ROOT}/uploads/${item.img}`} alt="image" style={{borderRadius:"8px",  height:'12rem',
                      width:'100%',}}/>
                </Grid>
            
            ):("")
                )
            })}
            {/* <Grid container spacing={2}>
                <Grid item lg={6}>
                    <img src={byid2} alt="image" style={{borderRadius:"8px"}}/>
                </Grid>
                <Grid item lg={6}>
                    <img src={byid3} alt="image" style={{borderRadius:"8px"}}/>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item lg={12}>
                    <img src={byId4} alt="image" width="100%" style={{borderRadius:"10px"}}/>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
            <Grid item lg={6}>
                    <img src={byId5} alt="image" style={{borderRadius:"8px"}}/>
                </Grid>
                <Grid item lg={6}>
                    <img src={byId5} alt="image" style={{borderRadius:"8px"}}/>
                </Grid>*/}
            </Grid> 
        </div>
    </div>
    </Container>
    {/* <Container>
    <div style={{marginTop:"60px"}}>
        <div style={{float:"right",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <div>
            <img src={share} alt="share" style={{marginRight:"5px"}}/>
            <span>Share</span>
        </div>
        <div style={{marginLeft:"15px"}}>
            <img src={hearts} alt="share" style={{marginRight:"5px"}}/>
            <span>Share</span>
        </div>
        </div>
        <div style={{width:"50%",margin:"0 auto"}}>
            <Grid container>
                <Grid item lg={12}>
                    <img src={byid1} alt="image" style={{borderRadius:"10px"}}/>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item lg={6}>
                    <img src={byid2} alt="image" style={{borderRadius:"8px"}}/>
                </Grid>
                <Grid item lg={6}>
                    <img src={byid3} alt="image" style={{borderRadius:"8px"}}/>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item lg={12}>
                    <img src={byId4} alt="image" width="100%" style={{borderRadius:"10px"}}/>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
            <Grid item lg={6}>
                    <img src={byId5} alt="image" style={{borderRadius:"8px"}}/>
                </Grid>
                <Grid item lg={6}>
                    <img src={byId5} alt="image" style={{borderRadius:"8px"}}/>
                </Grid>
            </Grid>
        </div>
    </div>
    </Container> */}
    </>
  )
}

export default ProductAllimage