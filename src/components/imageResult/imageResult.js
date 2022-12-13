import React, { Component } from "react";
import propTypes from "prop-types";
import { GridList, GridTile } from "material-ui/GridList";
import IconButton from "material-ui/IconButton";
import ZoomIn from "material-ui/svg-icons/action/zoom-in";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";

class ImageResult extends Component {
   state = {
      open: false,
      currentImg: "",
   };

   handleOpen = (img) => {
      this.setState({ open: true, currentImg: img });
   };

   handleClose = () => this.setState({ open: false });

   render() {
      let imageList;
      const { images } = this.props;

      if (images) {
         imageList = (
            <GridList cols={4}>
               {images.map((img) => (
                  <GridTile
                     title={img.tags}
                     key={img.id}
                     actionIcon={
                        <IconButton onClick={() => this.handleOpen(img.largeImageURL)}>
                           <ZoomIn color="white" />
                        </IconButton>
                     }
                  >
                     <img src={img.largeImageURL} alt="" />
                  </GridTile>
               ))}
            </GridList>
         );
      } else {
         imageList = null;
      }
      const actions = (
         <FlatButton
            label="close"
            primary={true}
            onClick={this.handleClose}
         ></FlatButton>
      );
      return (
         <div style={{ marginLeft: 50, marginRight: 50, marginTop: 20 }}>
            {imageList}
            <Dialog
               actions={actions}
               modal={false}
               open={this.state.open}
               onRequestClose={this.handleClose}
            >
               <img src={this.state.currentImg} alt=" " style={{ width: "100%" }} />
            </Dialog>
         </div>
      );
   }
}

ImageResult.propTypes = {
   images: propTypes.array.isRequired,
};

export default ImageResult;
